/*
    global $
    global rheinDataEPSG2056
    global scalebarDataEPSG2056
    global Highcharts
*/
(function(){
    return {
        "chart": {		
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 485,
            "height": 415,
            "spacingBottom": 45,
            "style": {
                "fontFamily": "Arial"
            },
            "type": "map",
    		"inverted": false, 
    		animation: true
        },
        "title": {
            "style": {
                "fontSize": "14px",
                "fontWeight": "bold",
                "fontFamily": "Arial",
                "color": "#000000"
            },        
            "align": "left"
        },
        "subtitle": {
            "style": {
                "fontSize": "12px",
                "fontWeight": "normal",
                "fontFamily": "Arial",
                "color": "#000000"
            },
            "text": "",
            "align": "left"
        },
        "credits": {
            "enabled": true,
            "style": {
                "color": "#000000",
                "fontSize": "10px",
                "cursor": "default"
            },
            "position": {
                "align": "left",
                "verticalAlign": "bottom",
                "x": 10
            }
        },
        "colorAxis": {
    		"min": 0,
    		"gridLineColor": "#fbfbfb",	
            "gridLineWidth": 1,
            "labels": {	
    		    "style": {"color": "black", "cursor": "default", "fontSize": "11px", "textOverflow": "none"}
    		},
    		"marker": {
                    "color": "black"
            }
    	},    
        "mapNavigation": {
            "enabled": true,
            "buttonOptions": {
                "align": "left",
                "verticalAlign": 'bottom'
            }
        },
        "legend": {
    		"enabled": true, 
            "align": "right",
            "floating": true,
            "title": {
                "style": {
                    "fontWeight": "normal", 
                    "fontSize": "11px"
                }
            }
    	}, 
		/* series with fixed data that should be added to the series object after merging with csv data */
		"afterSeries": [
			{
				"name": "Rhein",
				"animation": true,
				"data": rheinDataEPSG2056, 
				"color": "#008AC3",    
				"borderColor": "#fbfbfb",
				tooltip: {
					pointFormatter: function(){
						return '<br/>';
					}
				}

			}, 
			{
				name: 'Massstab', 
				animation: true,
				type: 'mapline',
				data: scalebarDataEPSG2056,
				color: 'black', 
				tooltip: {
					pointFormatter: function(){
						return '<br/>';
					}
				}, 
				dataLabels: {
					enabled: true, 
					formatter: function(){
						return '1 km';
					}, 
					style: {fontSize: "12px", fontWeight: "normal", color: 'black'},
					y: -10
				}
    		}
		], 
		
		xAxis: {
			events: {
				//on zoom: unzoom columns (keep them at original size)
				afterSetExtremes: function(e){
					//only care about zoom events, not pan
					if (e.trigger == 'pan') return;
					//determine current zoom level
					var zoomRatio = (e.dataMax - e.dataMin) / (e.max - e.min);
					//adapt data values determined by zoomRatio now and before
					e.target.chart.series.forEach(function(value, index, array){
						if (value.options.type == 'mapcolumn'){
							var baselineYvalue = value.data[0].baselineYvalue;
							var zoomRatioBefore = value.data[0].zoomRatio;
							
							//handle zooming in and out by dividing zoomBefore and zoomAfter
							var ratiosOfZoomRatios = zoomRatio / zoomRatioBefore;
							
							//handle column width
							var columnWidthValueBefore = value.data[0].columnWidthValue;
							var columnWidthValue = columnWidthValueBefore / ratiosOfZoomRatios;

							//calculate and update data of each column
							var newData = value.data.map(function (val, i, arr){
								return {
									low: ((val.low - baselineYvalue) / ratiosOfZoomRatios) + baselineYvalue,
									high: ((val.high - baselineYvalue) / ratiosOfZoomRatios) + baselineYvalue,
									zoomRatio: zoomRatio,
									x: +value.data[0].POINT_X + (i + 1) * columnWidthValue,
									columnWidthValue: columnWidthValue
								};
							});
							value.setData(newData, false);
						}
					});
					
				}
			}
		},		
		
		customFunctions: {

		    
		    defineTemplateFoo: function(){
					Highcharts.seriesType('mapcolumn', 'columnrange');
    		    },
    		    
			// Compute max and min value to find relative sizes of bubbles. 
			getPointsExtremes: function(points){
                var maxNumber = Number.NEGATIVE_INFINITY;
                var maxAbsNumber = Number.NEGATIVE_INFINITY;
                var minNumber = Number.POSITIVE_INFINITY;
                var minAbsNumber = Number.POSITIVE_INFINITY;
				Highcharts.each(points, function (point) {
				    maxNumber = Math.max(maxNumber, point.value);
				    maxAbsNumber = Math.max(maxAbsNumber, Math.abs(point.value));
				    minNumber = Math.min(minNumber, point.value);
				    minAbsNumber = Math.min(minAbsNumber, Math.abs(point.value));
				});
				return {
				    maxNumber: maxNumber,
				    maxAbsNumber: maxAbsNumber,
				    minNumber: minNumber,
				    minAbsNumber: minAbsNumber
				};
			},
				    		    
				    		    
            //draw columns onto the map			    		    
            drawColumns: function(chart, columnSeries, choroplethSeries, columnRangeSeriesConfig, color){
            	//determine current zoom level
            	var e = chart.xAxis[0].getExtremes();
            	var zoomRatio = (e.dataMax - e.dataMin) / (e.max - e.min);
                //iterate over each wohnviertel and draw the columns
                Highcharts.each(columnSeries[0].points, function (data, i, array) {
                   
                    if (!columnSeries[0].yData[i]) {
                        return; // Skip points with no data, if any
                    }
                    
                	var correspondingMapSeriesItem = choroplethSeries.points[i];

                	//Width of a 5 pixel column in terms of xAxis units
                	var columnWidth = 5;
                	var columnWidthValue = chart.xAxis[0].toValue(100) - chart.xAxis[0].toValue(100 - columnWidth);
                	
                    //create the highcharts column chart config
                    var currentColumnSeries = function(config){
                        //define default properties
                        var mapColumnConfig = {
	                        type: 'mapcolumn',
	                        animation: true,
	                        name: data.series.name,
	                        wohnviertel_Name: data["hc-key"],
	                        wohnviertel_Id : correspondingMapSeriesItem.wohnviertel_Id,
	                        zIndex: 6, // Keep columns above connector lines
	                        showInLegend: false,
	                        dataLabels: {
						        enabled: false
						    }, 
						    pointWidth: columnWidth,
				            pointPadding: 0,
				            groupPadding: 0,
				            borderWidth: 0,						    
						    data: [],
                        };
                        
                        
                        //add data object to mapColumnConfig
                        columnSeries.forEach(function(item, index, arr){
                        	var value = item.yData[i];
                        	//POINT_X, POINT_Y: centroid for the wohnviertel (defined in geojson)
                        	var centroidX = +correspondingMapSeriesItem.properties.POINT_X;
                        	var centroidY = +correspondingMapSeriesItem.properties.POINT_Y;
                        	var baselineY = -centroidY;
                        	var valueY = -centroidY - 500 * value;
                        	mapColumnConfig.data.push(
                        		{
	                        		name: item.name,
	                        		x: +centroidX + (index + 1) * columnWidthValue,
	                        		low: Math.max(baselineY, valueY),
	                        		high: Math.min(baselineY, valueY),
	                        		v: value,
	                        		POINT_X: centroidX,
	                        		POINT_Y: centroidY,
	                        		baselineYvalue: baselineY,
	                        		zoomRatio: zoomRatio,
	                        		columnWidthValue: columnWidthValue,
	                        		color: color(value, index), //item.userOptions.color,
	                        		borderColor: color(value, index) //item.userOptions.borderColor
	                        	}
                    		);
                        });
                        

                        //create the config handed in from the chart
                        var columnTemplate = config(data, correspondingMapSeriesItem);
                        //merge the two configs (2nd into first, see e.g. https://gist.github.com/TorsteinHonsi/f646f39d51d18b7d6bfb)
                        return Highcharts.merge(true, mapColumnConfig, columnTemplate);
                    };
                    
                    // Add the columns for this wohnviertel to the chart
                    var mergeResult = currentColumnSeries(columnRangeSeriesConfig);
                    chart.addSeries(mergeResult, false);
                    
                    /*
                    // Draw connector to wohnviertel center if the pie has been offset
                    if (pieOffset.drawConnector !== false) {
                        var centerPoint = chart.fromLatLonToPoint({
                                lat: centerLat,
                                lon: centerLon
                            }),
                            offsetPoint = chart.fromLatLonToPoint({
                                lat: centerLat + (pieOffset.lat || 0),
                                lon: centerLon + (pieOffset.lon || 0)
                            });
                        pieSizeSeries.addPoint({
                            name: wohnviertel.id,
                            path: 'M' + offsetPoint.x + ' ' + offsetPoint.y +
                                'L' + centerPoint.x + ' ' + centerPoint.y
                        }, false);
                    }
                    */
                    
                });
                // Only redraw once all columns and connectors have been added
                chart.redraw();
			},    		    
		    
            //helper functions for column legend
	        addLegendTitle: function(chart, title, x, y){
        		return chart.renderer.label(title, x, y)
     				.css({
	                    fontSize: '12px',
	                    fontWeight: 'bold'
	                })
	                .attr({
			        	zIndex: 6,
			        	//class: 'columnLegend'
			        }).add();	                
            },
	                
            addLegendCircle: function(chart, x, y, radius, fill){
            	return chart.renderer.circle(x, y, radius, fill).attr({
				    fill: fill,
				    stroke: fill,
				    'stroke-width': 1, 
				    zIndex: 6,
				    class: 'columnLegend'
				}).add();
            },
	                
	                
            addLegendLabel: function(chart, text, x, y, useHtml){
				return chart.renderer.label(text, x, y, undefined, undefined, undefined, useHtml).attr({
					zIndex: 6,
					class: 'columnLegend'
				}).add();
            },
            
            addLegendSquare: function(chart, x, y, width, fill){
            	return chart.renderer.rect(x, y, width, width, 0).attr({
		            'stroke-width':0,
		            fill: fill,
		            zIndex: 6,
		            class: 'columnLegend'
	        	}).add();
            },
            
            

			//Add click handler to bubbleLegend items
			AddColumnLegendClickHandler: function(chart){
			    $('.columnLegend').click(function(){
					//Toggle visible of mapcolumns
					Highcharts.each(chart.series, function (series) {
						if (series.userOptions.type == 'mapcolumn'){
							series.setVisible(!series.visible, false);
						}
					});
					chart.redraw();
					
					
					//if useHTMl is true, text is in span elements within DIVs classed .columnLegend. Add the class to these spans
					$('.columnLegend>span').addClass('columnLegend').addClass('columnLegendHtmlText');
					//toggle active state of legend elements
					var columnLegendItems = $('.columnLegend');
					//backup original color
					columnLegendItems.each(function(i, v){
						if (!$(this).attr('fill_active')) {
							//if no fill color is defined, set to  black
							$(this).attr('fill_active', $(this).attr('fill') || 'black');	
						}
						if (!$(this).attr('stroke_active')) {
							$(this).attr('stroke_active', $(this).attr('stroke') || null);	
						}
					});
					//toggle color
					if (columnLegendItems.attr('fill') == columnLegendItems.attr('fill_active')){
						//set all to grey
						columnLegendItems.attr('fill', '#cccccc');
						//if stroke is present, toggle it
						columnLegendItems.each(function(i, v){
							//if stroke_active is present, set it to grey
							if ($(this).attr('stroke_active')) {
								$(this).attr('stroke', '#cccccc');
							}
						});
						//same for html text spans
						$('.columnLegendHtmlText').css('color', '#cccccc');
					} 
					else {
						columnLegendItems.each(function(i, v){
							//set each to its fill_active color
							$(this).attr('fill', $(this).attr('fill_active'));	
							$(this).attr('stroke', $(this).attr('stroke_active'));	
						});
						//same for html text spans
						$('.columnLegendHtmlText').css('color', 'black');
					}
				});
			}      
		}
    };
    }()
);

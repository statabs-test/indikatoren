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
				    		    
				    		    
	            //draw pies onto he map			    		    
                drawColumns: function(chart, pieSizeSeries, pieSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig){

                    //iterate over each wohnviertel and draw the pies / bubbles
	                Highcharts.each(pieSizeSeries.points, function (data, i) {
	                    
	                    if (!data.value) {
	                        return; // Skip points with no data, if any
	                    }
	                    
	                    //if (false || i > 5) {return null}
	                    
	                	var correspondingMapSeriesItem = choroplethSeries.points[data.index];

	                	//Width of a 5 pixel column in terms of xAxis units
	                	var columnWidthValue = chart.xAxis[0].toValue(100) - chart.xAxis[0].toValue(95);
	                	//console.log(columnWidthValue);
	                	
	                	
                        //create the highcharts pie chart config
	                    var currentColumnSeries = function(config){
	                        //define default properties
	                        var mapColumnConfig = {
    	                        type: 'mapcolumn',
    	                        animation: true,
    	                        name: data.series.name,
    	                        wohnviertel_Name: data["hc-key"],
    	                        wohnviertel_Id : correspondingMapSeriesItem.wohnviertel_Id,
    	                        zIndex: 6, // Keep pies above connector lines
    	                        borderWidth: 1,
    	                        showInLegend: false,
		                        dataLabels: {
							        enabled: false
							    }, 
							    pointWidth: 5,
						        data: [{
						        	name: 'Test1',
							      x: +correspondingMapSeriesItem.properties.POINT_X - columnWidthValue / 2,
							      low: -correspondingMapSeriesItem.properties.POINT_Y - 500,
							      high: -correspondingMapSeriesItem.properties.POINT_Y,
							      color: 'green',
							      borderColor: 'green'
							    }, {
							    	name: 'Test2',
							      x: +correspondingMapSeriesItem.properties.POINT_X + columnWidthValue / 2,
							      low: -correspondingMapSeriesItem.properties.POINT_Y - 240,
							      high: -correspondingMapSeriesItem.properties.POINT_Y,
							      color: 'blue',
							      borderColor: 'blue'
							    }],
	                        };
	                        
	                        
	                        //add data object to mapPieConfig: for bubbles only one, for pies several
	                        /*
	                        pieSeries.forEach(function(item, index, arr){
	                        	mapColumnConfig.data.push(
	                        		{
		                        		name: item.name,
		                        		//put absolute value in y, real value in v
		                        		y: Math.abs(item.points[i].y),
		                        		v: item.points[i].y,
		                        		color: item.userOptions.color,
		                        		borderColor: item.userOptions.borderColor
		                        	}
                        		);
	                        });
	                        */

	                        //create the config handed in from the chart
	                        var columnTemplate = config(data, correspondingMapSeriesItem);
	                        //merge the two configs (2nd into first, see e.g. https://gist.github.com/TorsteinHonsi/f646f39d51d18b7d6bfb)
	                        return Highcharts.merge(true, mapColumnConfig, columnTemplate);
	                    };
	                    
	                    // Add the pie for this wohnviertel to the chart
	                    var mergeResult = currentColumnSeries(pieSeriesConfig);
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
	                // Only redraw once all pies and connectors have been added
	                chart.redraw();
				},    		    
    		    
                //helper functions for pie legend
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
						//Toggle visible of mappies
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

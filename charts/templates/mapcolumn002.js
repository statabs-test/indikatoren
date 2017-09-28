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
    		animation: true,
    		events:{
				redraw: function() {
					var fn = this.options.customFunctions;
			    	if (fn.redrawEnabled) {
			        	fn.redrawEnabled = false;
			        	fn.positionColumnSeries(this, fn.columnChartConfiguration.chartWidth, fn.columnChartConfiguration.chartHeight);
			            //console.log(this);
			        	fn.redrawEnabled = true;
			        }
			    }, 
    		
    		}
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
				/*
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
				*/
			}
		},		

		
		customFunctions: {
			
			redrawEnabled: true,
			
			columnChartConfiguration: {
			},

			//position the columns at the correct location within the wohnviertel
			positionColumnSeries: function(chart, chartWidth, chartHeight){
			  var mapXAxis = chart.xAxis[0];
			  var mapYAxis = chart.yAxis[0];
			  var zoomRatio = (mapXAxis.dataMax - mapXAxis.dataMin) / (mapXAxis.max - mapXAxis.min);
			
			  Highcharts.each(chart.series[0].points, function(state) {
			    var stateCenterX = mapXAxis.toPixels(state.series.mapData[state.index].properties.POINT_X),
			      stateCenterY = mapYAxis.toPixels(-state.series.mapData[state.index].properties.POINT_Y),
			      chartWidthZoomed = chartWidth * zoomRatio || 10, // stateWidth / 6,
			      chartHeightZoomed = chartHeight * zoomRatio || 50,// stateHeight / 2,
			      axisIndex = state.index + 1,
			      xAxis = chart.xAxis[axisIndex],
			      yAxis = chart.yAxis[axisIndex];
				
				/*
			    // applay minimum column plot dimensions if needed
			    if (chartWidth < minColumnWidth) {
			      chartWidth = minColumnWidth;
			    }
			    if (chartHeight < minColumnHeight) {
			      chartHeight = minColumnHeight;
			    }
			    */
			
			    var left = stateCenterX - (chartWidthZoomed / 2),
			      top = stateCenterY - chartHeightZoomed / 2;
			
			    // hide series which don't fit in the plot area
			    if (left - chart.plotLeft  < 0 || left - chart.plotLeft + chartWidthZoomed / 2 > chart.plotWidth || top   < 0 || top - chart.plotTop + chartHeightZoomed > chart.plotHeight) {
			      xAxis.series.forEach(function(s) {
			        s.setVisible(false, false);
			      });
			    // show and position series that fit in the plot area
			    } else {
			      xAxis.series.forEach(function(s) {
			        s.setVisible(true, false);
			      });
			
			      xAxis.update({
			        left: left, // + 'px'
			        width: chartWidthZoomed
			      }, false);
			
			      yAxis.update({
			        top: top, // + 'px'
			        height: chartHeightZoomed
			      }, false);
			    }
			  });
			
			  chart.redraw();
			},       	

            //draw columns onto the map			    		    
            drawColumns: function(chart, columnSeries, choroplethSeries, columnRangeSeriesConfig, color, chartHeight, columnWidth){
				var fn = chart.options.customFunctions;
				//get all y Data into array in order to get max and min            	
            	var allYData = Array.prototype.concat.apply(
						[], columnSeries.map(
							function(val, i, arr){
			            		return val.yData;
			            	}
		            	)
            	);
				var yMax = Math.max.apply(null, allYData);
				var yMin = Math.min.apply(null, allYData);
				var mapXAxis = chart.xAxis[0];
				var zoom = (mapXAxis.dataMax - mapXAxis.dataMin) / (mapXAxis.max - mapXAxis.min);
				
				fn.columnChartConfiguration.chartHeight = chartHeight;
				fn.columnChartConfiguration.chartWidth = columnWidth * columnSeries.length;
				fn.columnChartConfiguration.columnWidth = columnWidth;
				fn.columnChartConfiguration.columnCount = columnSeries.length;
				fn.columnChartConfiguration.yMax = yMax;
				fn.columnChartConfiguration.yMin = yMin;
				
				//see https://forum.highcharts.com/highmaps-usage-f14/how-to-make-world-map-with-with-overlaid-column-charts-t39522/ and http://jsfiddle.net/kkulig/d0dku2c2/
				Highcharts.each(choroplethSeries.points, function(state) {
				
				  // create axes separate axes for each column plot    
				  chart.addAxis({
				    visible: false, 
				    width: fn.columnChartConfiguration.chartWidth * zoom
				  }, true, false);
				
				  chart.addAxis({
				    visible: false,
				    height: fn.columnChartConfiguration.chartHeight * zoom,
				    min: yMin, 
				    max: yMax
				  }, false, false);
				
				  var mapColumnSeries = {
				    type: 'column',
				    name: state.id,
				    showInLegend: false,
				    xAxis: state.index + 1,
				    yAxis: state.index + 1,
		            pointPadding: 0,
		            groupPadding: 0,
		            borderWidth: 0,		
				    data: []
				  };
				  
  				  Highcharts.each(columnSeries, function(item, i, arr){
  				  	var value = item.yData[state.index];
				  	mapColumnSeries.data.push(
				  		{
					  		y: value, 
					  		v: value,
					  		color: color(value, i),
					  		borderColor: color(value, i)
				  		}
				  	);
				  });

				  chart.addSeries(mapColumnSeries, false);
				});
				//chart.redraw();
				fn.positionColumnSeries(chart);
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
	                
	                
            addLegendText: function(chart, x, y, text, color, useHtml){
				return chart.renderer.text(text, x, y, undefined, undefined, undefined, useHtml)
					.attr({
						zIndex: 6,
						fill: color,
						class: 'columnLegend'
					})
					.add();
            },
            
            addLegendSquare: function(chart, x, y, width, fill){
            	return chart.renderer.rect(x, y, width, width, 0)
	            	.attr({
			            'stroke-width':0,
			            fill: fill,
			            zIndex: 6,
			            class: 'columnLegend'
		        	})
		        	.add();
            },
            
            
            addLegendColumnChart: function(chart, x, y, values, color){
            	var fn = chart.options.customFunctions;
            	var conf = fn.columnChartConfiguration;
				values.forEach(function(value, i, arr){
					var height = value * conf.chartHeight / (conf.yMax - conf.yMin);
	            	chart.renderer.rect(x + i * conf.columnWidth, y - height, conf.columnWidth, height, 0).attr({
			            'stroke-width':0,
			            fill: color(values[0], i),
			            zIndex: 6,
			            class: 'columnLegend'
		        	}).add();
				});
            	/*
				var axis = chart.yAxis[0];            	
				
				chart.addAxis({
					visible: false, 
					width: fn.columnChartConfiguration.columnWidth * values.length, 
					left: x
				}, true, false);

				chart.addAxis({
					visible: false,
					height: fn.columnChartConfiguration.chartHeight,
					min: fn.columnChartConfiguration.yMin, 
					max: fn.columnChartConfiguration.yMax, 
					top: 250
				}, false, false);
				
				var mapColumnSeries = {
					type: 'column',
					name: 'mapColumnLegend',
					id: 'mapColumnLegend',
					showInLegend: false,
					xAxis: chart.xAxis.length-1,
					yAxis: chart.yAxis.length-1,
					pointPadding: 0,
					groupPadding: 0,
					borderWidth: 0,		
					tooltip: {
						enabled: false
					},
					data: []
				};
				
				
				Highcharts.each(values, function(item, i, arr){
				  mapColumnSeries.data.push(
				  	{
				  		y: item, 
				  		v: item,
				  		color: color(item, i),
				  		borderColor: color(item, i)
				  	}
				  );
				});
				
				chart.addSeries(mapColumnSeries, true);
				*/				
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

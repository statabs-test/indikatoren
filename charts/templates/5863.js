/*  global rheinDataEPSG2056
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/
(function(){

    return {
    	"legend": {
    		useHTML: true,
			"title": {
				"text": null, 
				style: {'fontWeight':' bold'}
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -185,
			"y": 3,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},


		/*
		"colorAxis": {
			//"min": undefined,
			"labels": {
				 style: {
		                  fontSize: '10px', fontFamily: "Arial", fontWeight: "normal"
		                },
		        format: "{value:,.0f}",
				"formatter": function () {
					return Highcharts.numberFormat((this.value),0); 
				}
			}
		},*/
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 2
		      },
		      {
		      	//2nd series: use y values from column 3
		      	y: 3
		      }
		    ]
        },
         colorAxis: {
                dataClassColor: 'category',
                dataClasses: [{
                    to: 4.9,
                    color: '#D7E8D2',
                     name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;<&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5,0"
                }, {
                    from: 5,
                    to: 29.9,
                    color: '#73B97C',
                    name: "&nbsp;&nbsp;&nbsp;5,0 − &nbsp;&nbsp;29,9"
                }, {
                    from: 30,
                    to: 69.9,
                    color: '#68AB2B',
                     name: "&nbsp;30,0 − &nbsp;&nbsp;69,9"
                },{
                    from: 70,
                    to: 99.9,
                    color: '#007A2F',
                    name:"&nbsp;70,0 − &nbsp;&nbsp;99,9"
                },{
                    from: 100,
                    color: '#0A3B19',
                    name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp≥&nbsp100,0"
                }]
            },
		"series": [
			{
				
				"name": "Wohnviertel", 
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056,
				"borderColor": "#fbfbfb",		
				"joinBy": ['TXT', 'Wohnviertel_Id'],
				"keys": ['Wohnviertel_Id', 'value'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}, 
				tooltip: {
					pointFormatter: function(){
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '</b><br/>';
					}
				}
			}, 
			{
				"visible": false
			}
		],
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

			}
		],
		chart: {
			events: {
	            load: function (e) {
	            	this.credits.element.onclick = function() {};

	                var chart = this;

	                //Pie size 
	                var pieSize = function(value, minAbsNumber, maxAbsNumber, chart){
		                var yAxis = chart.yAxis[0],
		                    zoomFactor = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
		                //Increase or decrease default pie size
		            	var pieSizeFactor = 0.2;
		            	//Minimal pie size: a summand added to the calculated size
		            	var pieSizeMin = 5;
						//Negative values: return absolute value
						var size = pieSizeMin + Math.abs(chart.chartWidth / 11 * pieSizeFactor * zoomFactor * value / maxAbsNumber); 
						return size;
	                }
					    
					
					
	                // Compute max and min value to find relative sizes of bubbles. 
	                var maxNumber = Number.NEGATIVE_INFINITY;
	                var maxAbsNumber = Number.NEGATIVE_INFINITY;
	                var minNumber = Number.POSITIVE_INFINITY;
	                var minAbsNumber = Number.POSITIVE_INFINITY;
					Highcharts.each(chart.series[1].points, function (wohnviertel) {
					    maxNumber = Math.max(maxNumber, wohnviertel.value);
					    maxAbsNumber = Math.max(maxAbsNumber, Math.abs(wohnviertel.value));
					    minNumber = Math.min(minNumber, wohnviertel.value);
					    minAbsNumber = Math.min(minAbsNumber, Math.abs(wohnviertel.value));
					});

					    
					    
					var drawPies = function(){
						//define new chart type
						// source: https://www.highcharts.com/blog/data-journalism/effectively-visualizing-us-election-results/, 
						//  which displays  http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/maps/demo/map-pies/
						
						    
						// New map-pie series type that also allows lat/lon as center option.
						// Also adds a sizeFormatter option to the series, to allow dynamic sizing
						// of the pies.
						Highcharts.seriesType('mappie', 'pie', {
						    center: null, // Can't be array by default anymore
						    clip: true, // For map navigation
						    states: {
						        hover: {
						            halo: {
						                size: 5
						            }
						        }
						    },
						    dataLabels: {
						        enabled: false
						    }
						    
						}, {
						    getCenter: function () {
						        var options = this.options,
						            chart = this.chart,
						            slicingRoom = 2 * (options.slicedOffset || 0);
						        if (!options.center) {
						            options.center = [null, null]; // Do the default here instead
						        }
						        // Handle lat/lon support
						        if (options.center.lat !== undefined) {
						            var point = chart.fromLatLonToPoint(options.center);
						            options.center = [
						                chart.xAxis[0].toPixels(point.x, true),
						                chart.yAxis[0].toPixels(point.y, true)
						            ];
						        }
						        // Handle dynamic size
						        if (options.sizeFormatter) {
						            options.size = options.sizeFormatter.call(this);
						        }
						        // Call parent function
						        var result = Highcharts.seriesTypes.pie.prototype.getCenter.call(this);
						        // Must correct for slicing room to get exact pixel pos
						        result[0] -= slicingRoom;
						        result[1] -= slicingRoom;
						        return result;
						    },
						    translate: function (p) {
						        this.options.center = this.userOptions.center;
						        this.center = this.getCenter();
						        return Highcharts.seriesTypes.pie.prototype.translate.call(this, p);
						    }
						});
						
		                
	                // Add the pies after chart load, optionally with offset and connectors
		                // series[0] contains the choropleth map data, series[1] the pie chart data
		                Highcharts.each(chart.series[1].points, function (data) {
		                    if (!data.value) {
		                        return; // Skip points with no data, if any
		                    }
	
		                	var wohnviertelSeries = chart.series[0].points[data.index];
		                	
		                    var pieOffset = wohnviertelSeries.pieOffset || {},
		                        centerLat = parseFloat(wohnviertelSeries.properties.lat),
		                        centerLon = parseFloat(wohnviertelSeries.properties.lon);
		                	
							
							//define different colors for positive and negative values
	                        var color = function(){
	                        	return (data.value >= 0) ? 'grey' : 'salmon';
	                        };
	
		                    var currentPieSeries = 
		                    {
		                        type: 'mappie',
		                        //name: data.id,
		                        name: data.series.name,
		                        wohnviertel_Name: data["hc-key"],
		                        wohnviertel_Id : wohnviertelSeries.wohnviertel_Id,
		                        zIndex: 6, // Keep pies above connector lines
		                        borderWidth: 1,
		                        borderColor: color(),
		                        sizeFormatter: function () {
									return pieSize(data.value, minAbsNumber, maxAbsNumber, chart);
		                        },
		                        tooltip: {
		                        	headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {series.name} </span><br/>',
		                            pointFormatter: function () {
		                            	return wohnviertelSeries.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),1) + '</b><br/>';
		                            }
		                        },
		                        data: [
		                        	{
		                        		name: chart.series[1].name,
		                        		//put absolute value in y, real value in v
		                        		y: Math.abs(data.value),
		                        		v: data.value,
		                        		color: color()
		                        	}
		                        ],
		                        /*
		                        data: [{
		                            name: 'FDP',
		                            y: 1, //wohnviertel.demVotes,
		                            color: 'red'
		                        }, {
		                            name: 'SP',
		                            y: 2, //wohnviertel.repVotes,
		                            color: 'blue'
		                        }, {
		                            name: 'CVP',
		                            y: 3, //wohnviertel.libVotes,
		                            color: 'green'
		                        }, {
		                            name: 'Grüne',
		                            y: 4, //wohnviertel.grnVotes,
		                            color: 'yellow'
		                        }],
		                		*/
		                        center: {
		                            lat: centerLat + (pieOffset.lat || 0),
		                            lon: centerLon + (pieOffset.lon || 0)
		                        }, 
		                        dataLabels: {
							        enabled: false
							    }
		                    }
		                    ;
		                    
		                    
		                    // Add the pie for this wohnviertel
		                    chart.addSeries(currentPieSeries, false);
		                    
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
		                        chart.series[1].addPoint({
		                            name: wohnviertel.id,
		                            path: 'M' + offsetPoint.x + ' ' + offsetPoint.y +
		                                'L' + centerPoint.x + ' ' + centerPoint.y
		                        }, false);
		                    }
		                    */
		                    
		                    //console.log(chart.series[chart.series.length-1]);
		                    
		                });
		                // Only redraw once all pies and connectors have been added
		                //chart.redraw();
					};
					

	                drawPies();
	                
	                //Add manually drawn legend
	                 chart.renderer.label(chart.series[0].name, 350, 200)
     				.css({
	                    fontSize: '12px',
	                    fontWeight: 'bold'
	                })
	                .attr({
			        	zIndex: 6,
			        	//class: 'pieLegend'
			        }).add();
			        chart.renderer.label(chart.series[1].name, 460, 200)
     				.css({
	                    fontSize: '12px',
	                    fontWeight: 'bold'
	                })
			        .attr({
			        	zIndex: 6,
			        	//class: 'pieLegend'
			        }).add();
	                var maxBubbleSize = 30;
	                var minBubbleSize = 1
	                chart.renderer.circle(473, 231, 0.5*pieSize(minBubbleSize, minAbsNumber, maxAbsNumber, chart)).attr({
					    fill: 'grey',
					    'stroke-width': 0, 
					    zIndex: 6,
					    class: 'pieLegend'
					}).add();
					chart.renderer.label(Highcharts.numberFormat((minBubbleSize),0,"."," "), 485, 221).attr({
						zIndex: 6,
						class: 'pieLegend', 
					}).add();
	                chart.renderer.circle(473, 248, 0.5*pieSize(maxBubbleSize, minAbsNumber, maxAbsNumber, chart)).attr({
					    fill: 'grey',
					    'stroke-width': 0,
					    zIndex: 6,
					    class: 'pieLegend'
					}).add();
					chart.renderer.label(Highcharts.numberFormat((maxBubbleSize),0,"."," "), 485, 237).attr({
						zIndex: 6,
						class: 'pieLegend'
					}).add();
				    chart.renderer.rect(520, 225, 12, 12, 0).attr({
			            'stroke-width':0,
			            fill: 'grey',
			            zIndex: 6,
			            class: 'pieLegend'
			        }).add();
			        chart.renderer.label('Zunahme', 535, 221).attr({
			        	zIndex: 6,
			        	class: 'pieLegend'
			        }).add();
					chart.renderer.rect(520, 241, 12, 12, 0).attr({
			            'stroke-width':0,
			            fill: 'salmon',
			            zIndex: 6,
			            class: 'pieLegend'
			        }).add();
			        chart.renderer.label('Abnahme', 535, 237).attr({
			        	zIndex: 6,
			        	class: 'pieLegend'
			        }).add();

					//redraw chart after adding all series and the legend
					chart.redraw();


					//Add click handler to bubbleLegend items
					$('.pieLegend').click(function(){
						//Toggle visible of mappies
						Highcharts.each(chart.series, function (series) {
							if (series.userOptions.type == 'mappie'){
								series.setVisible(!series.visible, false);
							}
						});
						chart.redraw();
						
						//toggle active state of legend elements
						var pieLegendItems = $('.pieLegend');
						//backup original color
						pieLegendItems.each(function(i, v){
							if (!$(this).attr('fill_active')) {
								//if no fill color is defined, set to  black
								$(this).attr('fill_active', $(this).attr('fill') || 'black');	
							}
						});
						//toggle color
						if (pieLegendItems.attr('fill') == pieLegendItems.attr('fill_active')){
							//set all to grey
							pieLegendItems.attr('fill', '#cccccc');
						} 
						else {
							pieLegendItems.each(function(i, v){
								//set each to its fill_active color
								$(this).attr('fill', $(this).attr('fill_active'));	
							});
						}
					});
					
	            }
			}
		}
	};
}());
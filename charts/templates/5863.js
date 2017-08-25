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
						//console.log(this);
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),3) + '</b><br/>';
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
					
					
					//pie diameters in px
					var maxPieDiameter = 20;
					
					
					//configuration of categorical pie sizes
					var pieSizeCatConfig = 
					[
						{
							name: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; < 1,0',
							from: 0.00,
							to: 1.00, 
							diameter: 2
						},
						{
							name: ' 1,0 − 2,9',
							from: 1.0,
							to: 2.99,
							diameter: 8
						},
						{
							name: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ≥ 3,0',
							from: 3,							
							to: 50,
							diameter: 16
						}
					];
					
					
					/*
					//add the value() function to each conf object
					pieSizeCatConfig.forEach(function(el){
						//returns a value in between from and to
						function value(){
							return this.to + (this.to - this.from) / 2;
						}	
						el.value = value;
					});
					*/

					//calculate pie size using categories defined in the conf object
					var pieSizeCategorical = function(value, conf){
						for (var i=0; i < conf.length; i++ ){
							//console.log('checking value ' + value);
							if (value >= conf[i].from && value < conf[i].to) {
								//console.log('found conf object:  + ' + JSON.stringify(conf[i]));
								return conf[i];
							}
						}
					};
					
					/*
	                //Pie size 
	                var pieSize = function(value, maxAbsValue, maxPieDiameter){
	                	
	                	function circleAreaByDiameter(diameter){
	                		return Math.PI * diameter * diameter / 4;
	                	}
	                	
	                	function circleDiameterByAre(area){	                		
	                		return Math.sqrt(4 * area / Math.PI);
	                	}
	                	
		                var yAxis = chart.yAxis[0],
		                    zoomFactor = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
		                    
						//Negative values: return absolute value
						//size by Area: use sqrt of value to define size
						//var size = pieSizeMin + chart.chartWidth / 11 * pieSizeFactor *  Math.sqrt(Math.abs(value)) / maxAbsNumber; 
						
						//transform value to a number between 0 and 1 representing its relation to the min and max values
						//var relativeValue = (Math.abs(value) - minAbsValue) / (maxAbsValue - minAbsValue);
						
						//transform value to a number between 0 and 1, where value 0 is represented by 0 and maxAbsValue by 1
						var relativeValue = Math.abs(value) / maxAbsValue ;
						//console.log('absVal rel: '+ Math.abs(value) + ' ' + relativeValue);
						//infer the pie size 
						var maxPieArea = circleAreaByDiameter(maxPieDiameter);
						var area = relativeValue * maxPieArea;
						
						//var minPieArea = circleAreaByDiameter(minPieDiameter);
						//var area = relativeValue * (maxPieArea - minPieArea) + minPieArea;
						
						var diameter = circleDiameterByAre(area);
						//console.log('value absValue area diameter: ' + value + ' ' + Math.abs(value) + ' ' + area + ' ' + diameter);
						return diameter;
	                };
	                */
	                
	                /*
	                // When clicking legend items, also toggle connectors and pies
	                Highcharts.each(chart.legend.allItems, function (item) {
	                    var old = item.setVisible;
	                    item.setVisible = function () {
	                        var legendItem = this;
						//Negative values: return absolute value
						var size = p       Highcharts.each(chart.series[0].points, function (point) {
	                            if (chart.colorAxis[0].dataClasses[point.dataClass].name === legendItem.name) {
	                                // Find this Wohnviertel's pie and set visibility
	                                Highcharts.find(chart.series, function (item) {
	                                    return item.name === point.id;
	                                }).setVisible(legendItem.visible, false);
	                                // Do the same for the connector point if it exists
	                                var connector = Highcharts.find(chart.series[1].points, function (item) {
	                                    return item.name === point.id;
	                                });
	                                if (connector) {
	                                    connector.setVisible(legendItem.visible, false);
	                                }
	                            }
	                        });
	                        chart.redraw();
	                    };
	                });
	                */
	                
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
								//return pieSize(data.value, maxAbsNumber, maxPieDiameter);
								return pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                        	headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {series.name} </span><br/>',
	                            pointFormatter: function () {
	                            	return wohnviertelSeries.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),3) + '</b><br/>';
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
	                chart.redraw();
	                
					//pie values in legend
	                //var minValueInLegend = 0.001; //minAbsNumber;
	                //var maxValueInLegend = 0.1; //maxAbsNumber;

	                
	                //Add manually drawn legend
	                addLegendTitle(chart.series[0].name, 350, 200);
	                addLegendTitle(chart.series[1].name, 460, 200);
	                
	                addLegendCircle(473, 231, 0.5*pieSizeCatConfig[0].diameter, 'grey');
	                addLegendLabel(pieSizeCatConfig[0].name, 485, 221, true);
	                addLegendCircle(473, 248, 0.5*pieSizeCatConfig[1].diameter, 'grey');
	                addLegendLabel(pieSizeCatConfig[1].name, 485, 237, true);
	                addLegendCircle(473, 265, 0.5*pieSizeCatConfig[2].diameter, 'grey');
					addLegendLabel(pieSizeCatConfig[2].name, 485, 255, true);
					
					addLegendSquare(565, 225, 10, 'grey');
					addLegendLabel('Zunahme', 580, 221);
					addLegendSquare(565, 241, 10, 'salmon');
					addLegendLabel('Abnahme', 580, 237);
					

	                //chart.renderer.circle(473, 248, 0.5*pieSize(maxValueInLegend, maxAbsNumber, maxPieDiameter)).attr({
					//chart.renderer.label(Highcharts.numberFormat((maxValueInLegend),1,"."," "), 485, 237).attr({

					//Add click handler to bubbleLegend items
					$('.pieLegend').click(function(){
						//Toggle visible of mappies
						Highcharts.each(chart.series, function (series) {
							if (series.userOptions.type == 'mappie'){
								series.setVisible(!series.visible, false);
							}
						});
						chart.redraw();
						
						
						//if useHTMl is true, text is in span elements within DIVs classed .pieLegend. Add the class to these spans
						$('.pieLegend>span').addClass('pieLegend').addClass('pieLegendHtmlText');
						//toggle active state of legend elements
						var pieLegendItems = $('.pieLegend');
						//backup original color
						pieLegendItems.each(function(i, v){
							if (!$(this).attr('fill_active')) {
								//if no fill color is defined, set to  black
								$(this).attr('fill_active', $(this).attr('fill') || 'black');	
							}
							if (!$(this).attr('stroke_active')) {
								$(this).attr('stroke_active', $(this).attr('stroke') || null);	
							}
						});
						//toggle color
						if (pieLegendItems.attr('fill') == pieLegendItems.attr('fill_active')){
							//set all to grey
							pieLegendItems.attr('fill', '#cccccc');
							//if stroke is present, toggle it
							pieLegendItems.each(function(i, v){
								//if stroke_active is present, set it to grey
								if ($(this).attr('stroke_active')) {
									$(this).attr('stroke', '#cccccc');
								}
							});
							//same for html text spans
							$('.pieLegendHtmlText').css('color', '#cccccc');
						} 
						else {
							pieLegendItems.each(function(i, v){
								//set each to its fill_active color
								$(this).attr('fill', $(this).attr('fill_active'));	
								$(this).attr('stroke', $(this).attr('stroke_active'));	
							});
							//same for html text spans
							$('.pieLegendHtmlText').css('color', 'black');
						}
					});
					

	                //helper functions for pie legend
	                
	                function addLegendTitle(title, x, y){
                		return chart.renderer.label(title, x, y)
		     				.css({
			                    fontSize: '12px',
			                    fontWeight: 'bold'
			                })
			                .attr({
					        	zIndex: 6,
					        	//class: 'pieLegend'
					        }).add();	                
	                }
	                
	                function addLegendCircle(x, y, radius, fill){
	                	return chart.renderer.circle(x, y, radius, fill).attr({
						    fill: fill,
						    stroke: fill,
						    'stroke-width': 1, 
						    zIndex: 6,
						    class: 'pieLegend'
						}).add();
	                }
	                
	                
	                function addLegendLabel(text, x, y, useHtml){
						return chart.renderer.label(text, x, y, undefined, undefined, undefined, useHtml).attr({
							zIndex: 6,
							class: 'pieLegend'
						}).add();
	                }
	                
	                function addLegendSquare(x, y, width, fill){
	                	return chart.renderer.rect(x, y, width, width, 0).attr({
				            'stroke-width':0,
				            fill: fill,
				            zIndex: 6,
				            class: 'pieLegend'
			        	}).add();
	                }

	            }
			}
		}
	};
}());
/*  global rheinData
	global Highcharts
	global geojson_wohnviertel
*/
(function(){
	
	
	
	
	
	
    return {
		"colorAxis": {
			//"min": undefined,
			"minColor": "#eff6e9",
			"maxColor": "#4b7b1f",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),1); 
				}
			}
		},
        "tooltip": {
            "formatter": function(args){
        		if (this.series.data[this.point.x].name === undefined) {
        		    //Rhein
        			return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
        		}
                else {
                    //Wohnviertel
                    var this_point_index = this.series.data.indexOf(this.point);
                    var other_series_index = this.series.index == 0 ? 1 : 0; // assuming 2 series
                    var other_series = args.chart.series[other_series_index];
                    var other_point = other_series.data[this_point_index];
                    return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                        this.point.name +': <b>' + Highcharts.numberFormat((this.point.value),3) + '</b><br/>' + 
                        'Rang <b>' + other_point.value + '</b>';
                }
            }
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
				"mapData": geojson_wohnviertel,
				"borderColor": "#fbfbfb",		
				"joinBy": ['TXT', 'Wohnviertel_Id'],
				"keys": ['Wohnviertel_Id', 'value'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
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
				"data": rheinData, 
				"color": "#008AC3",    
				"borderColor": "#fbfbfb"
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
					
					



	                
	                // Compute max votes to find relative sizes of bubbles
	                var maxNumber = 0;
	                
					Highcharts.each(chart.series[1].points, function (wohnviertel) {
					    maxNumber = Math.max(maxNumber, wohnviertel.value);
					});
					
	                
	                /*
	                // When clicking legend items, also toggle connectors and pies
	                Highcharts.each(chart.legend.allItems, function (item) {
	                    var old = item.setVisible;
	                    item.setVisible = function () {
	                        var legendItem = this;
	                        old.call(legendItem);
	                        Highcharts.each(chart.series[0].points, function (point) {
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
	                	console.log(data);
	                	
	                    var pieOffset = wohnviertelSeries.pieOffset || {},
	                        centerLat = parseFloat(wohnviertelSeries.properties.lat),
	                        centerLon = parseFloat(wohnviertelSeries.properties.lon);
	                
	                    var currentPieSeries = 
	                    {
	                        type: 'mappie',
	                        //name: data.id,
	                        name: data.series.name +' ' + data["hc-key"],
	                        zIndex: 6, // Keep pies above connector lines
	                        borderWidth: 1,
	                        borderColor: 'grey',
	                        sizeFormatter: function () {
	                            var yAxis = this.chart.yAxis[0],
	                                zoomFactor = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
								var minSize = this.chart.chartWidth / 45 * zoomFactor;
								var maxSize = this.chart.chartWidth / 11 * zoomFactor * data.value / maxNumber; 

	                            return Math.max(minSize, maxSize);
	                        },
	                        tooltip: {
	                        	enabled: false
	                        	/*
	                            // Use the wohnviertel tooltip for the pies as well
	                            pointFormatter: function () {
	                                return wohnviertelSeries.series.tooltipOptions.pointFormatter.call({
	                                    id: wohnviertelSeries.id,
	                                    hoverVotes: this.name,
	                                    sumVotes: wohnviertelSeries.value
	                                });
	                            }
	                            */
	                        },
	                        data: [
	                        	{
	                        		name: chart.series[1].name,
	                        		y: data.value,
	                        		color: 'grey'
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
	                chart.redraw();
	            }
			}
		}
	};
}());
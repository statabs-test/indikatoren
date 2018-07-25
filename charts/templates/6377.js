/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
(function(){

    return {
    	"legend": {
		y:5,
			"title": {
				"text": ""
			}
			},
		"colorAxis": {
			"min": 0,
			"minColor": "#eff6e9",
			"maxColor": "#0A3B19",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),0); 
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),0) + '</b><br/>';
					}
				}
			}, 
			{
				visible: false, 
				showInLegend: false,
    			colorAxis: false
			}
		],
		chart: {
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};

	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
					fn.defineTemplate();
					
					var choroplethSeries = chart.series[1];
					var pieSizeSeries = chart.series[2];
					
					//pie diameters in px
					var maxPieDiameter = 25

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);
					//define number format in zoomed legend labels
	                fn.legendLabelZoomFormatter = function(value){
	                	return Highcharts.numberFormat((value),3,","," ");
	                };					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#7F5F1A' : '#FABD24';
	                };					
					
					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
	                            var yAxis = chart.yAxis[0], zoom = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
								return zoom * fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),0) + '  </b><br/>';
	                            }
	                        }
	                    };
					};
					 var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);
	                
					//pie values in legend
	                var minValueInLegend = 200; 
	                var maxValueInLegend = 4000; 
	                
                	//Add manually drawn legend	
                	fn.addLegendRectangle(chart, 250, 220, 230, 77, 'rgba(222, 222, 222, 0.5)', 'pieLegend');
                	fn.addLegendRectangle(chart, 250, 300, 230, 60, 'rgba(222, 222, 222, 0.5)');
	                //fn.addLegendTitle(chart, pieSizeSeries.name, 265, 220, 'pieLegend pieLegendHideOnZoom');
	
	                fn.addLegendCircle(chart, 280, 255, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#7F5F1A', 'pieLegendStayeOnZoom');
	                var zoomableLabels = [];
	                zoomableLabels.push({
	                	chart: chart, 
	                	text: Highcharts.numberFormat((minValueInLegend),0,","," "), 
	                	x: 340, 
	                	y: 245, 
	                	cssClass: 'pieLegendRecalculateOnZoom', 
	                	useHtml: false, 
	                	initialValue: minValueInLegend,
	                	align: 'right'
	                }); 
	                zoomableLabels[0].label = fn.addLegendLabel(zoomableLabels[0].chart, zoomableLabels[0].text, zoomableLabels[0].x, zoomableLabels[0].y, zoomableLabels[0].cssClass, zoomableLabels[0].useHtml, zoomableLabels[0].initialValue, zoomableLabels[0].align);
					
	                fn.addLegendCircle(chart, 280, 280, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#7F5F1A', 'pieLegendStayeOnZoom');
	                zoomableLabels.push({chart: chart, text: Highcharts.numberFormat((maxValueInLegend),0,"."," "), x: 340, y: 270, cssClass: 'pieLegendRecalculateOnZoom', useHtml: false, initialValue: maxValueInLegend, align: 'right'});
	                zoomableLabels[1].label = fn.addLegendLabel(zoomableLabels[1].chart, zoomableLabels[1].text, zoomableLabels[1].x, zoomableLabels[1].y, zoomableLabels[1].cssClass, zoomableLabels[1].useHtml, zoomableLabels[1].initialValue,zoomableLabels[1].align);
					
	                

					//fn.addLegendSquare(chart, 270, 250, 10, '#7F5F1A');
					//fn.addLegendLabel(chart, 'Zunahme', 300, 245);
					//fn.addLegendSquare(chart, 270, 275, 10, '#FABD24');
					//fn.addLegendLabel(chart, 'Abnahme', 300, 270);
					fn.addLegendLabelbold(chart, 'Anzahl Gebäude', 265, 220, 'pieLegendStayeOnZoom');
					fn.addLegendTitle(chart, 'Gebäude pro Hektare', 265, 300);
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
					
					chart.update(
					{
						xAxis: {
				    		events: {
								//recalculate and hide svg elements on zoom
								afterSetExtremes: function(e){
									if (this.chart){
										var fn = this.chart.userOptions.customFunctions;
										fn.hideOnZoom(e, '.pieLegendHideOnZoom');
										
										//wait for zoom animation to be finished before attempting calculation of zoom
										setTimeout(function(){
											zoomableLabels.forEach(function(v, i, a){
											if (v.label){
												var yAxis = e.target.chart.yAxis[0];
												var zoom = (yAxis.dataMax - yAxis.dataMin) / (yAxis.max - yAxis.min);
												if (!v.initialText) {v.initialText =v.text; }
												var legendValue = (zoom == 1 ? v.initialText : fn.legendLabelZoomFormatter(v.initialValue / zoom / zoom));
											
												v.label.destroy();
												v.text = legendValue;
												v.label = fn.addLegendLabel(v.chart, v.text, v.x, v.y, v.cssClass, v.useHtml, v.initialValue, v.align);
												//handle right-align
												if (v.align == 'right'){
													v.label.attr({x: v.x - v.label.width});
												}
											}
											});
										}, 750); //default jQuery animmation is 500 ms, see https://api.highcharts.com/highmaps/chart.animation 
									}
								}
				    		}
						}

					});
	            }
			}
		}
	};
}());
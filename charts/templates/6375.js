/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
(function(){
    return {
    	"legend": {
    		//enabled:  function(){ if (zoom == 1){return true} else {return false}}, 
			"title": {
				"text": ""
			}
			},
		"colorAxis": {
			//"min": undefined,
			"minColor": "#ECE1D0",
			"maxColor": "#3A2012",
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '  </b><br/>';
					}
				}
			}, 
			{
				visible: false, 
				showInLegend: false,
    			colorAxis: false

			}
		],
		xAxis: {
    		events: {
				//recalculate and hide svg elements on zoom
				afterSetExtremes: function(e){
					if (this.chart){
						var fn = this.chart.userOptions.customFunctions;
						fn.recalculateOnZoom(e, '.pieLegendRecalculateOnZoom');
						fn.hideOnZoom(e, '.pieLegendHideOnZoom');
					}
				}
    		}
		},
		chart: {
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};

	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
					fn.defineTemplate();
					
					var choroplethSeries = chart.series[0];
					var pieSizeSeries = chart.series[1];
					
					//pie diameters in px
					var maxPieDiameter = 25;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#C9D6DB' : '#C9D6DB';
	                };					
					//define number format in zoomed legend labels
	                fn.legendLabelZoomFormatter = function(value){
	                	return Highcharts.numberFormat((value),0,","," ");
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
	                fn.addLegendTitle(chart, "Anteil unter 20-Jähriger in %", 265, 300, 'pieLegendStayOnZoom');
	                
	                fn.addLegendCircle(chart, 280, 255, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#C9D6DB', 'pieLegendStayeOnZoom');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),0,","," "), 300, 245, 'pieLegendRecalculateOnZoom', false, minValueInLegend);
	                fn.addLegendCircle(chart, 280, 280, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), '#C9D6DB', 'pieLegendStayeOnZoom');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),0,"."," "), 300, 270, 'pieLegendRecalculateOnZoom', false, maxValueInLegend);
	                
	                //fn.addSubtitle(chart, "Kanton Basel-Stadt: 32 873 unter 20-Jährige (16,6%)", 7, 40, 'pieLegendHideOnZoom')
	                
					fn.addLegendLabelbold(chart, pieSizeSeries.name, 265, 220, 'pieLegendStayeOnZoom');
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());
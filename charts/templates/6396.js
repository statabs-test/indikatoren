/*  
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
			"x": -127,
			"y": -30,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
         colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
                to:24.999,
                color: '#D7E8D2',
                name:  " \u00a0\u00a0 \u00a0\u00a0 \u00a0 \u00a0\u00a0< \u00a0\u00a025,0"
            }, {
                from: 25.0,
                to: 49.999,
                color: '#73B97C',
                name: "\u00a0\u00a025,0 − \u00a0\u00a049,9"
            }, {
                from: 50.0,
                to: 99.999,
                 color: '#68AB2B',
                 name: "\u00a0\u00a050,0 −  \u00a0\u00a099,9"
            },{
                from: 100.0,
                to: 199.999,
                 color: '#007A2F',
                 name: "100,0 − 199,9"
            },{
                from: 200.0,
                color: '#0A3B19',
                name:  "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0≥\u00a0200,0"
            }], 
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '</b><br/>';
					}
				}
			}, 
			{
				"visible": false
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
					
					var choroplethSeries = chart.series[0];
					var pieSizeSeries = chart.series[1];
					
					//pie diameters in px
					var maxPieDiameter = 20;
					
					//configuration of categorical pie sizes
					var pieSizeCatConfig = 
					[
						{
							name: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0< 3 000',
							from: 0,
							to: 3000, 
							diameter: 2
						},
						{
							name: ' 3 000 − 7 999',
							from: 3000,
							to: 7999,
							diameter: 8
						},
						{
							name: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0≥  8 000',
							from: 8000,							
							to: 1000000000,
							diameter: 16
						}
					];
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#7F5F1A' : '#FABD24';
	                };					
					
					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
								//return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),0) + '</b><br/>';
	                            }
	                        }
	                    };
					};
					
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

	                //Add manually drawn legend
	        		fn.addLegendTitle(chart, "Anteil unter <br/> 20-Jähriger in %", 245, 210);
	                fn.addLegendTitle(chart, "Anzahl unter <br/> 20-Jähriger", 365, 210);
	                
		        	fn.addLegendCircle(chart, 373, 266, 0.5*pieSizeCatConfig[0].diameter, 'grey');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 385, 255, undefined, true);
	                fn.addLegendCircle(chart, 373, 285, 0.5*pieSizeCatConfig[1].diameter, 'grey');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 385, 275, undefined, true);
	                fn.addLegendCircle(chart, 373, 310, 0.5*pieSizeCatConfig[2].diameter, 'grey');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 385, 300, undefined, true);
					
					//fn.addLegendSquare(chart, 565, 240, 10, '#7F5F1A');
					//fn.addLegendLabel(chart, 'Zunahme', 580, 236);
					//fn.addLegendSquare(chart, 565, 256, 10, '#FABD24');
					//fn.addLegendLabel(chart, 'Abnahme', 580, 252);
				
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());


/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/

(function(){
    return {
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '%</b><br/>';
					}
				}
			}, 
			{
				"visible": false
			}
		],
		"legend": {
    		useHTML: false,
			"title": {
				"text": null, 
				style: {'fontWeight':' bold'}
			},
			"layout": "vertical",
			verticalAlign: "top",
			align: "left",
			x: 228,
			y: 255,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
         colorAxis: {
            dataClassColor: 'category',
        	dataClasses: [{
               	from: 0,
                to:49.9,
                color: '#D3E2E4',
                name:  "<span style='color: rgba(0,0,0,0)'>000,0</span> < 50,0"
            }, {
                from: 50.0,
                to: 54.9,
                color: '#A8C3CA',
                name: "<span style='color: rgba(0,0,0,0)'>0</span>50,0 − 54,9"
            }, {
                from: 55.0,
                to: 59.9,
                 color: '#689199',
                 name: "<span style='color: rgba(0,0,0,0)'>0</span>55,0 − 59,9"
            },{
                from: 60.0,
                to: 64.9,
                 color: '#246370',
                 name: "<span style='color: rgba(0,0,0,0)'>0</span>60,0 − 64,9"
            },{
                from: 65,
                color: '#083038',
                name:  "<span style='color: rgba(0,0,0,0)'>000,0</span> ≥ 65,0"
            }], 
        },
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
					var maxPieDiameter = 20;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);
					
					//define different colors for positive and negative values
	                var color = function(value){
	                	return (value >= 0) ? '#007A2F' : '#990300';
	                };					
					
					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
								return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),1) + ' Prozentpunkte </b><br/>';
	                            }
	                        }
	                    };
					};
					 var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);
	                
					//pie values in legend
	                var minValueInLegend = -1; 
	                var maxValueInLegend = -6; 
	                
                	//Add manually drawn legend	
					//fn.addLegendTitle(chart, "Veränderung von 1995 bis 2015 in m²", 265, 220);

					var lx = chart.legend.options.x;
					var ly = chart.legend.options.y;
					var xd = 140; //x-offset for second legend-block (symbols)

					var lp = { //x: 228, y: 255
						title: { //Legend title
							x: [lx+17, lx+xd], // Customizable
							y: [ly-38, ly-23]
						},
						s: { //Symbols
							x: [lx+xd+10,lx+xd+5], // Customizable
							y: [ly+22, ly+42, ly+62, ly+82], // Customizable
							y3C: [ly+127, ly+157, ly+187], //für was...?
							numbers: {
								x: lx+xd+25,
								y: [ly+12, ly+32, ly+55, ly+75], // Customizable
								y3C: [ly+115, ly+145, ly+175] //für was...?
							},
						}
					};

					fn.addLegendRectangle(chart, lp.title.x[0], lp.title.y[0], 230, 130, '#ffaaaa'); //fbfbfb
					
					fn.addLegendTitle(chart, choroplethSeries.name.replace("eiz ", "eiz<br/>").replace("ene ", "ene<br/>"), 
						lp.title.x[0], lp.title.y[0]);
					
					fn.addLegendTitle(chart, pieSizeSeries.name.replace(" ", "<br/>"), 
						lp.title.x[1], lp.title.y[1]);
					//fn.addLegendSquare(chart, 363, 275, 10, '#007A2F');
					//fn.addLegendLabel(chart, 'Zunahme', 382, 269);
					//fn.addLegendSquare(chart, 363, 295, 10, '#990300');
					//fn.addLegendLabel(chart, 'Abnahme', 382, 289)

	                fn.addLegendCircle(chart, 
						lp.s.x[0], lp.s.y[0], 0.5 * fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), /*'grey'*/ '#990300');
					fn.addLegendCircle(chart, 
						lp.s.x[0], lp.s.y[1], 0.5 * fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), /*'grey'*/ '#990300');
					fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend), 0, ",", " "), 
						lp.s.numbers.x, lp.s.numbers.y[0]);
					fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend), 0, ".", " "), 
						lp.s.numbers.x, lp.s.numbers.y[1]);

					/*var shiftDown = 12;

		        	fn.addLegendCircle(chart, 373, 266+shiftDown, 0.5*pieSizeCatConfig[0].diameter, '#007A2F');
	                fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 465, 255+shiftDown, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 285+shiftDown, 0.5*pieSizeCatConfig[1].diameter, '#007A2F');
	                fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 465, 275+shiftDown, undefined, false, 'right');
	                fn.addLegendCircle(chart, 373, 310+shiftDown, 0.5*pieSizeCatConfig[2].diameter, '#007A2F');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 465, 300+shiftDown, undefined, false, 'right');
					*/
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());


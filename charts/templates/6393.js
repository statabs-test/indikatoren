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
			"x": -130,
			"y": -10,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
         colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
                to:0.34999,
                color: '#D7E8D2',
                name:  "<span style='color: rgba(0,0,0,0)'>0,000</span> < 0,349"
            }, {
                from: 0.35,
                to: 0.449,
                color: '#73B97C',
                name: "0,350 −  0,449"
            }, {
                from: 0.45,
                to: 0.699,
                 color: '#68AB2B',
                 name: "0,450 − 0,699"
            },{
                from: 0.7,
                to: 0.799,
                 color: '#007A2F',
                 name: "0,700 − 0,799"
            },{
                from: 0.8,
                color: '#0A3B19',
                name:  "<span style='color: rgba(0,0,0,0)'>0,000</span> ≥ 0,800"
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
		      },
		      {
		      	x: 0, 
		      	y: 4
		      },
		      {
		      	x: 0, 
		      	y: 5
		      },
		      {
		      	x: 0, 
		      	y: 6
		      },
		      {
		      	x: 0, 
		      	y: 7
		      },
		      {
		      	x: 0, 
		      	y: 8
		      },
		      {
		      	x: 0, 
		      	y: 9
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),2) + '</b><br/>';
					}
				}
			}, 
			{
				"visible": false
			}, 
			{
				visible: false,
				type: 'pie',
				color: '#B00000',
				borderColor: '#B00000'

			}, 
				{
				visible: false,
				type: 'pie',
				color: '#FABD24',
				borderColor: '#FABD24'

			}, 
				{
				visible: false,
				type: 'pie',
				color: '#E6E600',
				borderColor: '#E6E600'

			}, 
				{
				visible: false,
				type: 'pie',
				color: '#68AB2B',
				borderColor: '#68AB2B'

			}, 
				{
				visible: false,
				type: 'pie',
				color: '#923F8D',
				borderColor: '#923F8D'

			}, 
			{
				visible: false,
				type: 'pie',
        		color: '#7F5F1A',
        		borderColor: '#7F5F1A'
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
					var pieSeries = [chart.series[2], chart.series[3], chart.series[4], chart.series[5], chart.series[6], chart.series[7]];

					//pie diameters in px
					var maxPieDiameter = 15;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);

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
	                        	headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.key} </span><br/>',
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),2) + ' % </b><br/>';
	                            }
	                        },
	                    };
					};
					var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, pieSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig);
	                
					//pie values in legend
	                var minValueInLegend = 0.001; 
	                var maxValueInLegend = 0.1; 
	                
                	//Add manually drawn legend	
	                fn.addLegendTitle(chart,"Ausländeranteil <br/> in %", 240, 215);
	                
	                //fn.addLegendCircle(chart, 410, 275, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
	                //fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),3,","," "), 430, 265);
	                //fn.addLegendCircle(chart, 410, 300, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
	                //fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),2,"."," "), 430, 290);
					
					//fn.addLegendSquare(chart, 254, 251, 12, '#B00000 '); // Checking alignment with right legend boxes
					//fn.addLegendSquare(chart, 254, 267, 12, '#FABD24'); //Checking alignment with right legend boxes
					
					fn.addLegendSquare(chart, 354, 251, 12, '#B00000');
					fn.addLegendLabel(chart, 'Deutschland', 365, 245);
					fn.addLegendSquare(chart, 354, 267, 12, '#FABD24'); // !!!! Orange is behind green
					fn.addLegendLabel(chart, 'Italien', 365, 262);
					fn.addLegendSquare(chart, 354, 283, 12, '#E6E600');
					fn.addLegendLabel(chart, 'Türkei', 365, 279);
					fn.addLegendSquare(chart, 354, 299, 12, ' #7F5F1A');
					fn.addLegendLabel(chart, 'Übrige', 365, 295);
					fn.addLegendSquare(chart, 354, 315, 12, '#923F8D');
					fn.addLegendLabel(chart, 'Spanien', 365, 310);
					fn.addLegendSquare(chart, 354, 331, 12, '#68AB2B');
					fn.addLegendLabel(chart, 'Serbien, Montenegro, <br/> Kosovo', 365, 327);
					fn.addLegendLabelbold(chart, 'Staatsangehörigkeit', 350, 215);
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());


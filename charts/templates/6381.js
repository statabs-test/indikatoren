/*  global rheinDataEPSG2056
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/
(function(){

    return {
    	"legend": {
    		"x": -25,
			"y": 0,
			"title": {
				"text": ""
			}
			},
		"colorAxis": {
			//"min": undefined,
			"minColor": "#eff6e9",
			"maxColor": "#4b7b1f",
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
						return this.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.value),1) + '</b><br/>';
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
					var pieSeries = [chart.series[2], chart.series[3]];

					//pie diameters in px
					var maxPieDiameter = 15;

					var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);

					//define chart-specific details
					var pieSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        sizeFormatter: function () {
	                            var fn = this.chart.options.customFunctions;
								return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
	                        },
	                        tooltip: {
	                        	headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.key} </span><br/>',
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),1) + '</b><br/>';
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
	                fn.addLegendTitle(chart,"Anteil Zugezogene nach Zuzugsland", 240, 215);
	                
	                //fn.addLegendCircle(chart, 410, 275, 0.5*fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
	                //fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),3,","," "), 430, 265);
	                //fn.addLegendCircle(chart, 410, 300, 0.5*fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
	                //fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),2,"."," "), 430, 290);

					fn.addLegendSquare(chart, 245, 240, 10, 'red');
					fn.addLegendLabel(chart, 'Deutschland', 255, 234);
					fn.addLegendSquare(chart, 245, 260, 10, 'blue');
					fn.addLegendLabel(chart, 'Italien', 255, 254);
					fn.addLegendSquare(chart, 245, 280, 10, 'blue');
					fn.addLegendLabel(chart, 'Spanien', 255, 274);
					fn.addLegendSquare(chart, 330, 240, 10, 'yellow');
					fn.addLegendLabel(chart, 'Übrige', 340, 234);
					fn.addLegendSquare(chart, 330, 260, 10, 'yellow');
					fn.addLegendLabel(chart, 'Türkei', 340, 254);
					fn.addLegendSquare(chart, 330, 280, 10, 'yellow');
					fn.addLegendLabel(chart, 'Serbien, Montenegro, <br> Kosovo', 340, 274);
					fn.addLegendLabelbold(chart, 'Anzahl Zugezogene pro 100 Einwohner', 240, 307);
					
					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
	            }
			}
		}
	};
}());
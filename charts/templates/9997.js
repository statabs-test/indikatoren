/*  global rheinDataEPSG2056
	global Highcharts
	global geojson_wohnviertelEPSG2056
	global $
*/
(function(){

    return {
    	"legend": {
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
					return Highcharts.numberFormat((this.value),1); 
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
			}, 
			{
				visible: false,
				type: 'pie',
				color: 'red',
				borderColor: 'red'
			}, 
			{
				visible: false,
				type: 'pie',
        		color: 'blue',
        		borderColor: 'blue'
			}
		],
		chart: {
			events: {
	            load: function (e) {
	            	
	            	this.credits.element.onclick = function() {};
					
	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mapcolumn"
					//fn.defineTemplate();
					
					var choroplethSeries = chart.series[0];
					var columnSeries = [chart.series[2], chart.series[3]];

					//var extremeValues = fn.getPointsExtremes(pieSizeSeries.points);

					//define chart-specific details
					var columnSeriesConfig = function(data, correspondingMapSeriesItem, color){
						return {
	                        tooltip: {
	                        	headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.key} </span><br/>',
	                            pointFormatter: function () {
	                            	return correspondingMapSeriesItem.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.v),3) + '</b><br/>';
	                            }
	                        },
	                    };
					};
					
					//define different colors for positive and negative values
                    var color = function(value, index){
						//add polyfill for ie, see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sign                    	
                    	if (!Math.sign) {
						  Math.sign = function(x) {
						    return ((x > 0) - (x < 0)) || +x;
						  };
						}
                    	
                    	var colors = {
                    		'1': ['#ffaa00','#38a800'],
                    		'-1': ['#a87000', '#267300']
                    	};
						return colors[''+Math.sign(value)][index];
                    };
                    var chartHeight = 50;
                    var columnWidth = 5;
					
					//put the columns on the map
					fn.drawColumns(chart, columnSeries, choroplethSeries, columnSeriesConfig, color, chartHeight, columnWidth);

	                
					//column values in legend
					var legendColumnValues = [1, 0.5];

                	//Add manually drawn legend	
                	var legendTop = 205;
                	var legendLeft = 380;
	                fn.addLegendTitle(chart, columnSeries[0].name, legendLeft, legendTop);
	                
	                fn.addLegendColumnChart(chart, legendLeft+5,  legendTop+45,  legendColumnValues, color, 'columnLegendHideOnZoom');
	                
	                fn.addLegendText(chart,        legendLeft+20, legendTop+45,  Highcharts.numberFormat(legendColumnValues[0], 0,","," "), color(legendColumnValues[0], 0), 'columnLegendHideOnZoom');
	                fn.addLegendText(chart,        legendLeft+26, legendTop+45,  ',', undefined, 'columnLegendHideOnZoom');
	                fn.addLegendText(chart,        legendLeft+33, legendTop+45,  Highcharts.numberFormat(legendColumnValues[1], 1,","," "), color(legendColumnValues[1], 1), 'columnLegendHideOnZoom');

					fn.addLegendSquare(chart,      legendLeft+5,  legendTop+50,  10, color(1, 0));
					fn.addLegendText(chart,        legendLeft+20, legendTop+60,  'Benzin positiv');
					fn.addLegendSquare(chart,      legendLeft+5,  legendTop+65,  10, color(-1, 0));
					fn.addLegendText(chart,        legendLeft+20, legendTop+75,  'Benzin negativ');
					
					fn.addLegendSquare(chart,      legendLeft+5,  legendTop+80,  10, color(1, 1));
					fn.addLegendText(chart,        legendLeft+20, legendTop+90,  'Diesel positiv');
					fn.addLegendSquare(chart,      legendLeft+5,  legendTop+95, 10, color(-1, 1));
					fn.addLegendText(chart,        legendLeft+20, legendTop+105 , 'Diesel negativ');
					
					//make sure columns are hidden upon click onto column legend
					fn.AddColumnLegendClickHandler(chart);
	            }
			}
		}
	};
}());  
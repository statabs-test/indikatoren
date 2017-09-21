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
                    	var colors = {
                    		'1': ['#ffaa00','#38a800'],
                    		'-1': ['#a87000', '#267300']
                    	};
						return colors[''+Math.sign(value)][index];
                    };
					
					
					//put the columns on the map
					fn.drawColumns(chart, columnSeries, choroplethSeries, columnSeriesConfig, color);
					
	                
					//column values in legend
	                var minValueInLegend = 0.001; 
	                var maxValueInLegend = 0.1; 
	                
                	//Add manually drawn legend	
	                fn.addLegendTitle(chart, columnSeries[0].name, 285, 240);
	                
	                fn.addLegendCircle(chart, 410, 275, 2, 'grey');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend),3,","," "), 430, 265);
	                fn.addLegendCircle(chart, 410, 300, 10, 'grey');
	                fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend),2,"."," "), 430, 290);

					fn.addLegendSquare(chart, 290, 270, 10, 'red');
					fn.addLegendLabel(chart, 'Benzin', 310, 265);
					fn.addLegendSquare(chart, 290, 295, 10, 'blue');
					fn.addLegendLabel(chart, 'Diesel', 310, 290);
					
					//make sure columns are hidden upon click onto column legend
					fn.AddColumnLegendClickHandler(chart);
	            }
			}
		}
	};
}());
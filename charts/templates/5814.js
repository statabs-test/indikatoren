/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
(function () {

	return {
		"legend": {
			y: -7,
			"title": {
				"text": ""
			}
		},
		"colorAxis": {
			//"min": undefined,
			minorTickInterval: 0.5,
			"minColor": "#eff6e9",
			"maxColor": "#4b7b1f",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value), 1);
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
					pointFormatter: function () {
						//console.log(this);
						return this.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.value), 2) + '%</b><br/>';
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

					this.credits.element.onclick = function () { };

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
					var color = function (value) {
						return (value >= 0) ? '#7F5F1A' : '#FABD24';
					};

					//define chart-specific details
					var pieSeriesConfig = function (data, correspondingMapSeriesItem, color) {
						return {
							sizeFormatter: function () {
								var fn = this.chart.options.customFunctions;
								return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter);
								//return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
							},
							tooltip: {
								pointFormatter: function () {
									return correspondingMapSeriesItem.properties.LIBGEO + ': <b>' + ((this.v > 0) ? '+' : '') + Highcharts.numberFormat((this.v), 2) + ' Prozentpunkte</b><br/>';
								}
							}
						};
					};
					var pieSizeCatConfig;
					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

					//pie values in legend
					var minValueInLegend = 0.5;
					var maxValueInLegend = 1.5;

					//Add manually drawn legend
					fn.addLegendRectangle(chart, 260, 220, 223, 87, '#fbfbfb', 'pieLegend');
					fn.addLegendRectangle(chart, 260, 310, 223, 60, '#fbfbfb');

					fn.addLegendTitle(chart, pieSizeSeries.name + "", 265, 220, 'pieLegend');
	                /*fn.addLegendLabel(chart, 'in Prozentpunkte', 265, 225)
	                .css({
                        fontWeight: 'bold' }).
                     add();*/

					fn.addLegendCircle(chart, 282, 255, 0.5 * fn.pieSize(minValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey'); //, 'pieLegendHideOnZoom'
					fn.addLegendCircle(chart, 282, 280, 0.5 * fn.pieSize(maxValueInLegend, extremeValues.maxAbsNumber, maxPieDiameter), 'grey');
					fn.addLegendLabel(chart, Highcharts.numberFormat((minValueInLegend), 1, ",", " ") + ' Prozentpunkte', 295, 245);
					fn.addLegendLabel(chart, Highcharts.numberFormat((maxValueInLegend), 1, ",", " ") + ' Prozentpunkte', 295, 270);

					fn.addLegendSquare(chart, 413, 250, 10, '#7F5F1A');
					fn.addLegendSquare(chart, 413, 275, 10, '#FABD24');
					fn.addLegendLabel(chart, 'Zunahme', 425, 245);
					fn.addLegendLabel(chart, 'Abnahme', 425, 270);

					fn.addLegendTitle(chart, choroplethSeries.name + ' (%)', 265, 300)

					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart);
				}
			}
		}
	};
}());
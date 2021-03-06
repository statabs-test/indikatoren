/*  
	global Highcharts
	global geojson_wohnviertelEPSG2056 
	global $
*/
(function () {

	return {
		"legend": {
			useHTML: true,
			"title": {
				"text": null,
				style: { 'fontWeight': ' bold' }
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -333,
			"y": -60,
			itemMarginBottom: 2,
			symbolRadius: 0,
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0,
				to: 4.99,
				color: '#FFDA80',
				name: "<span style='color: rgba(0,0,0,0)'>10,0 </span><<span style='color: rgba(0,0,0,0)'> 1</span>5,0"
			}, {
				from: 5.0,
				to: 9.99,
				color: '#FABD24',
				name: "<span style='color: rgba(0,0,0,0)'>1</span>5,0 −<span style='color: rgba(0,0,0,0)'> 1</span>9,9"
			}, {
				from: 10.0,
				to: 19.99,
				color: '#CD9C00',
				name: "10,0 − 19,9"
			}, {
				from: 20.0,
				to: 49.99,
				color: '#7F5F1A',
				name: "20,0 − 49,9"
			}, {
				from: 50.0,
				color: '#45381D',
				name: "<span style='color: rgba(0,0,0,0)'>10,0 </span>≥ 50,0"
			}],
		},
		"data": {
			"seriesMapping": [
				{
					x: 0, y: 4
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
						return this.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.value), 1) + '</b><br/>';
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

					var choroplethSeries = chart.series[0];
					var pieSizeSeries = chart.series[1];

					//pie diameters in px
					var maxPieDiameter = 20;

					//configuration of categorical pie sizes
					var pieSizeCatConfig =
						[
							{
								name: "< <span style='color: rgba(0,0,0,0)'>1 </span>600",
								from: 0,
								to: 599,
								diameter: 7.5
							},
							{
								name: "600 − 1 499",
								from: 600,
								to: 1499,
								diameter: 15
							},
							{
								name: "≥ 1 500",
								from: 1500,
								to: 1000000000,
								diameter: 30
							}
						];

					//define different colors for positive and negative values
					var color = function (value) {
						return (value >= 0) ? '#5badff' : '#007A2F';
					};

					//define chart-specific details
					var pieSeriesConfig = function (data, correspondingMapSeriesItem, color) {
						return {
							sizeFormatter: function () {
								var fn = this.chart.options.customFunctions;
								//return fn.pieSize(Math.abs(data.value), fn.getPointsExtremes(pieSizeSeries.points).maxAbsNumber, maxPieDiameter); 
								return fn.pieSizeCategorical(Math.abs(data.value), pieSizeCatConfig).diameter;
							},
							tooltip: {
								pointFormatter: function () {
									return correspondingMapSeriesItem.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.v), 0) + '</b><br/>';
								}
							}
						};
					};

					//put the pies / bubbles on the map
					fn.drawPies(chart, pieSizeSeries, choroplethSeries, pieSeriesConfig, pieSizeCatConfig, color);

					//Add manually drawn legend
					//fn.addLegendRectangle(chart, 245, 215, 115, 135, '#fbfbfb');
					//fn.addLegendRectangle(chart, 360, 215, 115, 135, '#fbfbfb');
					fn.addLegendTitle(chart, "Anteil Einwohner <br/> über 30 µg/m<sup>3</sup> in %", 545, 270, undefined, true); //addLegendTitle: function (chart, text, x, y, cssClass, useHtml)
					fn.addLegendTitle(chart, "Anzahl Einwohner <br/> über 30 µg/m<sup>3</sup>", 765, 270, undefined, true);

					fn.addLegendCircle(chart, 778, 331, 0.5 * pieSizeCatConfig[0].diameter, '#5badff');
					fn.addLegendCircle(chart, 778, 350, 0.5 * pieSizeCatConfig[1].diameter, '#5badff');
					fn.addLegendCircle(chart, 778, 375, 0.5 * pieSizeCatConfig[2].diameter, '#5badff');
					fn.addLegendLabel(chart, pieSizeCatConfig[0].name, 829, 320, undefined, false, 'right');
					fn.addLegendLabel(chart, pieSizeCatConfig[1].name, 800, 340, undefined, false, 'right');
					fn.addLegendLabel(chart, pieSizeCatConfig[2].name, 830, 365, undefined, false, 'right');

					//fn.addLegendSquare(chart, 565, 240, 10, '#7F5F1A');
					//fn.addLegendLabel(chart, 'Zunahme', 580, 236);
					//fn.addLegendSquare(chart, 565, 256, 10, '#FABD24');
					//fn.addLegendLabel(chart, 'Abnahme', 580, 252);

					//make sure pies are hidden upon click onto pie legend
					fn.AddPieLegendClickHandler(chart, '#cccccc');
				}
			}
		}
	};
}());
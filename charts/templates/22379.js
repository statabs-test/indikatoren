
/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function () {
	return {
		"legend": {
			useHTML: true,
			"title": {
				"text": "Freiraumversorgung<br>in m<sup>2</sup> pro Person",
				style: { 'fontWeight': ' bold' }
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -340,
			"y": 10,
			itemMarginBottom: 2,
			symbolRadius: 0,
		},
		colorAxis: {
			dataClassColor: 'category',
			dataClasses: [{
				from: 0,
				to: 1.49999999999,
				color: '#490200',
				name: "> 0 &ndash; 1,49"
			}, {
				from: 1.5,
				to: 2.999999999,
				color: '#9b0200',
				name: "1,5 &ndash; 2,99"
			}, {
				from: 3.0,
				to: 4.4999999999,
				color: '#f20003',
				name: "3,0 &ndash; 4,49"
			}, {
				from: 4.5,
				to: 5.999999999,
				color: '#fe4400',
				name: "4,5 &ndash; 5,99"
			}, {
				from: 6.0,
				to: 7.4999999999,
				color: '#ff7f00',
				name: "6,0 &ndash; 7,49"
			}, {
				from: 7.5,
				to: 8.999999999,
				color: '#ffca01',
				name: "7,5 &ndash; 8,99"
			}, {
				from: 9.0,
				to: 100,
				color: '#fffd03',
				name: "<span style='color: rgba(0,0,0,0)'>0.0 </span>≥ 9,00"
			}],
		},
		"tooltip": {
			useHTML: true,
			formatter: function (args) {
				/*if (!this.point["Wohnviertel Id"]) {
					//Rhein
					return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
				}
				else {*/
					//Wohnviertel
					return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + '</span><br/>Block ' +
						this.point.properties.GeoName + ': <b>' + Highcharts.numberFormat((this.point.value), 2) + ' m<sup>2</sup></b><br/>';
				//}
			}
		},
		"data": {
			"seriesMapping": [
				{
					y: 1
				}
			]
		},
		"series": [
			{
				name: "Blöcke",
				animation: true,
				mapData: geojson_gundeldingen_bloecke,
				borderColor: "#fbfbfb",
				joinBy: ['GeoID', 'GeoID'],
				keys: ['GeoID', 'value'],
				"states": {
					"hover": {
						"enabled": true,
						"borderColor": '#ababab',
						"brightness": 0.1,
					}
				},
				//choroplethe-tooltip
				tooltip: {
					//headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> Leerwohnungsquote </span><br/>',
					pointFormatter: function () {
						return this.properties.GeoName + ': <b>' + Highcharts.numberFormat((this.value*100), 2) + '  </b><br/>';
					},
					useHTML: true
				}
			}

		],
		chart: {
			events: {
				load: function (e) {
					this.credits.element.onclick = function () { };
					var chart = this;
					var fn = this.options.customFunctions;
					//define new Highcharts template "mappie"
					fn.addLegendRectangle(chart, 0, 230, 130, 150, '#fbfbfb');
				}
			}
		}
	};
}());


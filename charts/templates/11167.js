(function () {
	return {
		plotOptions: {
			series: {
				showInLegend: false
			}
		},
		"tooltip": {
			"formatter": function (args) {
				if (!this.point["lat"]) {
					//Rhein
					return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
				}
				else {
					return '<span style="font-size: 0.85em;"><b> ' + this.point.name + '</b><br/>' +
						this.point.address + '</span><br/>' +
						'<b>' + this.point.z + '</b> Plätze';
				}
			}
		},
		"data": {
			"seriesMapping": [
				//default tsv: first column = GeoID, second = choroplethe, 3rd = bubble
				{
					lat: 0,
					lon: 1,
					name: 2,
					z: 3,
					address: 5
				}, {
					lat: 0,
					lon: 1,
					name: 2,
					z: 4,
					address: 5
				},
			]
		},
		legend: {
			enabled: true,
			width: 215,
			//itemWidth: 210,
			itemMarginBottom: 5,
			labelFormatter: function () {
				console.log(this);
				if (this._i == 1) return "<b>ohne</b> Leistungsvereinbarung oder im <b>höheren</b> Preissegment";
				if (this._i == 2) return "<b>mit</b> Leistungsvereinbarung oder im <b>tieferen</b> Preissegment";
			},
			itemStyle: {
				fontWeight: "normal",
				textOverflow: "none",
				whiteSpace: "wrap"
			},
			bubbleLegend: {
				enabled: true,
				borderColor: '#ffffff',
				borderWidth: 1,
				color: '#bbbbbb',
				connectorColor: '#cccccc',
				connectorDistance: 20
			}
		},
		"colorAxis": {
			showInLegend: false
		},
		beforeSeries: [
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
					}
				},
				nullColor: '#cccccc',
			}
		],

		"series": [
			{
				type: 'mapbubble',
				id: 'points',
				name: 'Wohnungen ohne Leistungsvereinbarung oder im höheren Preissegment',
				minSize: 7,
				maxSize: '6%',
				marker: {
					//radius: this.point.value
					fillColor: '#a1c436',
					fillOpacity: 0.6,
					lineColor: '#ffffff'
				},
				dataLabels: {
					enabled: false
				},
				showInLegend: true,
			},
			{
				type: 'mapbubble',
				id: 'points',
				name: 'Wohnungen mit Leistungsvereinbarung oder im tieferen Preissegment',
				minSize: 7,
				maxSize: '6%',
				marker: {
					//radius: this.point.value
					fillColor: '#006b5e',
					fillOpacity: 0.6,
					lineColor: '#ffffff'
				},
				dataLabels: {
					enabled: false
				},
				showInLegend: true,
			}
		]
	};
}());
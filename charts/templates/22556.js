(function () {
	return {
		plotOptions: {
			series: {
				marker: {
					enabled: false
				}
			}
		},
		"xAxis": {
			"type": "category",
			"tickInterval": 1,
			"labels": {
				formatter: function () {
					return this.value.replace('-', '/'); //workaround for Chrome which automatically replaces e.g. 2000/01 by 2000-01 (interprets it as year/month)
				}
			},
		},

		"yAxis": {
			min: 0,
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value), 0) + '%';
				},
			},
		},
		"legend": {
			"enabled": true,
			"layout": "horizontal",
			"align": "left",
			"verticalAlign": "top",
		},
		"series": [
			{
				"color": "#0091f7", // 
				"tooltip": {
					"shared": false,
					"pointFormatter":
						function () {
							return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b><br/><b>'
						}
				},
			},
			{
				"color": "#999999", 
				visible: false,
				showInLegend: false
			},
		],
	}
}());
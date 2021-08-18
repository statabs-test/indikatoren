(function () {
	return {
		"xAxis": {
			"tickInterval": 1,
		},
		"yAxis": {
			"labels": {
				"format": "{value:,.0f}",
			},
			"min": 0,
			"max": undefined,
			tickInterval: 100000
		},
		"series": [
			/*{ "color": "#B375AB" }, */
			{ "color": "#2F656B" }, 
			/*{ "color": "#923F8D",
			dashStyle: 'ShortDash' }*/
			{ "color": "#8B2223" }
		],
		"legend": {
			"enabled": true,
			"layout": "horizontal",
			"verticalAlign": "top",
			"align": "left",
			labelFormatter: function () {
				return this.name.replace(' Reinvermögen', '');
			 }			
		},
	}
}());
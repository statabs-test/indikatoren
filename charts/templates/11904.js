(function () {
	return {
		chart: {
			marginRight: 20
		},
		"plotOptions": {
			"line": {
				"connectNulls": true,
				"marker": {
					"enabled": false,
					"symbol": "circle",
				}
			}
		},
		"xAxis": {
			//"tickInterval": 1
			type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
			tickPositioner: function () {
				var maxlabels = 10,
					ext = this.getExtremes(),
					i = Math.round(ext.max),
					interval = Math.round((i - ext.min) / maxlabels),
					pos = [i];
				while (i >= ext.min) pos.unshift(i = i - interval);
				return pos;
			}
		},
		"yAxis": {
			"min": undefined,
			//max: 200,
			"labels": {
				"format": "{value:,.0f}"
			}
		},
		"tooltip": {
			"shared": false,
			"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
		},
		"legend": {
			"layout": "horizontal",
			"verticalAlign": "top",
			"align": "left",
			"itemMarginBottom": 5,
			alignColumns: false,
			//itemWidth: 105,
			//width: 220,
			itemStyle: {
				textOverflow: "none",
				whiteSpace: "nowrap"
			}
		},
		"series": [
			{ "color": "black" }, /* black */
			{ "color": "#b00000 ", visible: false }, /* rot */
			{ "color": "#672773", visible: false }, /* violett */
			{ "color": "#008AC3", visible: false },/* blau  */
		],
	}
}());

(function () {
	return {
		"plotOptions": {
			"series": {
				//"pointWidth": 50,
				"dataLabels": {
					"style": {
						"fontSize": "10px"
					}
				},
				"stacking": "normal"
			}
		},
		"xAxis": {
			"type": "category"
		},
		"yAxis": {
			"labels": {
				"format": "{value:,.0f}"
			},
			"reversedStacks": false
		},
		"tooltip": {
			"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>',
			"shared": false
		},
		"legend": {
			"layout": "horizontal",
			"itemWidth": 1000,
			"verticalAlign": "top",
			//"y": 45, 
			padding: 0,
			"itemMarginBottom": 5,
			"align": "left",
			"itemStyle": {
				"fontWeight": "normal"
			}
		},
		"series": [
			{
				"color": "#4BACC6",
				"legendIndex": 0
			},
			{
				"color": "#933F8D",
				"legendIndex": 1
			},
			{
				"color": "#B475AB",
				"legendIndex": 2
			},
			{
				"color": "#E7CEE2",
				"legendIndex": 3
			},
			{
				"color": "#2B0099",
				"legendIndex": 4
			},
			{
				"color": "#FABD24",
				"legendIndex": 5
			},
			{
				"color": "#FFDA80",
				"legendIndex": 6
			},
			{
				"color": "#FF8028",
				"legendIndex": 7
			},
			{
				"color": "#007A2F",
				"legendIndex": 8
			}
		],
		"chart": {
			height: 600,
			//"marginBottom": 60,
			//"marginTop": 160,
			"type": "column"
		}
	}
}());

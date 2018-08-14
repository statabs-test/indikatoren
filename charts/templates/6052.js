(function(){
    return {
        "plotOptions": {
            "series": {
                "stacking": null,
				pointPadding: 0, 
				groupPadding: 0.1, 
				borderWidth: 0

            }
        },
        "chart": {      
            "type": "column"
        },
        "series": [
            {"color": "#2B0099", legendIndex: 1}, 
            {"color": "#2B0099", legendIndex: 0},
            {"color": "#fabd24", legendIndex: 2},
            {"color": "#cd9c00", legendIndex: 3},
            {"color": "#C8C8C8", legendIndex: 4}
        ],
        "xAxis": {
            "type": "category"
        },
        "yAxis": {
    	    "max": 100,
            "labels": {
                "format": "{value}%"
            }
        },
        "legend": {
            enabled: true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 5,
            padding: 0,
            "align": "left",
            //"x": 30,
            //"y": 35,
            //"itemWidth": 80,
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        tooltip: {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
      }
	}
}());

 

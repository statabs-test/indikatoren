(function(){
    return {
      "yAxis": {
        "labels": {
          "format": "{value:,.0f}",
        }
      },
      "xAxis": {
        "tickInterval": 1
      },
      "tooltip": {
        "shared": false,
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
      },
      "series": [
        {
          "color": "#69929B",
          "marker": {
            "enabled": true
          }
      },
        {"color": "#672773"},
        {"color": "#007A2F"},
        {"color": "#73BA7C"},
        {"color": "#FABD24"},
        {"color": "#D3E2E5"},
        {"color": "#9F7C5A"},
        {"color": "#E7CFE2"},
        {"color": "#FF8028"}
      ],
      "legend": {
        "enabled": true,
        "x": 25,
        "y": 35,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 5,
        "align": "left",
        "itemStyle": {
          "fontWeight": "normal"
        }
      },
      "series": {
        "dataLabels": {
          "enabled": false
        }
      },
      "chart": {		
    		"marginTop": 130
    	}
	}
}());
 
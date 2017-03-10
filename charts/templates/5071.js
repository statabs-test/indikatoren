(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
	  "min": 0,
	  "max": 100,
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
    {"color": "#2f656b"}, /*blau*/
    {"color": "#83522e"}, /* braun*/
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());

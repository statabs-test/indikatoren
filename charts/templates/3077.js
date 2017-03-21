(function(){
    return {
  "xAxis": {
    "tickInterval":2,
  },
  "yAxis": {
    "min": 0,
    "max": 20,
	"labels": {
		"format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
  },
 "series": [
 	{"color": "#672773", "legendIndex": 1}, /*violett*/
	{"color": "#dc440e", "legendIndex": 0} /*orange*/
  ],
  "legend": {
    "enabled": true,
    "x": 10,
    "y": 100,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
     "width": 180,
    "itemStyle": {
      "fontWeight": "normal",
      "width": 200
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
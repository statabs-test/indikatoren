(function(){
    return {
 "xAxis": {
    "tickInterval": 12,
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
 	{"color": "#A8C3CA", "index": 2}, /*AG*/
 	{"color": "#FF8028","index": 1}, /*BL*/
	{"color": "#6F6F6F", "index": 0,	  
	"marker": {
        "enabled": true
    }}, /*BS*/
	{"color": "#990300", "index": 4}, /*CH*/
	{"color": "#008AC3", "index": 3}, /*ZH*/
	  ],
  "legend": {
    "enabled": true,
    "x": 45,
    "y": 55,
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
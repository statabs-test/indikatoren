(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
  "min": 0,
  "max": 50, 
   "tickInterval": 10,
	"labels": {
		"format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
  },
 "series": [
 	{"color": "#b00000"}, /*rot*/
	{"color": "#68411e"}, /*braun*/
	{"color": "#44ab2b"} /*grün*/
  ],
  "legend": {
    "enabled": true,
    "x": 20,
    "y": 50,
    "itemWidth": 300,
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
      }, 
    }
  }
}
}());
(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>'
  },
 "series": [
  	{"color": "#672773"}, /* violett*/
  	{"color": "#4a7ebb"}, /*dunkelblau*/
  	{"color": "#46aac5"}, /*hellblau*/
    {"color": "#c1d2a7"}  /* hellgrün*/
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 50,
    "itemWidth": 210,
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
};
}());

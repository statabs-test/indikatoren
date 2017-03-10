(function(){
    return {
  "xAxis": {
    "tickInterval": 2,
  },
  "yAxis": {
    "tickInterval": 10,
  	"labels": {
		  "format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
 	{"color": "#b475ab"}, /*hellpink*/
 	{"color": "#e7cfe2"} /*dunkelpink*/
	  ],
  "legend": {
    "enabled": true,
    "x": 30,
    "y":40,
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
(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
	  "labels": {
	  	"format": "{value}%"
  	}
  },	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
 	{"color": "#000000",
 	"legendIndex": 0,
 	"marker": {
    "enabled": true
    }
 	}, /*schwarz*/
	{"color": "#cd9c00",
	"legendIndex": 2
	}, /*dunkelgelb*/
 	{"color": "#fabd24",
	"legendIndex": 1} /*hellgelb*/
	  ],
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
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
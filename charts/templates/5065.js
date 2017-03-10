(function(){
    return {
  "xAxis": {
    "tickInterval": 2,
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
 	{"color": "#000000",
 	 "index": 2,
 	  "marker": {
        "enabled": true
    }
 	}, /*schwarz*/
	{"color": "#4a7ebb",
	  index:3
	}, /*blau*/
	{"color": "#e46c0a",
	  index:4
	}, /*orange*/
	{"color": "#9933ff",
	  index:4
	}, /*violett*/
 	{"color": "#ff0000",
 	 "index": 1,
 	  "marker": {
        "enabled": true
    }
 	}  /*rot*/
	  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 60,
    "itemWidth": 200,
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
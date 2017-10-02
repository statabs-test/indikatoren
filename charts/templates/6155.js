(function(){
    return {
  "xAxis": {
    "tickInterval":2
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
    {"color": "#FABD24",
      "marker": {
        "enabled": true
      }    
    }, /* hellgelb */
    	{"color": "#7F5F1A",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgelb */
    	{"color": "#008AC3",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* hellblau */
    	{"color": "#2B0099",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelblau */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    "y": 35,
    "itemWidth": 150,
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
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 
(function(){
    return {
  "xAxis": {
    "tickInterval": 3
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
    {"color": "#B00000",
      "marker": {
        "enabled": true
      }    
    }, /* dunkelrot */
	{"color": "#FF8028",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* orange */
    	{"color": "#007A2F",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgrün */
    	{"color": "#8AB77D",
	visible:true,
      "marker": {
        "enabled": true
      },
    }, /* hellgrün */
    	{"color": "#4f81bd",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelblau */
    	{"color": "#A8C3CA",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* hellblau */
    	{"color": "#662673",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelviolett */
    	{"color": "#B375AB",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* hellviolett */
  ],
  "legend": {
    "enabled": true,
    "x": 45,
    //"y": 35,
    "itemWidth": 120,
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
 
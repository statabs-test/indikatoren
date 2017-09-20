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
    legendIndex: 1,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelrot */
    	{"color": "#007A2F",
    	legendIndex: 3,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgrün */
    	{"color": "#4f81bd",
    	legendIndex: 5,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelblau */
    	{"color": "#662673",
    	legendIndex: 7,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelviolett */
       {"color": "#B00000",
       legendIndex: 2,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelrot */
    	{"color": "#007A2F",
    	legendIndex: 4,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgrün */
    	{"color": "#4f81bd",
    	legendIndex: 6,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelblau */
    	{"color": "#662673",
    	legendIndex: 8,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelviolett */
  ],
  "legend": {
    "enabled": true,
    "x": 45,
    "y": 35,
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
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 
(function(){
    return {
  chart: {
    marginRight: 4,
  },
  "xAxis": {
    "tickInterval": 2
  },
  "yAxis": {
  	min: 100,
  	max: 150,
  	tickInterval: 10,
	"labels": {
		"format": "{value:,.0f}",
		y: 3
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
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
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgrün */
    	{"color": "#4f81bd",
    	legendIndex: 5,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelblau */
    	{"color": "#2B0099",
    	legendIndex: 7,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelviolett */
       {"color": "#E64900",
       visible: true,
       legendIndex: 2,
      "marker": {
        "enabled": false
      }    
    }, /* hellrot */
    	{"color": "#68AB2B",
    	legendIndex: 4,
      "marker": {
        "enabled": false
      }    
    }, /* hellgrün */
    	{"color": "#008AC3",
    	legendIndex: 6,
      "marker": {
        "enabled": false
      }    
    }, /* hellblau */
    	{"color": "#B375AB",
    	legendIndex: 8,
      "marker": {
        "enabled": false
      }    
    }, /* hellviolett */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    //"itemWidth": 200,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 3,
    margin: 3, 
    padding: 2,
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
 
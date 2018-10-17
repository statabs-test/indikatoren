(function(){
    return {
  "xAxis": {
    "tickInterval":1,
    labels: {
      rotation: -45
    }
  },
  "yAxis": {
    tickInterval: 50000,    
  	"labels": {
  		"format": "{value:,.0f}", 
      y: 3
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    {"color": "#6F6F6F",
    }, /* dunkelgrau */
    	{"color": "#007A2F",
    }, /* dunkelgrün */
    	{"color": "#4f81bd",
    }, /* dunkelblau */
  ],
  "legend": {
    "enabled": true,
    margin: 3, 
    padding: 1,
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
 
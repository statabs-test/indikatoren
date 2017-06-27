(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#b00000 ",
      "marker": {
        "enabled": true
      }    
    
    }, /* rot */
    {"color": "#ff8028",
      "marker": {
        "enabled": true
      }    
    }, /* orange */
	{"color": "#672773",
      "marker": {
        "enabled": true
      }    
    }, /* violett */
	{"color": "#4f81bd",
      "marker": {
        "enabled": true
      }    
    }, /* blau */
  	{"color": "#007a2f",
      "marker": {
        "enabled": true
      }    
    }/* grün  */
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
 
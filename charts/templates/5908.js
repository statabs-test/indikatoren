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
    {"color": "#ff8028",
      "marker": {
        "enabled": true
      }    
    }, /* orange */
	{"color": "#4f81bd",
      "marker": {
        "enabled": true
      }    
    }, /* blau */
  ],
  "legend": {
    "enabled": true,
    "x": 45,
    "y": 35,
    "itemWidth": 1000,
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
 
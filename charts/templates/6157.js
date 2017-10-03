(function(){
    return {
  "xAxis": {
    "tickInterval": 1
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
    {"color": "#2B0099",
      "marker": {
        "enabled": true
      }    
    }, /* duneklblau */
    	{"color": "#007A2F",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgrün */
  ],
  "legend": {
    "enabled": true,
    //"x": 25,
    "y": 65,
    "itemWidth": 500,
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
 
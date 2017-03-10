(function(){
    return {
    "xAxis": {
    "tickInterval": 2
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
	  {"color": "#b00000"},
    {"color": "#71a3b5"}, 
	  {"color": "#000000",
	    "marker": {
        "enabled": true
    }
	  }
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 55,
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
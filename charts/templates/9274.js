(function(){
    return {
  "xAxis": {
    "tickInterval": 10,
  },
  "yAxis": {
    "min": 0, 
	  "labels": {
        "format": "{value:,.0f}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [

    {
    	"color": "#008AC3", 
    	"legendIndex": 0
    }, /* blau */
    {
    	"color": "#3c3c3c", /* schwarz */
    	"legendIndex": 1,
        },
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
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
(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
    {
		"color": "#DC440E",
    	"legendIndex": 2
    }, /* rot */
    {
		"color": "#008AC3",
    	"legendIndex": 2
    }, /* blau */
    {
		"color": "474747",
    	"legendIndex": 2
    }, /* schwarz */
    {
    	"color": "#007A2F", 
    	"legendIndex": 0
    }, /* grün */
    {
    	"color": "#FABD24", /* dunkelgelb */
    	"legendIndex": 1,
    	"marker": {
        	"enabled": false
    	}
    },
  ],
   "legend": {
    "enabled": true,
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
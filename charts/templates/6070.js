(function(){
    return {
  "xAxis": {
    type: 'category',
    endOnTick: false,
    "tickInterval": 5,
     "labels": {
      "rotation": -45,
     }
  },
  "yAxis": {
    "min": 0, 
    max: 60,
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
		"color": "#B00000",
    	"legendIndex": 2
    }, /* rot */
    {
		"color": "#662673",
    	"legendIndex": 2
    }, /* violett */
    {
		"color": "#008AC3",
    	"legendIndex": 2
    }, /* blau */
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    "y": 35,
    "itemWidth": 100,
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
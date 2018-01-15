(function(){
    return {
  "xAxis": {
    type: 'category',
    endOnTick: false,
    "tickInterval": 5,
     "labels": {
<<<<<<< HEAD
      "rotation": -45,
=======
     	step:1,
      "rotation": 0,
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
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
<<<<<<< HEAD
		"color": "#B00000",
    	"legendIndex": 2
    }, /* rot */
    {
		"color": "#662673",
    	"legendIndex": 2
    }, /* violett */
    {
		"color": "#008AC3",
=======
		"color": "#fabd24", // 1997
    	"legendIndex": 2
    }, /* rot */
    {
		"color": "#672773" , // 2006
    	"legendIndex": 2
    }, /* violett */
    {
		"color": "#007a2f", // 2016
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
    	"legendIndex": 2
    }, /* blau */
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
<<<<<<< HEAD
    "y": 35,
=======
    "y": 30,
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
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
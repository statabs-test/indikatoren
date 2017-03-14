(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
	 },
  "yAxis": {
    "min": 0, 
    "max": 100, 
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
  },
"series": [
  {
    "color": "#b00000", /* rot */
    "index": 1,
    "marker": {
    "enabled": true
    }
  },
	{"color": "#a56868",
	 "index": 3,
	  "visible": false
	}, /*rot*/
	{"color": "#e0acac",
	 "index": 5,
	  "visible": false}, /*rot*/
	{
    "color": "#183ec9", /* blau */
     "index": 2,
    "visible": true,
    "marker": {
    "enabled": true
  }
  },
	{"color": "#256370", /*blau*/
	 "index": 4,
	  "visible": false
	}, 
  {"color": "#96c9d3",  /* blau*/
   "index": 6,
    "visible": false
  } 
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 50,
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
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());
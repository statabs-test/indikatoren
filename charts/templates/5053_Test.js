(function(){
    return {
 "xAxis": {
    "tickInterval": 2,
  },
  "yAxis": {
    "min": 0, 
    "max": 100,
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
	{"color": "#8B2223", "visible": false}, /*dunkelrot */
	{"color": "#DC440E", "visible": false}, /*hellrot */
	{"color": "#FFDA80", "visible": false}, /*hellgelb */
	{"color": "#007A2F", "visible": false}, /*dunkelgrün */
	{"color": "#D7E8D2", "visible": false}, /*hellgrün */
	{"color": "#008AC3", "visible": false}, /*dunkelblau */
	{"color": "#B9CFD7", "visible": false}, /*hellblau */
	{"color": "#E7CEE2", "visible": false},  /*hellpink */
	{"color": "#C8C8C8", "visible": false},  /*grau */
	{"color": "#3A2012",
	"visible": true,
			"marker": {
        	"enabled": true
    	}
	}  /* BS - schwarz */

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
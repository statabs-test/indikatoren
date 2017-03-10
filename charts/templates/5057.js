(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
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
    	"legendIndex": 0
    }, /* rot */
    {
    	"color": "#008AC3", 
    	"legendIndex": 2
    }, /* blau */
    {
    	"color": "#3c3c3c", /* schwarz */
    	"legendIndex": 1,
    	"marker": {
        	"enabled": true
    	}
    },
  ],
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
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
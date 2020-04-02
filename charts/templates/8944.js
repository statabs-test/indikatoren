(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels: { 
		style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
	}
  },
  "yAxis": {
    "min": 0,
      "labels": {
      "format": "{value:,.0f}",
      },
      tickInterval: 1000
  },	
  "tooltip": {
    "shared": false,
     //"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>',
  },
 "series": [
    {
      "color": "#B00000",
      "legendIndex": 1
    }, /* rot */
    {
		"color": "#662673",
    	"legendIndex": 2
    }, /* violett */
    {
		"color": "#008AC3",
    	"legendIndex": 3
    }, /* blau */
    {
    	"color": "#FABD24", 
    	"legendIndex": 4
    }, /* gelb */
        {
    	"color": "#007A2F", 
    	"legendIndex": 5
    }, /* grün */
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    "layout": "vertical",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "right",
    itemDistance: 0,
    padding: 0,
    symbolPadding: 2, 
    "itemStyle": {
      "fontWeight": "normal"
    },
    labelFormatter: function () {
      return this.name.replace(" ", "<br>");
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
(function(){
    return {
  
  "xAxis": {
  	tickInterval: 2,
    "type": "category",
  },
  "yAxis": {
	//"max": 100,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#007A2F", "visible": true}, /* grün*/
  //{"color": "#007A2F", "visible": true} /* ... */
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 40
  },
   plotOptions: {
        series: {
           "pointWidth": 20,
        }
   },

}
}());
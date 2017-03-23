(function(){
    return {
  "data":{
  	"switchRowsAndColumns": true
  },
  "xAxis": {
    "type": "category" 
  },
  "yAxis": {
	"max": 100,
    "labels": {
      "format": "{value}%"
    }    
  },
   "series": [
  {"color": "#e7cfe2", "visible": false}, /* hellrot*/
  {"color": "#b475ab", "visible": false}, /* ... */
  {"color": "#933f8d", "visible": false}, /* ...*/
  {"color": "#2f1435", "visible": false}, /* ... */
  {"color": "#8064a2"}, /* dunkelrot*/

  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 25,
	"y": 45,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
    "shared": false
  },  
  "chart": {      
    "type": "column",
    "inverted": true
  }
}
}());
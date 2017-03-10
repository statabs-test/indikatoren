(function(){
    return {
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
  {"color": "#e7cfe2"}, /* hellrot*/
  {"color": "#b475ab"}, /* ... */
  {"color": "#933f8d"}, /* ...*/
  {"color": "#2f1435"}, /* ... */
  {"color": "#8064a2"}, /* dunkelrot*/

  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 0,
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
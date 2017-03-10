(function(){
    return {
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#d7e9d2", "index": 0, "legendIndex": 0}, /* hellgrün*/
  {"color": "#73ba7c", "index": 1, "legendIndex": 1}, /* ... */
  {"color": "#007a2f", "index": 2, "legendIndex": 2}, /* ... */
  {"color": "#0b3b19", "index": 3, "legendIndex": 3}, /* ... */
  {"color": "#4f6228", "index": 4, "legendIndex": 4}  /* dunkelgrün */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	"y": 65,
	"itemWidth": 80,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 
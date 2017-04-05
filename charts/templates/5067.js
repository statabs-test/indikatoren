(function(){
    return {
   "data":{
  	"switchRowsAndColumns": true
  },
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
	"max": 100,
    "labels": {
      "format": "{value}%"
    }    
  },
   "series": [
  {"color": "#cd9c00"}, /* hellbraun*/
  {"color": "#9f7c5a"}, /* ... */
  {"color": "#b00000"}, /* ...*/
  {"color": "#ff5050"}, /* ... */
  {"color": "#45381d"}, /* dunkelbraun*/
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	"y": 65,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());
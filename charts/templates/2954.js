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
  {"color": "#cd9c00", "visible": false}, /* hellbraun*/
  {"color": "#9f7c5a", "visible": false}, /* ... */
  {"color": "#b00000", "visible": false}, /* ...*/
  {"color": "#ff5050", "visible": false}, /* ... */
  {"color": "#45381d", "visible": true}, /* dunkelbraun*/
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
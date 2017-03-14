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
  {"color": "#ffda80"}, /* hellgelb*/
  {"color": "#fabd24"}, /* ... */
  {"color": "#cd9c00"}, /* ... */
  {"color": "#7f5f1a"}, /* ... */
  {"color": "#948a54"}  /* braun */
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

 
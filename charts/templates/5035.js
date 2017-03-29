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
  {"color": "#d7e9d2", "visible": false}, /* hellgrün*/
  {"color": "#73ba7c", "visible": false}, /* ... */
  {"color": "#007a2f", "visible": false}, /* ... */
  {"color": "#0b3b19", "visible": false}, /* ... */
  {"color": "#4f6228", "visible": true}  /* dunkelgrün */
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
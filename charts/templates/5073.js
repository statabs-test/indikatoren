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
  {"color": "#e7cfe2", "visible": false}, /* hellviolett*/
  {"color": "#b475ab", "visible": false}, /* ... */
  {"color": "#672773", "visible": false}, /* ... */
  {"color": "#2f1435", "visible": false}, /* ... */
  {"color": "#403152", "visible": true}  /* dunkelviolett */
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
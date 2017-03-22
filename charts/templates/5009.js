(function(){
    return {
   "data":{
  	"switchRowsAndColumns": true
  },
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#cd9c00"}, /*hellbraun */
  {"color": "#9f7c5a"}, /*dunkelbraun1 */
  {"color": "#b00000"}, /*rot */
  {"color": "#45381d"}, /*dunkelbraun2 */
  {"color": "#71a3b5"}  /*blau */
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
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 
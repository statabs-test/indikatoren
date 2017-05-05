(function(){
    return {
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
   "series": [
  {"color": "#008AC3"}, /* dunkelgrün*/
  {"color": "#990300"}, /* hellgrün */
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
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());
(function(){
    return {
  "data":{
  	"switchRowsAndColumns": true
  },
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
    "labels": {
      "format": "{value}%",
    }    
  },
  "series": [
  {"color": "#b475ab"}, /* pink*/
  {"color": "#a8c4cb"}, /* grau */
  {"color": "#73ba7c"}, /* grün */
  {"color": "#008AC3"}, /* blau */
  {"color": "#fabd24"},  /* orange */
  {"color": "#E64900"}  /* orange */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 30,
	"y": 65,    
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
    "inverted": false
  }
  }
}());
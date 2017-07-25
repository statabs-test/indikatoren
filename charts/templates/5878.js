(function(){
    return {
  
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -90 
    } 
  },
  "yAxis": {
	//"max": 100,
    "labels": {
      "format": "{value:,.0f} m²"
    }    
  },
  "series": [
  {"color": "#CD9C00", "visible": true}, /* hellbraun*/
  {"color": "#83522E", "visible": true} /* dunkelbraun */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 70,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} m²</b><br/>',
    "shared": false
  },
  "chart": {
  	"width":640,
    "type": "column",
    "inverted": false,
  }
}
}());
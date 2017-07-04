(function(){
    return {
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
	"labels": {
      "format": "{value} m²",
    }    
  },
   "series": [
  {"color": "#69929b", "visible": true} /* hellbraun*/
  ],
  "legend": {
    "enabled": false,
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
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f} m²</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());
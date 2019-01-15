(function(){
    return {
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
   {
      "color": "#FABD24",
      "index": 0

    },
       {
      "color": "#007A2F",
      "index": 1
    },
    {
      "color": "#73B97C",
      "index": 2
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 143,
		//"y": 65,    
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
    "inverted": true
  }
	}
}());

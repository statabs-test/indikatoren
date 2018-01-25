(function(){
    return {
  "chart": {
    "type": "column"
  },
  plotOptions: {
    column: {
      stacking: 'normal'
    },
    "series": {
      "borderWidth": 0,
      "stacking": "percent"
    }
  },
  "xAxis": {
    "tickInterval": 2,
  },
  "yAxis": {
    "min": 0, 
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} m<sup>2</sup></b> ({point.percentage:.1f}%)<br/>',
  },
 "series": [
    {
		"color": "#246370",
    },
    {
		"color": "#008AC3",
    }, /* blau */
    {
    	"color": "#68ab2b", 
    }, /* grün */
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    "y": 35,
    "itemWidth": 135,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  }
}
}());
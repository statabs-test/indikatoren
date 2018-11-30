(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category",
    "labels": {
      rotation: -90,
      y: 100,
		  align: "middle",
          "formatter": function() {
            return this.value.replace("/", "<br/>")
        },
        style: { 
		//	textOverflow: 'none' // prevents ellipsis
		} 
    },
  },
  "yAxis": {
  	//"min": 0,
  	//"max": 0.5,
  //tickInterval: 10000,
    tickInterval: 5000,
    tickAmount: 6,
    "labels": {
      "format": "{value:,.0f}" ,
        style: { 
          width: "10px",
          wordWrap: 'break-word',
		//	textOverflow: 'none' // prevents ellipsis
		} 
    }    
  },
  "series": [
  {"color": "#A8C3CA"},
  {"color": "#689199"}, 
  {"color": "#246370"}, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    },
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    shared: false
  },  
  "chart": {  
    "type": "column",
    "inverted": false,
  	width: 665, 
  	height: 500,
  	spacingTop: 7
  }
}
}());

 
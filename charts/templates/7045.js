(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0.1,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category",
    "labels": {
      rotation: -90,
      y: 10,
         x: -10,
           "align": "right",
           "formatter": function() {
            return this.value.replace("/", "<br/>")
        },
        style: { 
          width: "115px",
          wordWrap: 'break-word',
		//	textOverflow: 'none' // prevents ellipsis
		} 
    },
  },
  "yAxis": {
    tickInterval: 5000,
    tickAmount: 6,
    "labels": {
      "format": "{value:,.0f}" ,
        style: { 
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
  	marginBottom: 120,
  	spacingTop: 5
  }
}
}());

 
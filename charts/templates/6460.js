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
		  align: "left",
          x: -180,
          "formatter": function() {
            return this.value.replace("/", "<br/>")
        },
        style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
    },
  },
  "yAxis": {
  	//"min": 0,
  	//"max": 0.5,
    "labels": {
    rotation: 0,
      "format": "{value}%" ,
        style: { 
			textOverflow: 'none' // prevents ellipsis
		} 
    }    
  },
  "series": [
  {"color": "#FFBB58"},
  {"color": "#FF8028"}, 
  {"color": "#DC440E"}, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	"y": 55,  
	"itemWidth": 70,
    "itemStyle": {
      "fontWeight": "normal"
    },
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.3f}%</b><br/>',
    shared: false
  },  
  "chart": {  
  	marginLeft: 200,
  	"height": 650,        
    "type": "column",
    "inverted": true
  }
}
}());

 
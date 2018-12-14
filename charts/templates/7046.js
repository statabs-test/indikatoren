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
          fontSize: "9px",
          width: "100px",
          wordWrap: 'break-word',
		    //	textOverflow: 'none' // prevents ellipsis
		} 
    },
  },
  "yAxis": {
    tickAmount: 8,
  	tickInterval: 0.02,
    "labels": {
     rotation: 0,
    "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      }, 
     "format": "{value}*100%" ,
     style: { 
      fontSize: "9px",
			//textOverflow: 'none' // prevents ellipsis
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
    itemDistance: 3,
    "itemStyle": {
      "fontSize": "9px",
      "fontWeight": "normal"
    },
  },
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
    },
  },  
  "chart": {  
  	"type": "column",
    "inverted": false,
  	width: 662, 
  	hight: 208,
  	//marginBottom: 120,
	  spacingTop: 5
  }
}
}());

 
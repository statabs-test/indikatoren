(function(){
    return {
 "series": [
  {"color": "rgb(180,117,171)",legendIndex:1},
  {"color": "rgb(103,39,115)", legendIndex:0}, 
 
  //{"color": "rgb(231,207,226)", index: 0, legendIndex:2}, 
],
  "chart": {
      type: "column",
    "inverted": true,
    marginRight: 25
  }, 
  subtitle: {
    useHTML: true,
  },
  legend: {
    itemDistance: 5,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 45,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },  
  xAxis: {
    labels: {
      useHTML: false,
      formatter: function() {
      	return this.value;//.replace("Eingebürgerte ", "Eingebürgerte<br/>");
      }
    }
  },
  yAxis: {
    tickAmount: 7
  },
    "tooltip": {
        "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
         "shared": true
    },
  plotOptions:{
     column: {
        // stacking: 'normal',
  }
}
};
}());



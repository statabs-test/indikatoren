(function(){
    return {
  plotOptions: {
        series: {
        	pointPadding: 0,
        	"stacking": "normal",
        	 "borderWidth": 0,
             //groupPadding: 0,
        },
      },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	"type": "category",
   "tickInterval": 10,
          "labels": {
          	step: 1,
            //"rotation": 0,
            //"rotation": -90,
        }  
  },
  "legend": { 
     y: 45,
    "enabled": true,
    "layout": "horizontal",
   "itemWidth": 1000,
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    
  },
},
 "series": [
  {"color": "#923F8D", "index": 0, "legendIndex":0}, /**/
  {"color": "#FABD24", "index": 1, "legendIndex":1}, /**/
  {"color": "#73ba7c", "index": 2, "legendIndex":2}, /**/
      {
	  "color": "#999999",
	  //"index": 0,
      "legendIndex": 3,
      "type": "column",
      stacking: false,
      "borderWidth": 0,

    }, // grau
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  },
  "chart": {
  	type: "column",
    "inverted": false,
        "width": 1500,
  }
};
}());






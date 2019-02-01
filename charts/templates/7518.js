(function(){
    return {
"plotOptions": {
    "series": {
      //pointPadding: 100,
      borderWidth: 0,
      //"pointWidth": 30,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1,
  },  
  "yAxis": {
      tickAmount: 6,
  	 //max: 120000,
     //tickInterval: 60000,
    "labels": {
      "format": "{value:,.0f}",
    },
	"max": undefined
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": 'rgb(220, 68, 14)', "index": 1, legendIndex: 0}, /*rot */
  {"color": 'rgb(168, 196, 203)', "index": 0, legendIndex: 1}, /*dunkelblau */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} </span> (Marktanteil: {point.percentage:,.1f}%) </b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
}
}());

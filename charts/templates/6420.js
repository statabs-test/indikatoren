(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 20,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
  	min: 0,
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
  	 //max: 120000,
     //tickInterval: 60000,
     //max: 750,
     tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    itemDistance: 5, 
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#71a3b5", index: 9, legendIndex: 0},  
  {"color": "#b00000", index: 8, legendIndex: 1}, 
  {"color": "#73ba7c", index: 7, legendIndex: 2}, 
  {"color": "#672773", index: 6, legendIndex: 3}, 
  {"color": "rgb(12,128,128)", index: 5, legendIndex: 4},
  {"color": "#ff8028", index: 4, legendIndex: 5},
],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  //"footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   //"shared": true
  },
}
}());

(function(){
  return {
 "chart": {
  "type": "area",
 },
plotOptions: {
      /*series: {
        "stacking": "normal",
    pointPadding: 0,
          borderWidth: 0,
          pointWidth: 10, 

      }*/
       area: {
          stacking: 'normal',
          //lineColor: '#666666',
          lineWidth: 0,

      }
},
"yAxis": {
  "labels": {
    "format": "{value:,.0f}",
  }
},
"xAxis": {
  "type": "category",
  //tickInterval: 17,
},
"legend": {
  "enabled": true,
  "layout": "horizontal",
  "verticalAlign": "top",
  "align": "left",
  //"y": 40,
   //itemWidth: 100,
   labelFormatter: function(){
    //only return last word
    return this.name.split(" ").slice(-1);
  },
  "itemMarginBottom": 5,
  "itemStyle": {
  "fontWeight": "normal"
  }
},
"series": [
  {
    color: '#689199', index: 1, legendIndex:1,
  },
  {
    color: '#DC440E', index: 2,legendIndex:2,
  },
  {
    color: '#A8C3CA', index: 3,legendIndex:3,
  },
  {
    color: '#B00000', index: 4,legendIndex:4,
  },
  {
    color: '#D3E2E4', index: 5,legendIndex:5,
  }
],  
   tooltip: {
       pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} ({point.percentage:.1f}%)</b><br/>'
   }, 
};
}());


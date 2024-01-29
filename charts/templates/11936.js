(function(){
  return {
    "plotOptions": {
        column: {
            stacking: 'normal'
        },
      "series": {  
          pointPadding: 0,
          borderWidth: 0,
          //pointWidth: 10, 
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        }
      },
    },
    "xAxis": {
    },
    "yAxis": {
       reversedStacks: false, 
        tickAmount: 8
    },
    "series": [
      {
          color: 'rgb(176, 0, 0)'
      },
      {
          
          color: 'rgb(105, 146, 155)'
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemWidth": 180, 
      "itemMarginBottom": 5,
      //"y": 35,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {      
      "type": "column"
    },
tooltip: {
         //headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
         pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
         footerFormat: '<span style="color: black">\u25CF</span> Total: <b>{point.total:,.0f}</b>'
          }
};
}());







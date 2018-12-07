(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },

  "xAxis": {
    "type": "category"
  },
  "yAxis": {
    tickInterval: 2000,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#E7CEE2"},
  {"color": "#B375AB"}, 
  {"color": "#923F8D"},  
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    widht: 320,
    symbolPadding: 1,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 
(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 25,
      "dataLabels": {
        "style": {
          "fontSize": 10
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
    tickInterval: 1000,
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:,.1f}%)<br/>',
    footerFormat: '<span style="color: black">\u25CF</span> Total: <b>{point.total:,.0f}</b>',
    shared: false
},
  /*
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },*/  
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    itemWidth: 200,
width: 400,
itemStyle: {
textOverflow: "none",
whiteSpace: "nowrap"
}
  },
  "series": [
    {"color": "#662673", index: 9, legendIndex: 0}, /**/
    {"color": "#B375AB", index: 8, legendIndex: 1}, /**/
    {"color": "#FFBB58", index: 7, legendIndex: 2},
    {"color": "#A8C3CA", index: 6, legendIndex: 3}, /**/
    {"color": "#8A8A8A", index: 10, legendIndex: 0}
    
  ],
  "chart": {    
    "type": "column"
  }
	}
}());
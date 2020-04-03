(function () {
  return {
    "xAxis": {
      tickInterval: 1,
      labels: {
        rotation: -45
      },
    },
    "yAxis": {
      tickAmount: 6,
      "labels": {
        //"format": "{value:,.3f}",
        "formatter": function () {
          return Highcharts.numberFormat((this.value * 100), 1) + '%';
        },
      }
    },
    "series": [
      {
        "color": "#3C3C3C",
        legendIndex: 2,
      }, 
      {
        "color": "#68AB2B",
        legendIndex: 0,
      }, 
      {
        "color": "#008AC3",
        legendIndex: 1,
      }, 
    ],
    "legend": {
      "enabled": true,
      alignColumns: false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      itemDistance: 15
    },
  }
}());

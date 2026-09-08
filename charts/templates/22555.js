(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column",
      spacingBottom: 45,
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      reversed: false,
    },
    "series": [
      { "color": "#0091f7" }, 
      { "color": "#999999" }, 
    ],
    /*"tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    },*/
  }
}());

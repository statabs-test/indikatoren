(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": 0
      }
    },
    "yAxis": {
      max: 25,
      tickAmount: 6,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#474747" },
      { "color": "#FF8028" },
      { "color": "#FABD24" },
      { "color": "#923F8D" },
      { "color": "#990300" }
    ],
    "legend": {
      itemWidth: 97,
      itemDistance: 0,
      symbolPadding: 3,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal",
        textOverflow: 'none'
      }
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "inverted": false
    }
  }
}());
(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    tooltip: {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>'
    },
    series: [
      {
        color: "#2e1435",
        visible: false,
        legendIndex: 3,
      },
      {
        "color": "#923f8d",
        legendIndex: 1,
      },
      {
        "color": "#e7cee2",
        legendIndex: 2,
      },
    ],
    legend: {
      itemWidth: 300,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    plotOptions: {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
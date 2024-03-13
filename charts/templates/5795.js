(function () {
  return {
    "chart": {
      "type": "line",
      "inverted": false,
      "spacingBottom": 40
    },
    plotOptions: {
      series: {
        "pointWidth": 30,
      }
    },
    "xAxis": {
      "type": "category",
    },
    "yAxis": {
      "max": 100,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "series": [
      { "color": "#990300" }, /* rot*/
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "x": 35,
      //"y": 35,    
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      "shared": false
    },
  }
}());
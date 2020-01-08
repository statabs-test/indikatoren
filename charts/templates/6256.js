(function () {
  return {
    "xAxis": {
      "tickInterval": 3
    },
    "yAxis": {
      tickInterval: 20
    },
    "series": [
      {
        "color": "#B00000",
      }, /* dunkelrot */
      {
        "color": "#007A2F",
      }, /* dunkelgrün */
      {
        "color": "#4f81bd",
      }, /* dunkelblau */
      {
        "color": "#662673",
      }, /* dunkelviolett */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
      }
    }
  }
}());

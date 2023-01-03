(function () {
  return {
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    "xAxis": {
      "tickInterval": 1,
    },
    yAxis: {
      min: null
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    "series": [
      { "color": "#B00000" }, /* dunkelrot */
      { "color": "#4f81bd" }, //dunkelblau 
      {
        "color": "#B00000",
        dashStyle: 'ShortDash',
      }, /* dunkelrot */
      {
        "color": "#4f81bd",
        dashStyle: 'ShortDash',
      }, //dunkelblau 
    ],
  }
}());

(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
    },
    "yAxis": {
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>'
    },
    "series": [
      {
        "color": "#008AC3",
      }, /* dunkelrot */
      /* dunkelgrün */
    ],
    "legend": {
      "enabled": false,
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());

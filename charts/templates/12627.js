(function () {
  return {
    "yAxis": {
      tickInterval:0.5,
      max:2.5,
      "labels": {
        "format": "{value:,.1f}%",
      }
    },
    "xAxis": {
      "tickInterval": 2
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#83522E"
      }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
    }
  }
}());

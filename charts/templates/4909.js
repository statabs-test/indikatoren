(function () {
  return {
    chart: {
      spacingBottom: 40
    },
    title:{
      margin: 30
    },
    "yAxis": {
      "min": 0,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "xAxis": {
      "tickInterval": 5
    },
    tooltip: {
      valueDecimals: 1,
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#000000"
      }
    ],
  };
}());
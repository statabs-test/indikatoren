(function () {
  return {
    "chart": {
      "type": "column",
    },
    "plotOptions": {
      "series": {
        "stacking": "normal"
      }
    },
    xAxis:{
      tickInterval: 1
    },
    yAxis: {
      tickAmount: 8
    },
    "legend": {
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 3,
    },
    "series": [
      { "color": "#923f8d", "index": 0, "legendIndex": 0 }, /*grün dunkel2*/
      { "color": "#b375ab", "index": 1, "legendIndex": 2 }, /*grün mittel*/
    ],
  }
}());

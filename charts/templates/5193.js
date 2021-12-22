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
    "legend": {
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.1f}</b>',
    },
    "series": [
      { "color": "#923f8d", "index": 0, "legendIndex": 0 }, /*grün dunkel2*/
      { "color": "#b375ab", "index": 1, "legendIndex": 2 }, /*grün mittel*/
    ],
  }
}());

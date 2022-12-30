(function () {
  return {
    "yAxis": [{
      "labels": {
        "format": "{value:,.f}",
        "style": {
          "color": "#000000"
        }
      },
      "min": -2.5,
      "max": 10,
      tickAmount: 6,
      "title": ""
    },

    ],
    "xAxis": {
      "tickInterval": 2,
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#008AC3",
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
        },
      },
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        dashStyle: 'ShortDash',
        "color": "#999999",
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
        },

      }
    ],

    "legend": {
      "enabled": true,
      //"x": 25,
      //"y": 55,
      //"itemWidth": 150,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
    },
  }
}());


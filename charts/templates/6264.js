(function () {
  return {
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      "min": undefined,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 100, 
        width: 2 
      }]
    },
    "series": [
      {
        "color": "#b00000 ",
      }, /* rot */
      {
        "color": "#672773",
      },/* blau  */
    ],
    "legend": {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
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

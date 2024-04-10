(function () {
  return {
    "chart": {
      "type": "line",
      spacingBottom: 45,
    },
    "yAxis": [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          "style": {
            "color": "#000000",
            "fontSize": null
          },
          "text": null
        },
        "labels": {
          "format": "{value:,.0f}",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          "style": {
            "color": "#000000",
            "fontSize": null
          },
          "text": null
        },
        "labels": {
          "format": "{value:,.1f}%",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0,
        "opposite": true
      }
    ],
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    "series": [
      {
        "color": "#923f8d",
        "index": 0,
        "type": "column"
      },
      {
        "color": "#cd9c00",
        "index": 1,
        "type": "line",
        "yAxis": 1,
        tooltip: {
          valueDecimals: 1
        },
        marker: {
          enabled: false
        }
      }
    ],
    "tooltip": {
      "shared": false
    },
  }
}());

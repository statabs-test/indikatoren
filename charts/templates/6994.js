(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    "series": [
      { "color": "#A8C3CA" },
      {
        "color": "#9A86A6",
        "visible": false
      },
      {
        "color": "#FABD24",
        "visible": false
      },
      {
        "color": "#68AB2B",
        "visible": false
      },
      {
        "color": "#9E7C59",
        "visible": false
      },
      {
        "color": "#9E7C59",
        "visible": false
      },
      {
        "color": "#689199",
        "visible": false,
      },
      {
        "color": "#FF8028",
        "visible": false,
      },
      {
        "color": "#662673",
        "visible": false,
      },
      { "color": "#8B2223" },

    ],
    "legend": {
      "enabled": true,
      //"y": 45,
      //  itemWidth: 72,
      itemDistance: 18,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
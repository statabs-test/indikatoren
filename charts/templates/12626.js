(function () {
  return {
    subtitle: {
      useHTML: true
    },
    xAxis: {
      tickInterval: 1
    },
    "yAxis": {
      min:30,
      max:45,
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      useHTML: true,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f} m<sup>2</sup></b><br/>'
    },
    "series": [
      {
        "color": "#3c3c3c",
        "dashStyle": "ShortDash"
      },
      {
        "color": "#9E7C59"
      },
      {
        "color": "#FF8028"
      },
      {
        "color": "#923F8D"
      },
      {
        "color": "#689199"
      },
      {
        "color": "#FABD24",
        visible: true,
      },
    ],
    "legend": {
      "enabled": true,
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
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());

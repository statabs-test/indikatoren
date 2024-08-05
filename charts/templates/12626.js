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
        "color": "#cd9c00"
      },
      {
        "color": "#689199"
      },
      {
        "color": "#662673"
      },
      {
        "color": "#999"
      },
      {
        "color": "#b375ab",
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

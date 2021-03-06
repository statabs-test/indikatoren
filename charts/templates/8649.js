(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab"
      },
      {
        "color": "#7f5f1a",
      },
      {
        "color": "#923f8d",
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      labelFormatter: function () {
        return this.name.replace('Kleinhüningen','Kleinh.');
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

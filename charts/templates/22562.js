(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column"
    },
    "plotOptions": {
      "series": {
        "borderWidth": 0,
        "pointWidth": 10
      }
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f} kg",
      },
    },
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "align": "left",
      "verticalAlign": "top"
    },
    "series": [
      {
        "index": 2,
        "color": "#0091f7",
        "type": "column",
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} kg</b><br/>',
        }
      }
    ],

  }
}());

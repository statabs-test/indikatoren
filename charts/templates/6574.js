(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": false,
      "spacingBottom": 40
    },
    plotOptions: {
      series: {
        //        pointPadding: 0,
        //        itemWidth: 10,
      }
    },
    "xAxis": {
      type: "category"
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      },
      "min": 0,
      "max": 100,
    },
    "series": [
      { "color": "#672773" }, /* hellbraun*/
      { "color": "#fabd24" }, /* dunkelbraun */
      { "color": "#73ba7c" }, /* dunkelbraun */
      { "color": "#b475ab" } /* dunkelbraun */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
      "shared": false
    }
  }
}());
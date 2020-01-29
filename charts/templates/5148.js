
/*global Highcharts*/
(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": false,
      "spacingBottom": 40
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    "xAxis": {
      tickInterval: 1,
    },
    "yAxis": {
      //"max": 1000,
      min: -500,
      tickInterval: 250,
      plotLines: [{
        color: '#B9CFD7',
        value: 0,
        width: 1
      }]
    },
    "series": [
      { "color": "#FABD24" }, /* gelb*/
      { "color": "#923F8D" }, /* violett*/
      { "color": "#000000", type: 'line' } /* grau */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left"
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    }
  }
}());
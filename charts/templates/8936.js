(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": true, /* false */
      "marginLeft": 190,
      //"marginBottom": 55,
      "marginRight": 10,
      width: 665,
    },
    "data": {
      "switchRowsAndColumns": true
    },
    "plotOptions": {
      "series": {
        pointPadding: 0,
        groupPadding: 0.1,
        borderWidth: 0
      }
    },
    "xAxis": {
      "type": "category",
    },
    "yAxis": {
      min: 0,
      max: 45,
      tickInterval: 5,
      "labels": {
        "format": "{value}%",
        y: 13
      }
    },
    "series": [
      { "color": "#661200", "visible": true }, //2000
      //{"color": "#ffbb58", "visible": false},
      //{"color": "#246370", "visible": false},
      //{"color": "#cd9c00", "visible": false},
      //{"color": "#e7cee2", "visible": false},
      { "color": "#b00000", "visible": true }, //2010
      //{"color": "#d3e2e4", "visible": false},
      //{"color": "#083038", "visible": false},
      //{"color": "#fabd24", "visible": false},
      //{"color": "#b375ab", "visible": false},
      { "color": "#ff8028", "visible": true }, //2017
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"x": 155,
      //"y": 30,   
      //"itemWidth": 60,
      itemDistance: 5,
      symbolPadding: 1,
      padding: 0,
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
      shared: false
    }
  }
}());


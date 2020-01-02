(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": true
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
    "xAxis": {
      "type": "category",
      reversed: false,
      "labels": {
        "formatter": function () {
          return this.value.replace("Erziehungsfragen oder -probleme", "Erziehungsfragen<br>oder -probleme")
        },
        style: {
          fontSize: '9px'
        }
      }
    },
    "yAxis": {
      tickInterval: 10,
      "labels": {
        y: 10,
        "format": "{value}%"
      }
    },
    "series": [
      {
        "color": "#FABD24",
        "index": 2

      },
      {
        "color": "#007A2F",
        "index": 1
      },
      {
        "color": "#73B97C",
        "index": 0
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "right",
      reversed: true,
      //"x": 15,
      itemDistance: 5
      //"y": 65
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
      shared: false
    }
  }
}());

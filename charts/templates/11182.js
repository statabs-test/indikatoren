(function () {
  return {
    "yAxis": {
      tickAmount: 7,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '';
        }
      },

    },
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      itemDistance: 8,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    },

    "series": [
      {
        "index": 0,
        color: "#ed802f"
      },
      {
        "index": 1,
        color: "#7a3050"
      },
      {
        "index": 1,
        color: "#ed3f7a",
      }
    ],
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Tage' + '</b><br/><b>'
      },
      "shared": false
    },
    "chart": {
      //"marginTop": 120
    },
    "plotOptions": {
      "series": {
        "marker": {
          "enabled": false,
          "symbol": "circle"
        },
        /*
        "dataLabels": {
          "enabled": true,
          formatter: function () {
            return Highcharts.numberFormat(this.y, 2);
          },
          style: {
            fontSize: "9px"
          }
        }
        */
      }
    }
  }
}());

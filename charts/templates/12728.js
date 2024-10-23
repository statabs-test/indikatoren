(function () {
  return {
    "yAxis": {
      min: 0,
      max: 10,
      //  tickAmount: 13,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '';
        }
      },

    },
    "xAxis": {
      type: "category",
      tickInterval: 1
    },
    legend: {
      itemDistance: 8,
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left"
    },

    "series": [
      {
        index: 0,
        color: "#b30000",
        lineWidth: 3
      },
      {
        index: 1,
        color: "#8a0000",
        lineWidth: 3
      },
      {
        index: 1,
        color: "#ff2e2e",
        lineWidth: 3
      },
      {
        index: 1,
        color: "#00b800"
      },
      {
        "index": 1,
        color: "#008a00"
      },
      {
        "index": 1,
        color: "#006100"
      }
    ],
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '</b><br/><b>'
      },
      "shared": false
    },
    "chart": {
    },
    "plotOptions": {
      "series": {
        "marker": {
          "enabled": false,
          "symbol": "circle"
        },
        "dataLabels": {
          "enabled": false
        }
      }
    }
  }
}());

(function () {
  return {
    yAxis: [{
      labels: {
        formatter: function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
        },
        style: {
          color: "black"
        }
      },
      opposite: true,
//      tickAmount: 7,
      min: 0,
      //  max: 100,
      title: {
        text: "", // Beschriftung rechte Achse
      },
    },
    {
      labels: {
        formatter: function () {
          return Highcharts.numberFormat(this.value, 0);
        },
        style: {
          color: "black"
        }
      },
      tickAmount: 7,
      min: 0,
      title: {
        text: "",
      }
    }],

    xAxis: {
      tickInterval: 1
    },
    "legend": {
      itemDistance: 8,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      reversed: "TRUE",
      labelFormatter: function () {
        if (this.index === 0) {
          return 'Auslastung (rechte Skala)';
        } else {
          return this.name;
        }
      }
    },

    "series": [
      {
        index: 0,
        color: "#0a3b19",
        yAxis: 0,
      },
      {
        index: 1,
        color: "#68ab2b",
        yAxis: 1,
      },
      {
        index: 1,
        color: "#007a2f",
        yAxis: 1,
      }
    ],
    "tooltip": {
      "pointFormatter": function () {
        if (this.series.yAxis.userOptions.opposite) {
          return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1) + '%' + '</b><br/><b>';
        } else {
          return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 0) + '</b><br/><b>';
        }
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

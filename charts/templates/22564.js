(function () {
  return {
    chart: {
      type: "column",
      inverted: false
    },
    xAxis: {
      type: "category",
      tickInterval: 1
    },
    legend: {
      "enabled": true,
      verticalAlign: "top",
      align: "left"
    },
    series: [
      {
        index: 0,
        color: "#0091f7",
        "tooltip": {
          "pointFormatter": function () {
            var tooltip = '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
            var errorBarPoint = this.series.chart.series[1].points[this.index]; // Find the corresponding error bar point
            return tooltip + ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((errorBarPoint.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((errorBarPoint.high), 1) + '%</b>)';
          }
        }
      }, /*Männer*/
      {
        "index": 1,
        "type": "errorbar",
        color: "#005ea1",
        "tooltip": {
          "pointFormatter": function () {
            var parent = this.series.chart.series[0];
            parent.setState('hover'); //"aktiviere" alle series
            var tooltip = '<span style="color:' + parent.color + '">\u25CF</span> ' + parent.name + ': <b>' + Highcharts.numberFormat((parent.points[this.index].y), 1) + '%</b>';
            var errorBarPoint = this.series.points[this.index]; // Find the corresponding error bar point
            return tooltip + ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((errorBarPoint.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((errorBarPoint.high), 1) + '%</b>)';
          },
        }
      },
      {
        index: 2,
        "color": "#8ccefb",
        "tooltip": {
          "pointFormatter": function () {
            var tooltip = '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
            var errorBarPoint = this.series.chart.series[3].points[this.index]; // Find the corresponding error bar point
            return tooltip + ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((errorBarPoint.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((errorBarPoint.high), 1) + '%</b>)';
          }
        }
      }, /*Frauen*/
      {
        "index": 3,
        "type": "errorbar",
        color: "#0091f7",
        "tooltip": {
          "pointFormatter": function () {
            var parent = this.series.chart.series[2];
            parent.setState('hover'); //"aktiviere" alle series
            var tooltip = '<span style="color:' + parent.color + '">\u25CF</span> ' + parent.name + ': <b>' + Highcharts.numberFormat((parent.points[this.index].y), 1) + '%</b>';
            var errorBarPoint = this.series.points[this.index]; // Find the corresponding error bar point
            return tooltip + ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((errorBarPoint.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((errorBarPoint.high), 1) + '%</b>)';
          },
        }
      },
    ],
  }
}());

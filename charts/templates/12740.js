(function () {
  return {
    yAxis: {
      max: 0.1,
      min: -0.1,
      labels: {
        format: '{value}',
        formatter: function () {
          return Highcharts.numberFormat((this.value * 100), 0) + '%';
        },
      },
    },
    xAxis: {
      type: "category",
      tickInterval: 1
    },
    tooltip: {
      pointFormatter: function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + 'Veränderung des Kantonsanteil' + ': <b>' + Highcharts.numberFormat(this.y * 100, 1) + '%' + '</b><br/><b>';
      }
    },
    series: [
      {
        type: "column",
        color: "#7a3051"
      }
    ],
  }
}());

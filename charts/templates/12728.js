(function () {
  return {
    yAxis: {
      min: 3,
      max:8,
      tickAmount: 6,
      labels: {
        formatter: function () {
          return Highcharts.numberFormat((this.value), 0) + '';
        }
      },

    },
    xAxis: {
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

    series: [
      {
        index: 0,
        color: "#5D3FD3",     // DCH
        lineWidth: 3
      },
      {
        index: 1,
        color: "#301934",     // NWCH
        lineWidth: 3
      },
      {
        index: 1,
        color: "#CF9FFF",     // Kanton BS
        lineWidth: 3
      },
      {
        index: 1,
        color: "#FFD700"      // Stadt Basel
      },
      {
        index: 1,
        color: "#ffc40c"      // Riehen
      },
      {
        index: 1,
        color: "#8B8000"      // Bettingen
      }
    ],
    tooltip: {
      pointFormatter: function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '</b><br/><b>'
      },
      shared: false
    },
    chart: {
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
          symbol: "circle"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  }
}());

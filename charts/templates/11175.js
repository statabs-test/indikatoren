(function () {
  return {
    yAxis: [
      {
        title: {
          text: "",
        },
        labels: {
          formatter: function () {
            return Highcharts.numberFormat(this.value, 0);
          },
          style: {
            color: "black",
          },
        },
        tickAmount: 7,
        min: 0,
      },
      {
        title: {
          text: "",
        },
        labels: {
          formatter: function () {
            return Highcharts.numberFormat(this.value, 0);
          },
          style: {
            color: "black",
          },
        },
        opposite: true,
        tickAmount: 7,
        min: 0,
      },
    ],
    xAxis: {
      tickInterval: 1,
    },
    legend: {
      itemDistance: 8,
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left",
    },
    series: [
      {
        index: 0,
        color: "#008AC3",
        yAxis: 0, // Linke Achse
      },
      {
        index: 1,
        color: "#990300",
        yAxis: 1, // Rechte Achse
      },
    ],
    tooltip: {
      pointFormatter: function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 0) + '</b><br/><b>';
      },
      shared: false,
    },
    chart: {
      // Weitere Chart-Konfigurationen
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
          symbol: "circle",
        },
        dataLabels: {
          enabled: false,
        },
      },
    },
  };
})();

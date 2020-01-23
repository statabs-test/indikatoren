(function () {
  return {
    chart: {
      type: "column",
      marginBottom: 35,
      inverted: false,
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    xAxis: {
      labels: {
        rotation: 0
      }
    },
    yAxis: {
      tickAmount: 5,
      labels: {
        "format": "{value:,.0f}%"
      }
    },
    series: [
      { color: "rgb(147,63,141)" },
      { color: "rgb(180,117,171)" },
      { color: "rgb(250,189,36)" },
      { color: "rgb(250,218,128)" },
      { color: "#008AC3" }
    ],
    legend: {
      itemDistance: 10,
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemStyle: {
        fontWeight: "normal"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    },
  }
}());

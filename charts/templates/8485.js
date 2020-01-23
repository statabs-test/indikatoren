(function () {
  return {
    chart: {
      type: "column",
      inverted: false,
      marginBottom: 35
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        rotation: 0
      }
    },
    yAxis: {
      tickAmount: 6,
      labels: {
        "format": "{value:,.0f}%"
      }
    },
    series: [
      { color: "rgb(147,63,141)" },
      { color: "rgb(180,117,171)" },
      { color: "rgb(250,189,36)" },
      { color: "rgb(250,218,128)" }
      //{ color: "#008AC3" }
    ],
    legend: {
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
    }
  }
}());

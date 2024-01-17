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
      { color: "#73B97C" },
      { color: "#68AB2B" },
      { color: "#007A2F" },
      { color: "#A8C3CA" },
      { color: "#71A3B5" },
      { color: "#689199" },
      { color: "#0F7399" },
      { color: "#246370" },
      { color: "#083038" } 
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

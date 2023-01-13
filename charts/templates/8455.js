(function () {
  return {
    chart:{
      type: "line"
    },
    subtitle: {
      useHTML: true
    },
    legend: {
      enabled: true,
      align: "left",
      verticalAlign: "top",
      layout: "horizontal",
    },
    yAxis: {
      tickInterval: 10
    },
    xAxis: {
      tickInterval: 1,
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b> Einwohner/ha<br/>',
      shared: false
    },
    series: [
      {"color": "#672773"},
      {"color": "#007a2f"},
      {"color": "#fabd24"},
      {"color": "#ff8028"},
      {"color": "#b475ab", visible: false},
      {"color": "#71a3b5", visible: false},
    ],
  };
}());


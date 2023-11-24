(function () {
  return {
    chart: {
      type: "column",
      //type: "area",
    },
    plotOptions: {
      //area: {
      column: {
        stacking: 'normal',
        //lineWidth: 0,
        borderWidth: 0,
      },
      line: {
        lineWidth: 3,
      }
    },
    series: [
      { "color": "#fabd24" }, // Kanton/Gemeinde: Ergänzungsleistungen
      { "color": "#ffda80" }, // Kanton/Gemeinde: Restfinanzierung
      { "color": "#246370" }, // Krankenversicherer
      { "color": "#68ab2b" }, // Eigenbetrag Pflege
      { "color": "#007a2f" }, // Eigenbetrag Pension und Betreuung
      {
        type: 'line',
        "color": "black",
        visible: true,
        lineWidth: 2,
      },
    ],
    xAxis: {
      tickInterval: 1,
    },
    yAxis: {
      reversedStacks: false,
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
    },
    "legend": {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      reversed: false,
    }
  };
}());

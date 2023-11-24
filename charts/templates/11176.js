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
      { "color": "#00441B" }, // Ergänzungsleistungen
      { "color": "#006D2C" }, // Restfinanzierung
      { "color": "#238B45" }, // Krankenversicherer
      { "color": "#35978F" }, // Eigenbetrag Pflege
      { "color": "#80CDC1" }, // Eigenbetrag Pension und Betreuung
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
      reversedStacks: true,
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

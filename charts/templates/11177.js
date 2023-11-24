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
      { "color": "#a1c436" }, // Kanton/Gemeinde
      { "color": "#1f5647" }, // Krankenversicherer
      { "color": "#009984" }, // Tagesgäste
      {
        type: "line",
        color: "#010101",
        lineWidth: 3,
        //     yAxis: 1,

      }
    ],
    xAxis: {
      tickInterval: 1,
    },
    yAxis: [
      {
        min: 0,
        title: {
          text: " ",
          //        useHTML: true,
        },
        reversedStacks: false,
      },
      /*    {
            opposite: true,
            min: 0,
            title:{
              text: "",
            }
          },
      */
    ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
    }
  };
}());

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
      { "color": "#007a2f" }, // dunkelgrün
      { "color": "#68ab2b" }, // grün
      { "color": "#ffbb58" }, // Hellorange
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

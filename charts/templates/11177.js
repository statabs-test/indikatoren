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
      { "color": "#fabd24" }, // Kanton/Gemeinde
      { "color": "#246370" }, // Krankenversicherer
      { "color": "#68ab2b" }, // Tagesgäste
      /*
          {
            type: "line",
            color: "#010101",
            lineWidth: 3,
            //     yAxis: 1,
    
          }
    */
    ],
    xAxis: {
      tickInterval: 1,
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} Mio. CHF</b> ({point.percentage:,.1f}%)<br/>',
      footerFormat: 'Total: <b>{point.total:,.1f} Mio. CHF</b>',
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

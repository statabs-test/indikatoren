(function () {
  return {
    chart: {
      type: "column",
    },
    plotOptions: {
      //area: {
      column: {
        stacking: 'normal',
      },
      line: {
        lineWidth: 3,
      }
    },
    series: [
      {
        "color": "#b00000",
        legendIndex: 2,
      },
      {
        "color": "#ff8028",
        legendIndex: 1,
      },
      {
        type: 'line',
        color: '#083038',
        visible: true,
        lineWidth: 3,
        legendIndex: 3,
      }
    ],
    xAxis: {
      // type: "category"
    },
    yAxis: {
      reversedStacks: true,
    },
    legend: {
      //    itemWidth: 150,
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 4,
      align: "left",
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      reversed: false,
    }
  };
}());

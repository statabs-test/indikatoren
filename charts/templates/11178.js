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
        borderWidth:0,
      },
      line: {
        lineWidth: 3,
      }
    },
    series: [
      {
        "color": "#a1c436",
        legendIndex: 1,
      },
      {
        "color": "#1f5647",
        legendIndex: 2,
      },
      {
        "color": "#009984",
        legendIndex: 3,
      },
      {
        type: 'line',
        color: '#010101',
        visible: true,
        lineWidth: 3,
        legendIndex: 4,
      }
    ],
    xAxis: {
      type: "category"
    },
    yAxis: {
      reversedStacks: false,
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

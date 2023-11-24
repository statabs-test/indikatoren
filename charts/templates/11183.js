(function () {
  return {
    chart: {
      type: "column",
    },
    plotOptions: {
      series: {
        dataLabels: {
          style: {
            fontSize: "10px"
          }
        },
        stacking: "normal",
        borderWidth: 0,
      }
    },
    series: [
      {
        "color": "#ed3f7a",
        legendIndex: 2,
      },
      {
        "color": "#ed802f",
        legendIndex: 1,
      },
      {
        type: 'line',
        color: '#010101',
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

    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
    },

    legend: {
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

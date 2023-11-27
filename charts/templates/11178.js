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
      {
        "color": "#fabd24",
        legendIndex: 1,
      },
      {
        "color": "#246370",
        legendIndex: 2,
      },
      {
        "color": "#68ab2b",
        legendIndex: 3,
      },
      /*
      {
        type: 'line',
        color: '#010101',
        visible: true,
        lineWidth: 3,
        legendIndex: 4,
      }
      */
    ],
    xAxis: {
      type: "category"
    },
    yAxis: {
      reversedStacks: false,
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} Mio. CHF</b> ({point.percentage:,.1f}%)<br/>',
      footerFormat: 'Total: <b>{point.total:,.1f} Mio. CHF</b>',
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
      reversed: true,
    }
  };
}());

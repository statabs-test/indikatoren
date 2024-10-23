(function () {
  return {
    chart: {
      type: "column",
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
      },
    },
    yAxis: [
      {
        min: 0,
        max: 1,
        //        tickAmount: 5,
        labels: {
          format: '{value:.0f}',
          "formatter": function () {
            return Highcharts.numberFormat((this.value * 100), 0) + '%';
          },
          style: {
            color: "black",
          },
        },
        title: {
          text: "", // Beschriftung linke Achse
        },
      },
    ],
    xAxis: {
      type: "category",
      //      tickInterval: 1,
      //      endOnTick: false,
      //      startOnTick: false,
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: '<span style="font-size: 10px"> {point.key} </span> <table>',
      //      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}: &nbsp;</td>'
      //        + '<td style="text-align:right">&nbsp;<b>{point.y:.1f}%</b></td></tr>',
      pointFormatter: function () {
        return '<tr><td><span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': &nbsp;</td>'
          + '<td style="text-align:right">&nbsp;<b>' + (this.y * 100).toFixed(1) + '%</b></td></tr>';
      },
      footerFormat: '</table>',
    },
    legend: {
      itemWidth: 150,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      alignColumns: false,
      itemDistance: 10
    },
    series: [
      {
        color: '#68ab2b', index: 4,
        legendIndex: 1,
      },
      {
        color: '#ffda80', index: 3,
        legendIndex: 2,
      },
      {
        color: '#7f5f1a', index: 2,
        legendIndex: 3,
      },
      {
        color: '#6d277b', index: 1,
        legendIndex: 4,
      },
    ],
  };
})();

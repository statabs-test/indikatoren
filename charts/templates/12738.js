(function () {
  return {
    chart: {
      type: "column",
    },
    plotOptions: {
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
      { "color": "#f6aebe" }, 
      { "color": "#ed802f" }, 
      { "color": "#ec3f7a" },
      { "color": "#a64f2b" },
      { "color": "#f8b11e" },
      { "color": "#7a3051" },
    ],
    xAxis: {
//      tickInterval: 1,
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: '<span style="font-size: 10px"> {point.x} </span><table>',
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:&nbsp;</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.1f} Mio. CHF</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.1f} Mio. CHF</b></td><td></td></tr></table>',
    },
    yAxis: [
      {
        min: 0,
        title: {
          text: " ",
          //        useHTML: true,
        },
        reversedStacks: true,
      },
    ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      reversed: false,
    }
  };
}());

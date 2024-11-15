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
        //        max: 1,
        //        tickAmount: 5,
        labels: {
          format: '{value:.0f}',
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
//      type: "category",
    },
    tooltip: {
      shared: true,
      useHTML: true,
      followPointer: true,
      formatter: function () {
        let header = `<span style="font-size: 10px"> ${this.x} </span><table>`;
        let body = this.points
          .filter(point => point.series.index !== 3) // Reihe mit Index 3 ignorieren
          .map(point => `<tr><td><span style="color:${point.color}">\u25CF</span> ${point.series.name}: &nbsp;</td>
            <td style="text-align:right">&nbsp;<b>${Highcharts.numberFormat(point.y, 0)} Plätze</b></td>
            <td style="text-align:right">&nbsp;(${Highcharts.numberFormat(point.percentage, 1)}%)</td></tr>`)
          .join('');
        let footer = `<tr><td>Total: </td><td><b>${Highcharts.numberFormat(this.points[0].total, 0)} Plätze</b></td><td></td></tr></table>`;
        return header + body + footer;
      },
    },
    /*
          headerFormat: '<span style="font-size: 10px"> {point.key} </span><table>',
          pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}: &nbsp;</td>'
            + '<td style="text-align:right">&nbsp;<b>{point.y:,.0f} Plätze</b></td>'
            + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
          footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.0f} Plätze</b></td><td></td></tr></table>',
        },
    */
    legend: {
      itemWidth: 200,
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
        color: '#68ab2b',
      },
      {
        color: '#ffda80',
      },
      {
        color: '#7f5f1a',
      },
      {
        type: 'line',
        color: '#010101',
        visible: true,
      },
    ],
  };
})();

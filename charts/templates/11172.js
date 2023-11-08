(function() {
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
      },
      line: {
        lineWidth: 3,
      }
    },
    yAxis: [
      {
        min: 0,
        max: 100,
        labels: {
          format: '{value:.0f}%',
          style: {
            color: "black",
          },
        },
        title: {
          text: "", // Beschriftung linke Achse
        },
      },
      {
        labels: {
          format: '{value:.1f}', // Eine Kommastelle für die rechte Achse
          style: {
            color: "black"
          }
        },
        opposite: true, // Rechte Achse aktivieren
        min: 0,
        //max: 10,
        title: {
          text: "", // Beschriftung rechte Achse
        },
      },
    ],
    xAxis: {
      tickInterval: 1,
      endOnTick: false,
      startOnTick: false,
    },
    tooltip: {
      pointFormatter: function(){
        if (this.series.yAxis.userOptions.opposite) {
          return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1) + '</b><br/><b>';
        } else {
          return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1) + '%' + '</b><br/><b>';
        }
      },
       "shared": false
     },
    legend: {
      itemWidth: 75,
      //width: 220,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      alignColumns: false,
      itemDistance: 10,
    },
    series: [
      {
        color: '#45381d', index: 12, legendIndex: 1,
      },
      {
        color: '#7f5f1a', index: 11, legendIndex: 2,
      },
      {
        color: '#fabd24', index: 10, legendIndex: 3,
      },
      {
        color: '#e7cee2', index: 9, legendIndex: 4,
      },
      {
        color: '#b375ab', index: 8, legendIndex: 5,
      },
      {
        color: '#662673', index: 7, legendIndex: 6,
      },
      {
        color: '#2e1435', index: 6, legendIndex: 7,
      },
      {
        color: '#246370', index: 5, legendIndex: 8,
      },
      {
        color: '#a8c3ca', index: 4, legendIndex: 9,
      },
      {
        color: '#dc440e', index: 3, legendIndex: 10,
      },
      {
        color: '#73b97c', index: 2, legendIndex: 11,
      },
      {
        color: '#007a2f', index: 1, legendIndex: 12,
      },
      {
        type: 'line', 
        color: '#010101',
        yAxis: 1,  //Diagrammtyp für durchschnittliche Pflegestufe auf rechter Achse
        legendIndex: 13,
      },
    ],
  };
})();

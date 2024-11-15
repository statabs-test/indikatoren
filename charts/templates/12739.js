(function () {
  return {
    xAxis: {
      type: "category",
      tickInterval: 1
    },
    yAxis: [
      {
        title: {
          text: "",
          color: "black"
        },
        opposite: false
      },
      {
        max: 0.2,
        min: -0.2,
        title: {
          text: "",
          color: "black"
        },
        opposite: true,
        labels: {
          format: '{value:.1f}',
          formatter: function () {
            return Highcharts.numberFormat((this.value * 100), 0) + '%';
          },
        },
      }
    ],
    legend: {
      //itemWidth: 300,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      labelFormatter: function () {
        if (this.index === 1) {
          return 'Prozentuale Veränderung (rechte Skala)';
        } else {
          return this.name;
        }
      }
    },
    tooltip: {
      pointFormatter: function () {
        if (this.series.yAxis.userOptions.opposite) {
          return '<span style="color:' + this.series.color + '">\u25CF</span> ' + 'Veränderung Kantonsanteil' + ': <b>' + Highcharts.numberFormat(this.y * 100, 1) + '%' + '</b><br/><b>';
        } else {
          return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1) + ' Mio. Franken' + '</b><br/><b>';
        }
      },
      shared: false
    },
    series: [
      {
        type: "line",
        color: "#7a3051"
      },
      {
        type: "column",
        color: "#30517a",
        yAxis: 1,
        minPointLength: 3,
        events: {
          hide: function () {
            this.chart.yAxis[1].update({ visible: false });
          },
          show: function () {
            this.chart.yAxis[1].update({ visible: true });
          }
        }
      }
    ],
  }
}());

(function () {
  return {
    "chart": {
      "type": "area",
    },
    plotOptions: {
      series: {
        marker: {
          symbol: 'circle'
        }
      },
      /*      column: {
              stacking: "normal",
              pointPadding: 0,
              groupPadding: 0.2,
              borderWidth: 0,
              pointWidth: 2,
            },*/
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "xAxis": {
      type: "linear",
      tickInterval: 10,
      min: 18,
      max: 105
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 10,
      //itemWidth: 210,
      //itemMarginBottom: 2,
    },
    "series": [
      { "color": "#73ba7c", "index": 3, legendIndex: 0, stacking: true }, //
      { "color": "#FABD24", "index": 2, legendIndex: 1, stacking: true }, //
      { "color": "#923F8D", "index": 1, legendIndex: 2, stacking: true }, //
      { "color": "#999999", "index": 0, legendIndex: 3, stacking: false, type: "line", zIndex: 100 }, //

    ],
    "tooltip": {
      formatter() {
        if (this.series.userOptions.stacking == true) {
          const chart = this.series.chart;
          const series = chart.series;
          let tooltip = ""
          let s = 0
          series.forEach(series => {
            if (series.userOptions.stacking == true) {
              series.setState('hover');
              series.points.forEach(point => {
                if (point.x === this.x) {
                  tooltip += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}:</span> <b> ${point.y} </b><br>`;
                  s += point.y;
                }
              })
            }
          },
          )
          return '<span style="font-size: 10px">Alter: ' + this.x + '</span><br>' + tooltip +
            '<span style="opacity: 0">\u25CF</span> Total Veranlagungen: <b>' + s + '</b>';

        } else {
          return '<span style="font-size: 10px">Alter: ' + this.x + '</span><br><span style="color:'
            + this.color + '">●</span> ' + this.series.name + ': <b>'
            + Highcharts.numberFormat(this.y, 0, ",", " ") + '</b><br/>';
        }
      }
    },

  };
}());








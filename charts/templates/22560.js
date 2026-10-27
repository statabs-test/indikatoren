(function () {
  return {
    "chart": {
      "type": "column",
      "inverted": false
    },
    subtitle: {
      //useHTML: true
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
        },
      }
    },
    "legend": {
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      shared: true
    },
    //seriesMapping necessary for charts with error bars. 
    "data": {
      "seriesMapping": [
        {
          "x": 0
        },
        {
          "x": 0//, "y":5
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        }
      ]
    },

    /*      
    { "color": "#addbe5", legendIndex: 2 }, // dunkelgrün 246370
          { "color": "#d3e1e4", legendIndex: 3 }, // grün A8C3CA
          { "color": "#ffebcd", legendIndex: 4 }, // orange FFBB58
          { "color": "#fac4b1", legendIndex: 5 }, // orange DC440E
          { "color": "#D3E2E4", legendIndex: 6 }, // orange D3E2E4
          { "color": "#cccccc", legendIndex: 7 }, // grau C8C8C8
          { "color": "#a4a4a4", legendIndex: 8 },// visible: false }, // grau 6F6F6F
          //  */
    "series": [
      {
        "index": 0,
        color: "#0091f7", //#661200",
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 2,
        color: "#e7b3b3", //"#b00000",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 4,
        color: "#f5c7b7", //"#dc440e",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 6,
        color: "#ffd9bf", //"#ff8028",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 8,
        color: "#ffebcd", //"#ffbb58",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },
      {
        "index": 1,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
          },
        }
      },
      {
        "index": 3,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
          }
        }
      },
      {
        "index": 5,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
          }
        }
      },
      {
        "index": 7,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
          }
        }
      },
      {
        "index": 9,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function () {
            return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
          }
        }
      },
      {
        "index": 10,
        color: "#999999",
        type: "line",
        "tooltip": {
          "pointFormatter": function () {
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }
      },


    ],
  };
}());

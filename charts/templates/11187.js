(function () {
  return {
    "data": {
      "seriesMapping": [
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
      ]
    },
    "xAxis": {
      type: "category",
    },
    "yAxis": {
        max: 50,
        tickInterval: 10,
      "labels": {
        "format": "{value:,.0f}",
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0);
        },
      }
    },
    "series": [
      { index:0,
        "color": "#008AC3",
        zIndex:1,
        borderColor: null,
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Stunden</b>';
          }
        }}, /*Männer*/
        {
          "index": 1,
          "type": "errorbar",
          zIndex:3,
          crisp: false,
          pointRange: 0,
          lineWidth: 0.5,
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + ' Stunden</b> - <b>' + Highcharts.numberFormat((this.high), 1) + ' Stunden</b>)';
            },
          }
        },
        { index:2,
          "color": "#DC440E",
          zIndex:1,
          borderColor: null,
          "tooltip": {
            "pointFormatter": function () {
              return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Stunden</b>';
            }
          }}, /*Frauen*/
          {
            "index": 3,
            "type": "errorbar",
            zIndex:3,
            crisp: false,
            pointRange: 0,
            lineWidth: 0.5,
            "tooltip": {
              "pointFormatter": function () {
                return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + ' Stunden</b> - <b>' + Highcharts.numberFormat((this.high), 1) + ' Stunden</b>)';
              },
            }
          },
          
          { index:4,
            "color": "#3c3c3c",
            zIndex:0,
            borderColor: null,
            "tooltip": {
              "pointFormatter": function () {
                return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Stunden</b>';
              }
            }}, /*Total*/
            {
              "index": 5,
              "type": "errorbar",
              zIndex:3,
              crisp: false,
              pointRange: 0,
              lineWidth: 0.5,
              "tooltip": {
                "pointFormatter": function () {
                  return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + ' Stunden</b> - <b>' + Highcharts.numberFormat((this.high), 1) + ' Stunden</b>)';
                },
              }
            },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      series: {
        pointPadding: 0.12,
        borderWidth: 2
      }
    },
    chart: {
      "type": "column",
    }
  }
}());
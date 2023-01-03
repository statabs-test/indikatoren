(function () {
  return {
    plotOptions: {
      arearange: {
        lineWidth: 0.5,
        //fillOpacity: 0.2,
        zIndex: -1,
        tooltip: {
          crosshairs: true,
          shared: true
        },
        marker: { states: { hover: { enabled: false } } }
      },
      series: {
        turboThreshold: 0
      }
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 75,
      max: 100,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
        },
      }
    },
    legend: {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
      },
    },
    series: [
      { "color": "#246370" }, // dunkelgrün
      {
        color: "#fbc9c9",
        type: "arearange",
        id: "rot",
        showInLegend: false,
        tooltip: {
          pointFormatter: function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>< ' + Highcharts.numberFormat((this.high), 1) + '% </b>'
          },
        },
        /*fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, "#fbfbfb"],
            [1, "#fbc9c9"]
          ]
        }*/
      }, {

        color: "#fbf6c9",
        type: "arearange",
        id: "gelb",
        showInLegend: false,
        tooltip: {
          pointFormatter: function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b> ' + Highcharts.numberFormat((this.low), 1) + '% - ' + Highcharts.numberFormat((this.high), 1) + '%</b>'
          },
        },
      },
      {
        color: "#c9fbc9",
        type: "arearange",
        id: "grün",
        showInLegend: false,
        tooltip: {
          pointFormatter: function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>> ' + Highcharts.numberFormat((this.low), 1) + '% </b>'
          },
        },
        /*fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, "#c9fbc9"],
            [1, "#fbfbfb"]
          ]
        }*/
      },

    ],
  };
}());


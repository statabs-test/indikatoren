(function () {
  return {
    chart: {
      type: "line",
    },
    xAxis: {
      tickInterval: 1,
    },
    yAxis: {
      min: 4, 
      max: 12,
      tickInterval: 1,
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0) + '%';
        },
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "align": "left",
      "verticalAlign": "top"
    },
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '% </b>'
      },
    },
    "series": [
      { "color": "#6F6F6F" }, 
      { "color": "#007A2F" }, 
      { "color": "#2B0099" }, 
      { "color": "#B00000" }, 
      { "color": "#73B97C" }, 
      { "color": "#999999", dashStyle: 'ShortDash', }, 
    ],
  }
}());

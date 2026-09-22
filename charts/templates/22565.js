(function () {
  return {
    "xAxis": {
      type: 'category',
    },
    "yAxis":     {
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat((this.value*100), 0) + '%';
        },
      },
    },
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "align": "left",
      "verticalAlign": "top",
    },
    "series": [
      {
        "color": "#0091f7", // 
        "tooltip": {
          "shared": false,
          "pointFormatter":
            function () {
              return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '% </b><br/><b>'
            }
        },

      }      
    ],
  }
}());
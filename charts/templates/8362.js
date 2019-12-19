(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0.1,
        borderWidth: 0,
        "pointWidth": 40,
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": 0
      }
    },
    "yAxis": [{
      gridLineColor: '#B9CFD7',
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat(this.value, 0);
        },
        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      opposite: false,
      tickAmount: 5,
    },
    {
      gridLineColor: '#B9CFD7',
      gridLineWidth: 0.5,
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "formatter": function () {
          return Highcharts.numberFormat(this.value, 0);
        },

        "style": {
          "color": "#000000"
        }
      },
      "min": 0,
      tickAmount: 5,
      "opposite": true
    }
    ],
    "series": [
      {
        "color": "rgb(180,117,171)",
        "yAxis": 0,
        "tooltip": {
          "shared": false,
          "pointFormatter":
            function () {
              return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 0) + '</b><br/><b>'
            }
        },

      },
      {
        "color": "rgb(180,117,171)",
        "type": "column",
        "yAxis": 1,
        "tooltip": {
          "shared": false,
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
        },
        pointPlacement : "on"
      }
    ],
    "legend": {
      "enabled": false
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "inverted": false,
      "spacingBottom": 70
    }
    
  }
}());
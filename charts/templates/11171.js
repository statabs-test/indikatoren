(function() {
  return {
    "yAxis": [
      {
        tickAmount: 7,
        "labels": {
          "formatter": function() {
            return Highcharts.numberFormat((this.value * 100), 0) + '%';
          }
        },
        min: 0,
        "title": {
          text: ""
        }
      },
      {
        tickAmount: 7,
        "opposite": true, // Die rechte Achse aktivieren
        "labels": {
          "formatter": function() {
            return Highcharts.numberFormat((this.value), 0) + ''; // Wandelt Dezimalzahlen in Prozent um
          }
        },
        min: 0,
        "title": {
          text: ""
        }
      }
    ],
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      itemDistance: 8,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    },
    "series": [
      {
        "index": 1,
        "color": "#008AC3",
        "tooltip": {
          "pointFormatter": function() {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '%' + '</b><br/><b>';
          }
        }
      },
      {
        "index": 2,
        "color": "#990300",
        "tooltip": {
          "pointFormatter": function() {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 0) + '</b><br/><b>';
          }
        },
        "yAxis": 1, // Die zweite Serie auf die rechte Achse legen
      }
    ],
    "tooltip": {
      "shared": false
    },
    "chart": {
      // "marginTop": 120
    },
    "plotOptions": {
      "series": {
        "marker": {
          "enabled": false,
          "symbol": "circle"
        },
        "dataLabels": {
          "enabled": false
        }
      }
    }
  };
})();

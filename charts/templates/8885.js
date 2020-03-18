
/*global Highcharts*/
(function () {
  return {
    "chart": {
      "type": "column",
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    xAxis: {
      min: 2009,
      tickInterval: 1,
      labels: {
        rotation: -45
      }
    },
    yAxis: {
      labels: {
        format: "{value:,.0f}",
      },
      min: -500,
      tickInterval: 500,
      plotLines: [{
        color: '#B9CFD7',
        value: 0,
        width: 1
      }]
    },
    "series": [
      { "color": "#FABD24" }, /* gelb*/
      { "color": "#923F8D" }, /* violett*/
      { "color": "#bbbbbb" }, /* violett*/
      { "color": "#000000", type: 'line' } /* grau */
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
/*      labelFormatter: function () {
        return this.name.replace(' ', '<br>');
      }
      */
      /*
           "legend": {
            "enabled": true,
            "layout": "vertical",
            "verticalAlign": "middle",
            "align": "right",
            labelFormatter: function () {
              return this.name.replace('-', '-<br>').replace(' ', '<br>').replace('Gesamt', 'Gesamt-<br>');
           }    
      */
    }
  }
}());
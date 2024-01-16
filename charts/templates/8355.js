(function () {
  return {
    "chart": {
    },
    "plotOptions": {
      
      "line": {            
        colorByPoint: true,
        color: function () {
            // Hier wird die Farbe basierend auf dem Namen der Datenreihe dynamisch festgelegt
            var seriesName = this.name;
            if (seriesName === 'Pharma') {
                return 'red';
            } else if (seriesName === 'Datenreihe 2') {
                return 'blue';
            } else {
                // Standardfarbe für andere Datenreihen
                return 'red';
            }
        }
      }
    },
    "xAxis": {
      "tickInterval": 1,
    },
    "yAxis": {
      min: 40,
      tickInterval: 20,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      "itemMarginBottom": 5,
    },
    "series": [
      { "index": 13 }, /*dunkelrot */
      { "index": 12 }, /*hellrot */
      { "index": 11 }, /*dunkelorange */
      { "index": 10 }, /*dunkelgelb */
      { "index": 9 }, /*hellgelb */
      { "index": 8 }, /*dunkelgrün */
      { "index": 7 }, /*hellgrün1 */
      { "index": 6 }, /*hellgrün2 */
      { "index": 5 }, /*dunkelblau1 */
      { "index": 4 }, /*dunkelblau2 */
      { "index": 3 }, /*hellblau */
      { "index": 2 },  /*dunkelpink */
      { "index": 1 },  /*hellpink */
    ],
  }
}());
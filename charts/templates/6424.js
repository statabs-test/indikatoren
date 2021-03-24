(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: 100,
        minPointLength: 1,
        borderWidth: 0,
        "pointWidth": 20,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        },
        "stacking": "normal"
      }
    },
    "xAxis": {
      min: 0,
      "type": "category",
      "tickInterval": 1
    },
    "yAxis": {
      //max: 120000,
      //tickInterval: 60000,
      tickAmount: 6,
      "labels": {
        "format": "{value:,.0f}",
      },
      //"max": undefined
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      itemDistance: 1,
      "verticalAlign": "top",
      "itemMarginBottom": 1,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [
      { "color": "#B00000", index: 10, legendIndex: 0, visible: true}, /*Schweiz*/
      { "color": "#672773", index: 9, legendIndex: 1, visible: true }, /*Deutschland*/
      { "color": "#007a2f", index: 8, legendIndex: 2, visible: true }, /*Italien*/
      { "color": "#fabd24", index: 7, legendIndex: 3, visible: false }, /*Türkei*/
      { "color": "#b475ab", index: 6, legendIndex: 4, visible: true }, /*EU-17 & EFTA*/
      { "color": "#71a3b5", index: 5, legendIndex: 5, visible: false }, /*EU-Ost */
      { "color": "#b9cfd7", index: 4, legendIndex: 6, visible: true }, /*Balkan*/
      { "color": "#ff8028", index: 3, legendIndex: 7, visible: true }, /*Mittel- & Südamerika */
      { "color": "#73ba7c", index: 2, legendIndex: 8, visible: false }, /*Arabische Länder */
      { "color": "#9f7c5a", index: 1, legendIndex: 9, visible: false }, /*Afrikanische Länder*/
      { "color": "#999999", index: 0, legendIndex: 10, visible: false }, /*Übrige Länder*/
    ],
    "chart": {
      "renderTo": 'container-I.01.1.0016',
      "marginBottom": 75,
      //"marginTop": 75,
      "marginRight": 20,
      "type": "column",
      "inverted": true
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    },
  }
}());

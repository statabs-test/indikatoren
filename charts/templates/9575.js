(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column"
    },
    "plotOptions": {
      "series": {
        stacking: "percent",
        borderWidth: 0,
        groupPadding: 0,
      }
    },
    xAxis: {
      type: "category",
      
      labels: {
        step: 1,
        rotation: -45,
        formatter: function () {
          return this.value.replace('Kleinhüningen', 'Kleinh.');
        }
      }
    },
    "yAxis": {
      tickAmount: 6,
      "labels": {
        "format": "{value:,.0f}%"
      },
    },
    "legend": {
      "enabled": true,
      reversed: false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      padding: 0,
      itemDistance: 0,
      width: 500,
      itemWidth: 210,
      itemMarginBottom: 0,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      }
    },
    "series": [
      { "color": "#8B2223", index: 14, legendIndex: 0 }, /*dunkelrot*/
      { "color": "#DC440E", index: 13, legendIndex: 1 }, /*hellrot*/
      { "color": "#FF8028", index: 12, legendIndex: 2 }, /*dunkelorange*/
      { "color": "#FFBB58", index: 11, legendIndex: 3 }, /*dunkelgelb*/
      { "color": "#FFDA80", index: 10, legendIndex: 4 }, /*hellgelb*/
      { "color": "#007A2F", index: 9, legendIndex: 5 }, /*dunkelgrün*/
      { "color": "#D7E8D2", index: 8, legendIndex: 6 }, /*hellgrün1*/
      { "color": "#73BA7C", index: 7, legendIndex: 7 }, /*hellgrün2*/
      { "color": "#2B0099", index: 6, legendIndex: 8 }, /*dunkelblau1*/
      { "color": "#008AC3", index: 5, legendIndex: 9 }, /*dunkelblau2*/
      { "color": "#B9CFD7", index: 4, legendIndex: 10 }, /*hellblau*/
      { "color": "#672773", index: 3, legendIndex: 11 }, /*dunkelpink*/
      { "color": "#E7CEE2", index: 2, legendIndex: 12 }, /*hellpink*/
      { "color": "#67401E", index: 1, legendIndex: 13 }, /*hellpink*/
      { "color": "#C4AB91", index: 0, legendIndex: 14 }, /*hellpink*/
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    },
  }
}());

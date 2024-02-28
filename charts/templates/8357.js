(function () {
  return {
    "chart": {
      //  height: 500,
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    "xAxis": {
      "tickInterval": 1,
    },
    "yAxis": {
      min: 60,
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
      reversed: true,
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "middle",
      "align": "right",
      "itemMarginBottom": 5,
    },
    colors: [
      '#007A2F',
      '#2B0099',
      '#73BA7C',
      '#661200',
      '#D7E8D2',
      '#672773',
      '#FFBB58',
      '#FF8028',
      '#FFDA80',
      '#008AC3',
      '#B9CFD7',
      '#E7CEE2',
],
  }
}());
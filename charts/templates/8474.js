(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
      labels: {
        rotation: 0,
      }
    },
    "yAxis": {
      min: 80,
      max: 140,
      tickInterval: 20,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    colors: ['#2B0099',
    '#73BA7C',
    '#661200',
    '#007A2F',
    '#672773',
    '#D7E8D2',
    '#FFBB58',
    '#FFDA80',
    '#FF8028',
    '#008AC3',
    '#E7CEE2',
    '#B9CFD7',
],
    "legend": {
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "top",
      "align": "right",
      "itemMarginBottom": 2,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      width: 665,
      marginTop: 8
      //  height: 500,
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
(function () {
  return {
    "chart": {
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
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
      min: 40,
      tickInterval: 20,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    colors: ['#2B0099',
    '#73BA7C',
    '#FFBB58',
    '#FF8028',
    '#D7E8D2',
    '#B9CFD7',
    '#672773',
    '#007A2F',
    '#008AC3',
    '#E7CEE2',
    '#FFDA80',
    '#8B2223',
    '#DC440E',    
],
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
   
  }
}());
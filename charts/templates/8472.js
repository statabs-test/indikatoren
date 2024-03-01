(function () {
  return {
    "xAxis": {
      "tickInterval": 1,
      labels: {
        rotation: 0,
      }
    },
    "yAxis": {
      min: 40,
     // max: 140,
      tickInterval: 20,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    colors: [
      '#73BA7C',
      '#FFBB58',
      '#2B0099',
      '#B9CFD7',
      '#D7E8D2',
      '#007A2F',
      '#FF8028',
      '#672773',
      '#008AC3',
      '#FFDA80',
      '#E7CEE2',
      '#8B2223',
      '#DC440E',   
],
    "legend": {
      reversed: true,
      "enabled": true,
      "layout": "vertical",
      "verticalAlign": "top",
      "align": "right",
      //"itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      width: 665,
      marginTop: 8,
      // height: 500,
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());
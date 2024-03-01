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
      '#2B0099',
      '#D7E8D2',
      '#73BA7C',
      '#661200',
      '#007A2F',
      '#B9CFD7',
      '#008AC3',
      '#672773',
      '#FF8028',
      '#FFDA80',
      '#E7CEE2',
      '#FFBB58',
      '#8B2223',
      '#DC440E',        
  ],
    "legend": {
      reversed: true,
      "enabled": true,
      //"y": 45,
      //itemWidth: 120,
      "layout": "vertical",
      "verticalAlign": "top",
      "align": "right",
      "itemMarginBottom": 1,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      width: 665,
      marginTop: 8,
      //marginRight: 165
      // height: 500,
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
(function () {
  return {
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "xAxis": {
      "tickInterval": 2
    },
    "series": [
      {
        "marker": {
          "symbol": "circle",
          "enabled": false
        },
        "color": "#8A8A8A",
        //"dashStyle": "ShortDash"
        "index": 3
      },      
      { "color": "#246370",
      "index": 1
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
    }
  }
}());

(function () {
  return {
    "xAxis": {
     // "tickInterval": 1,
      //"type": "category",
    },
    "yAxis": {
      /*tickInterval: 20,*/
      "min": 0,
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    }, 
    "series": [
      { index: 2, 
        "color": "#990300" },
      { index: 1,
        "color": "#3C3C3C" },
      { index: 3,
        "color": "#FABD24" }
    ],
    "legend": {
      "enabled": true,
      "x": 30,
      //"y": 35,
      //"itemWidth": 145,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
          "radius": 3
        }
      }
    }
  };
}());

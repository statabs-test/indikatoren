(function () {
  return {
    xAxis: {
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    "yAxis": {
      min: null,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
    },
    "series": [
      { "color": "rgb(0,138,195)" },
      { "color": "rgb(147,63,141)" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 5,
      "x": 30,
      //"y": 35,
      //"itemWidth": 145,
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "symbol": "circle",
        }
      }
    }
  };
}());

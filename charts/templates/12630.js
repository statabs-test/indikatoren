(function () {
  return {
    "plotOptions": {
      "series": {
        "stacking": "normal"
      }
    },
    "yAxis": {
      //"min": -5,
      // "max": 250,
      "tickInterval": 2,
      "labels": {
        "format": "{value:,.0f}"
      },
      plotLines: [{
        color: '#B9CFD7',
        value: 0, 
        width: 1 
      }]
    },
    xAxis: {
      type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
      tickPositioner: function () {
        var maxlabels = 10,
          ext = this.getExtremes(),
          i = Math.round(ext.max),
          interval = Math.round((i - ext.min)/maxlabels),
          pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.1f}% der Zu- resp. Abgänge)<br/>',
      shared: false
    },
    "legend": {
      "layout": "vertical",
      "verticalAlign": "middle",
      "itemMarginBottom": 7,
      "align": "right",
      "itemStyle": {
        "fontWeight": "normal",
        "width": 111,
        textOverflow: null
      }
    },
    "series": [
      {
        "color": "#007a2f"
      },
      {
        "color": "#2f656b"
      },
      {
        "color": "#68ab2b"
      },
      {
        "color": "#73b97c"
      },
      {
        "color": "#990300"
      },
      {
        "color": "#fabd24",
        "marker": {
          "enabled": false
        },
        "type": "line",
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
          shared: false
        }
      }
    ],
    "chart": {
      "zoomType": "xy",
      "type": "column"
    }
  }
}());

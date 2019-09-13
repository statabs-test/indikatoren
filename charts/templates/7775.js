(function () {
  return {
    "legend": {
      "enabled": true,
      align : "left",
      verticalAlign: "top"
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.1f}",
      },
      "min": null
    },
    "xAxis": {
      "tickInterval": 2,
    },
    "data": {
      "seriesMapping": [
        { x: 0, y: 8 },
        { x: 0, y: 9 },
      ]
    },
    "series": [
      {
        "color": "#8b2223",
        type: "column"
      },
      {
        "color": "#DC440E",
        type: "column"
      }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    },
  };
}());


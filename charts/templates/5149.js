(function () {
  return {
    chart: {
      marginTop: 50,
    },
    "xAxis": {
      //"tickInterval": 2
    },
    "yAxis": {
      "tickInterval": 2,
    },
    "tooltip": {
      "shared": false,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> Geburtenziffer: <b>{point.y:.1f}</b><br/>',
    },
    "series": [
      { visible: false, "color": "#008AC3", legendIndex: 0, }, /* grün */
      { visible: false, "color": "#68AB2B", legendIndex: 1, }, /* blau */
      { "color": "#3C3C3C", legendIndex: 2, }, /* scharz */
    ],
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
  };
}());

(function () {
  return {
    chart: {
      marginTop: 50,
    },
    "xAxis": {
      "tickInterval": 1
    },
    "yAxis": {
      "tickInterval": 2,
    },
    "series": [
      { visible: false, "color": "#008AC3", legendIndex: 0, }, /* grün */
      { visible: false, "color": "#68AB2B", legendIndex: 1, }, /* blau */
      { "color": "#3C3C3C", legendIndex: 2, }, /* scharz */
    ],
    "legend": {
      "enabled": false,
    },
  };
}());

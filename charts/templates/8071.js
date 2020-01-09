(function () {
  return {
    "yAxis": {
      tickInterval: 1
    },
    "xAxis": {
      "type": "category",
    },
    "legend": {
      "enabled": true,
      "verticalAlign": "top",
      "align": "left",
      labelFormatter: function () {
        return this.name.replace('Wohnviertel', '');
      }
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#b375ab"
      }
    ],
    "chart": {
      "type": "column"
    }
  };
}());
(function () {
  return {
    "chart": {
      "inverted": true,
      "width": 665,
      height: 400
      //"width": 992,
      //"height": 484,
    },
    "xAxis": {
      "labels": {
        step: 1,
        overflow: "justify",
        "formatter": function () {
          return this.value;
        }
      }
    },
    yAxis: {
      labels: {
        y: 10,
        rotation: 0
      }
    },
    "series": [
      { "color": "#007A2F", index: 5, legendIndex: 1 }, /*dunkelgrün*/
      { "color": "#73B97C", index: 4, legendIndex: 2 }, /*hellgrün*/
      { "color": "#FABD24", index: 3, legendIndex: 3 }, /*hellrot*/
      { "color": "#CD9C00", index: 2, legendIndex: 4 }, /*dunkelrot*/
      { "color": "#C8C8C8", index: 1, legendIndex: 5 } /*grau*/
    ],
  };
}());
(function () {
  return {
    "series": [
      { "color": "#71A3B5" },
      { "color": "#FFBB58" },
      { "color": "#C8C8C8" },
      { "color": "#6F6F6F" }, // grau
      // reversedStacks: true,       
    ],
    "xAxis": {
      "type": "category"
    },
    yAxis: {
      reversedStacks: false,
    },
    legend: {
      reversed: true,
      "layout": "vertical",
      "verticalAlign": "middle",
      //"itemMarginBottom": 4,
      itemDistance: 0,
      "align": "right",
      /*labelFormatter: function(){
          return this.name.replace("/", " /<br/>");
      }*/
    }
  }
}());


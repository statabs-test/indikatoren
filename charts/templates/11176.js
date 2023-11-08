(function(){
  return {
    chart: {
      type: "column",
      //type: "area",
    },
    plotOptions: {
      //area: {
        column: {
        stacking: 'normal',
        //lineWidth: 0,
      },
      line: {
        lineWidth: 3,
      }
    },
  series: [
    { "color": "#007a2f"}, // dunkelgrün
    { "color": "#68ab2b"}, // grün
    { "color": "#ffbb58"}, // orange
    { "color": "#dc440e"}, // rot
    { "color": "#5284BB"}, // grau
    { 
      type: 'line',
      "color": "black",
      visible: true,
      lineWidth: 2,
    },
  ],
  xAxis: {
      tickInterval: 1,
  },
  yAxis: {
      reversedStacks: true,
  },
  "legend": {
    enabled: true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    reversed: false,
  }
};
}());

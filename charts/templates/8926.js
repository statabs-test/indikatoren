(function(){
    return {
    series: [
      { "color": "#246370"}, // dunkelgrün
      { "color": "#A8C3CA"}, // grün
      { "color": "#FFBB58"}, // orange
      { "color": "#DC440E"}, // orange
      { "color": "#D3E2E4"}, // orange
      { "color": "#C8C8C8"}, // grau
      { "color": "#6F6F6F"}, // grau
    ],
    xAxis: {
        type: "category",
        reversed: false
    },
    yAxis: {
        reversedStacks: false,
        tickInterval: 25,
        labels: {
            y: 10
        }
    },
    legend: {
        reversed: false,
        labelFormatter: function(){
            return this.name.replace("/", " /<br/>");
        },
        //x: 0,
        layout: "horizontal",
        align: "left",
        verticalAlign: "top",
        itemWidth: 115,
        itemDistance: 2,
    },
    chart: {
        inverted: true
    }
	};
}());

 
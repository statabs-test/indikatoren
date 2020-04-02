(function(){
    return {
    series: [
      { "color": "#083008"}, // dunkelgrün
      { "color": "#FFBB58"}, // grün
      { "color": "#689199"}, // orange
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
        layout: "horizontal",
        align: "left",
        verticalAlign: "top",
        reversed: true,
        alignColumns: false,
      itemWidth: 100,
      labelFormatter: function () {
        return this.name;
      },
      itemStyle: {
        textOverflow: undefined,
        whiteSpace: 'nowrap',
      }
    },
    chart: {
        inverted: true
    }
    
	};
}());

 
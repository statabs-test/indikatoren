(function(){
    return {
    series: [
      { "color": "#007A2F",index: 0, legendIndex: 5 }, // dunkelgrün
      { "color": "#68AB2B",index: 1, legendIndex: 4 }, // grün
      { "color": "#FABD24",index: 2, legendIndex: 3 }, // orange
      { "color": "#B00000",index: 3, legendIndex: 2 }, // orange
      { "color": "#C8C8C8",index: 4, legendIndex: 1 }, // grau
      { "color": "#6F6F6F",index: 5, legendIndex: 0 }, // grau
    ],
    xAxis: {
        type: "category"
    },
    yAxis: {
        reversedStacks: false,
    },
    legend: {
        reversed: true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 4,
        "align": "left",
        labelFormatter: function(){
            return this.name.replace("/", " /<br/>");
        }
    }
	};
}());
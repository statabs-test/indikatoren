(function(){
    return {
    series: [
      { "color": "#71A3B5",index: 0, legendIndex: 3 }, // dunkelgrün
      { "color": "#FABD24",index: 1, legendIndex: 2 }, // grün
      { "color": "#C8C8C8",index: 2, legendIndex: 1 }, // grau
      { "color": "#6F6F6F",index: 3, legendIndex: 0 }, // grau
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
(function(){
    return {
    series: [
      { "color": "#246370"}, // dunkelblau
      { "color": "#689199"}, // blau
      { "color": "#FABD24"}, // orange
      { "color": "#FF8028"}, // rot
      { "color": "#C8C8C8"}, // hellgrau
      { "color": "#6F6F6F"}, // grau
    ],
    xAxis: {
        type: "category"
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
	};
}());
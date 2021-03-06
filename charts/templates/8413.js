(function(){
    return {
    series: [
      { "color": "#007A2F"}, // dunkelgrün
      { "color": "#73B97C"}, // grün
      { "color": "#FFBB58"}, // gelb
      { "color": "#B00000"}, // rot
      { "color": "#C8C8C8"}, // hellgrau
      { "color": "#6F6F6F"}, // grau
    ],
    legend: {
        reversed: true,
        labelFormatter: function(){
            return this.name.replace("/", " /<br/>");
    
          }
      
    },  
    yAxis: {
        reversedStacks: false,
        tickInterval: 20,
        max: 100,
    },     
    "xAxis": {
        "type": "category",
  }
	}
}());

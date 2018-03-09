(function(){
    return {
      yAxis: {
          min: 0, 
          max: null, 
          reversedStacks: false,
          labels: {
              x: -5
          }
      },
      xAxis: {
          tickInterval: 1,
          labels: {
            step: 1, 
            formatter: function(){
                return this.value;
            }
          }
      },
      "series": [
     {"color": "#008AC3", index: 5, legendIndex: 0}, /* */
	 {"color": "#662673", index: 4, legendIndex: 1}, /* */
     {"color": "#008AC3", index: 5, legendIndex: 0}, /* */
	 {"color": "#662673", index: 4, legendIndex: 1}, /* */
	 {"color": "#689199", index: 3, legendIndex: 2},  /* */
	 {"color": "#B375AB", index: 2, legendIndex: 3},  /* */
	 {"color": "#A8C3CA", index: 1, legendIndex: 4}, /* */
	 {"color": "#E7CEE2", index: 0, legendIndex: 5}, /* */
      ],
      legend: {
        enabled: true, 
        reversed: true, 
        margin: 5, 
        padding: 5, 
        labelFormatter: function(){
          return this.name
            .replace("Vereinigtes ", "Vereinigtes<br/>")
            .replace("Vereinigte ", "Vereinigte<br/>");
        }
      },
     tooltip: {
         pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} ({point.percentage:.1f}%)</b><br/>'
     },      
     "plotOptions": {
        "series": {
          "stacking": "normal"
        }
     }
    };
}());
 
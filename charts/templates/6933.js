(function(){
    return {
      yAxis: {
          min: 0, 
          max: null, 
          reversedStacks: false,
          labels: {
              x: -5, 
              format: "{value:,.0f}" 
          }
      },
      xAxis: {
          tickInterval: 1,
          labels: {
            step: 1, 
            rotation: -45,
            formatter: function(){
                return this.value;
            }
          }
      },
      data: {
		    seriesMapping: [
		        {x: 0, y: 3},
		        {x: 0, y: 4},
		        {x: 0, y: 5},
		        {x: 0, y: 6},
		        {x: 0, y: 7},
		        {x: 0, y: 8},
		        {x: 0, y: 9},
		        {x: 0, y: 10},
		        {x: 0, y: 11},
		        {x: 0, y: 12},
		        {x: 0, y: 13},
		        {x: 0, y: 14},
		        {x: 0, y: 15},
		        {x: 0, y: 16},
		        {x: 0, y: 17},
		        {x: 0, y: 18},
		        {x: 0, y: 19},
        ],
        parsed: function(columns){ 
          //define which wohnviertel to display
          //var filterValue = 1;
          var filterValue = this.chartOptions.customFunctions.filter;
          
          //define which column (zero-based index) should be filtered 
          var filterColumnIndex = 1;
          //go backwards through the column with the values to filter (because we remove values at the end of the array and want to retain the index)
          for (var i = columns[0].length; i > 0; i--){
            if (columns[filterColumnIndex][i] != filterValue){
              //go through all columns and remove the value at the current position
              for (var j=0; j < columns.length; j++){
                columns[j].splice(i, 1);
              }
            }
          }
        },
      },
      series: [
        {"color": "rgb(176, 0, 0)"},
        {"color": "rgb(255, 128, 40)"},
        {"color": "rgb(115, 186, 124)"},
        {"color": "rgb(180, 117, 171)"},
        {"color": "rgb(8, 161, 217)"},
        {"color": "rgb(131, 82, 46)"},
        {"color": "rgb(255, 232, 70)"},
        {"color": "rgb(60, 60, 60)"},
        {"color": "rgb(200, 200, 200)"},
        {"color": "rgb(176, 0, 0)"},
        {"color": "rgb(255, 128, 40)"},
        {"color": "rgb(115, 186, 124)"},
        {"color": "rgb(180, 117, 171)"},
        {"color": "rgb(8, 161, 217)"},
        {"color": "rgb(131, 82, 46)"},
        {"color": "rgb(255, 232, 70)"},
        {"color": "rgb(60, 60, 60)"},
      ],
      legend: {
        enabled: true, 
        reversed: true, 
        margin: 5, 
        padding: 5, 
        itemMarginBottom: 2,
        labelFormatter: function(){
          return this.name
            .replace("Bosnien und ", "Bosnien und<br/>")
            .replace("Montenegro", "Monte-<br/>negro")
            .replace("Vereinigtes ", "Vereinigtes<br/>")
            .replace("Vereinigte ", "Vereinigte<br/>");
        }
      },
     tooltip: {
         //pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} ({point.percentage:.1f}%)</b><br/>',
         shared: true,
     },      
     plotOptions: {
        series: {
          stacking: "normal"
        }
     },
     customFunctions: {
       filter: 1
     }
    };
}());
 
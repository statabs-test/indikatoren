(function(){
    return {
      data: {
        parsed: function(columns){ 
          //define which wohnviertel to display
          var filterValue = this.chartOptions.customFunctions.filter;
          
          //define which column (zero-based index) should be filtered 
          var filterColumnIndex = 4;
          //go backwards through the column with the values to filter (because we remove values at the end of the array and want to retain the index)
          for (var i = columns[0].length; i > 0; i--){
            if (columns[filterColumnIndex][i] != filterValue){
              //go through all columns and remove the value at the current position
              for (var j=0; j < columns.length; j++){
                columns[j].splice(i, 1);
              }
            }
          }
          //Create a new Series named like the current Wohnviertel, with its id as content
          //columns[1][0] = columns[2][1];
        },
        seriesMapping: [
          {x: 2, Wohnviertel: 5, y: 3}
        ]
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">●</span> {point.Wohnviertel}: <b>{point.y}</b><br/>',
      },
      yAxis: {
        labels: {
          format: "{value::,.f}",
        }
      },
      xAxis: {
        reversed: false,
      },
      legend: {
        enabled: false
      },
      series: [
        {
        color: "rgb(37, 99, 112)",
        }
      ],
      chart: {
        type: "bar", 
        marginRight: 15,
      }, 
     customFunctions: {
       filter: 1
     }
    };
}());
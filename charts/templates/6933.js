/* 
global $
global Highcharts
*/

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
		        {x: 0, y: 1 }, //dummy series to get Wohnviertel
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
          
          //Create a new Series named like the current Wohnviertel, with its id as content
          columns[1][0] = columns[2][1];
        },
      },
      series: [
        {"color": "rgb(36, 99, 112)"},
        {"color": "rgb(104,145,153)"},
        {"color": "rgb(168, 195, 202)"},
        {"color": "rgb(211, 226, 228)"},
        {"color": "rgb(102, 38, 115)"},
        {"color": "rgb(145, 63, 141)"},
        {"color": "rgb(179, 117, 171)"},
        {"color": "rgb(0, 122, 47)"},
        {"color": "rgb(104, 171, 43)"},
        {"color": "rgb(115, 185, 124)"},
        {"color": "rgb(127, 95, 26)"},
        {"color": "rgb(205, 156, 0)"},
        {"color": "rgb(176, 0, 0)"},
        {"color": "rgb(220, 68, 14)"},
        {"color": "rgb(255, 128, 40)"},
        {"color": "rgb(255, 187, 88)"},
        {"color": "rgb(191, 191, 191)"},
        {showInLegend: false, visible: false} //dummy series to get Wohnviertel
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
         //headerFormat: '<span style="font-size: 10px">{point.key} {series.chart.series[17].name}</span><br/>',
         //pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} ({point.percentage:.1f}%)</b><br/>',
          formatter: function () {
            var lastSeriesIndex = this.points[0].series.chart.series.length - 1;
            var s = '<b>'+ this.points[0].series.chart.series[lastSeriesIndex].name + ' ' +  this.x + '</b>';
            $.each(this.points, function () {
                s += '<br/><span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': ' + this.y;
            });
            
            return s;
        },
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
 
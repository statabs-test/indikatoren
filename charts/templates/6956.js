/* 
global Highcharts
*/

(function(){
    return {
      data: {
        parsed: function(columns){ 
          //define which wohnviertel to display
          var filterValue = this.chartOptions.customFunctions.filter;
          
          //create a new array that contains data for BS
          var bsData=[];
          var bsLabels=[];
          
          //define which column (zero-based index) should be filtered 
          var filterColumnIndex = 4;
          var dataColumnIndex=3;
          var wohnviertelNameColumnIndex=5;
          var bsValue=99;
          //go backwards through the column with the values to filter (because we remove values at the end of the array and want to retain the index)
          for (var i = columns[0].length; i > 0; i--){
            if (columns[filterColumnIndex][i] != filterValue){
              //add data to bs array if wohnviertel_id=99
              if (columns[filterColumnIndex][i] == bsValue){
                bsData.unshift(columns[dataColumnIndex][i]);
                bsLabels.unshift("Kanton Basel-Stadt");
              }
              
              //go through all columns and remove the value at the current position
              for (var j=0; j < columns.length; j++){
                columns[j].splice(i, 1);
              }
            }
          }
          //add bs data and labels
          bsData.unshift("Kanton Basel-Stadt (untere Skala)");
          columns.push(bsData);
          bsLabels.unshift("Wohnviertel_Name");
          columns.push(bsLabels);
          
          //replace measure column header for a nice legend item label
          columns[dataColumnIndex][0]=columns[wohnviertelNameColumnIndex][1];
        },
        seriesMapping: [
          {x: 2, Wohnviertel: 7, y: 6},
          {x: 2, Wohnviertel: 5, y: 3},
        ]
      },
      tooltip: {
        pointFormatter: function(){
          //var pcnt = (this.y / this.series.data.map(p => p.y).reduce((a, b) => a + b, 0)) * 100;
          var anteilInWv = (this.y / this.series.data
            .map(function(p){return p.y;})
            .reduce(function(accumulator, currentValue){return accumulator + currentValue;})) * 100;
          return '<span style="color:' + this.color + '">●</span> ' + this.Wohnviertel + ': <b>' + Highcharts.numberFormat(this.y, 0)  + '</b> '
            + '(' + Highcharts.numberFormat(anteilInWv, 1) + '%) <br/>';
        },
      },
    yAxis: [
    {
      labels: {
        format: "{value:,.f}",
        style: {
        color: "#000000",
        },
      }, 
      title: "",
    },
    {
      opposite: true,
      labels: {
        format: "{value:,.f}",
        style: {
        color: "#000000",
        },
      }, 
      title: "",
    }
    ],
      xAxis: {
        reversed: false,
      },
      legend: {
        enabled: true,
        layout: 'horizontal',
        verticalAlign: 'top',
        align: 'left',
        reversed: true,
      },
      series: [
        {
          color: "lightgray",
        },
        {
          color: "rgb(37, 99, 112)",
          yAxis: 1,
        },
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
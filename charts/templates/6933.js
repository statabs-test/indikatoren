/* 
global $
*/

(function(){
    return {
      chart: {
        type: 'area',
      },
      yAxis: {
          showLastLabel: true,
          endOnTick: true,
          maxPadding: 0,
          labels: {
              format: "{value:,.0f}",
          }, 
          opposite: false,
          reversedStacks: false,
      },
      xAxis: {
          endOnTick: true,    
          startOnTick: true,
          showFirstLabel: true,
          showLastLabel: true,
          tickInterval: 365 * 24 * 3600 * 1000,
          minTickInterval: 365 * 24 * 3600 * 1000,
          ordinal: false
      },
    	rangeSelector: {
    		buttons: 
    			[
        			{
                      count: 10,
                      type: 'year',
                      text: '10 J'
    	            }, 
        			{
                      count: 20,
                      type: 'year',
                      text: '20 J'
    	            }, 
    	            {
                      count: 30,
                      type: 'year',
                      text: '30 J'
    	            }, 
    	            {
                      type: 'all',
                      text: 'Alle J'
    	            }
                ],
            buttonSpacing: 15,
            inputEnabled: false,
            selected: 1, 
            inputDateFormat: '%Y',
    		inputEditDateFormat: '%Y'
        },
      data: {
		    seriesMapping: [
		        {x: 23, y: 21},
		        {x: 23, y: 3},
		        {x: 23, y: 4},
		        {x: 23, y: 5},
		        {x: 23, y: 6},
		        {x: 23, y: 7},
		        {x: 23, y: 8},
		        {x: 23, y: 9},
		        {x: 23, y: 10},
		        {x: 23, y: 11},
		        {x: 23, y: 12},
		        {x: 23, y: 13},
		        {x: 23, y: 14},
		        {x: 23, y: 15},
		        {x: 23, y: 16},
		        {x: 23, y: 17},
		        {x: 23, y: 18},
		        {x: 23, y: 19},
		        {x: 23, y: 20},
		        {x: 23, y: 22},
		        {x: 23, y: 1 }, //dummy series to get Wohnviertel
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
          //convert year in first column to UTC date to be used by Highstock
          var utcDate = [];
          columns[0].forEach(function(v, i, a){
              utcDate.push(Date.UTC(columns[0][i]));
          });
          columns.push(utcDate);
        },
      },
      series: [
        {color: "rgb(176, 000, 000)", showInNavigator: true, visible: false},
        {color: "rgb(008, 048, 56)", showInNavigator: true},
        {color: "rgb(036, 099, 112)", showInNavigator: true},
        {color: "rgb(104, 145, 153)", showInNavigator: true},
        {color: "rgb(168, 195, 202)", showInNavigator: true},
        {color: "rgb(211, 226, 228)", showInNavigator: true},
        {color: "rgb(102, 038, 115)",showInNavigator: true},
        {color: "rgb(145, 063, 141)", showInNavigator: true},
        {color: "rgb(179, 117, 171)", showInNavigator: true},
        {color: "rgb(000, 122, 047)", showInNavigator: true},
        {color: "rgb(104, 171, 043)", showInNavigator: true},
        {color: "rgb(115, 185, 124)", showInNavigator: true},
        {color: "rgb(127, 095, 026)", showInNavigator: true},
        {color: "rgb(205, 156, 000)", showInNavigator: true},
        {color: "rgb(099, 037, 035)", showInNavigator: true},
        {color: "rgb(220, 068, 014)", showInNavigator: true},
        {color: "rgb(255, 128, 040)", showInNavigator: true},
        {color: "rgb(255, 187, 088)", showInNavigator: true},
        {color: "rgb(255, 204, 153)", showInNavigator: true},
        {color: "rgb(191, 191, 191)", showInNavigator: true},
        {showInLegend: false, visible: false} //dummy series to get Wohnviertel
      ],
      legend: {
        enabled: true, 
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        reversed: true, 
        margin: 5, 
        padding: 5, 
        itemMarginBottom: 0,
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
         enabled: true,
         shared: true,
         split: false,
         reversed: true,
         formatter: function () {
          //console.log(this.points[0].series.chart.series);
          var lastSeriesIndex = (this.points[0].series.chart.series.length -1)/ 2;
          var s = '<b>'+ this.points[0].series.chart.series[lastSeriesIndex].name + ' ' +  new Date(this.x).getUTCFullYear() + '</b>';
          for (var i = this.points.length -1; i >= 0; i--){
              var p = this.points[i];
              s += '<br/><span style="color:' + p.color + '">\u25CF</span> ' + p.series.name + ': <b>' + p.y + '</b>';
          }
          return s;
         },
     },      
     plotOptions: { 
        series: {
          stacking: "normal", 
          lineWidth: 1,
          fillOpacity: 1, 
        }
     },
     customFunctions: {
       filter: 1
     }
    };
}());
 
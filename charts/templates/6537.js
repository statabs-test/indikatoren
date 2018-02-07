(function(){
    return {
    series: [
        {
            color: "rgb(138, 138, 138)",
        },
        {
            color: "rgb(159, 124, 90)",
        },
        {
            color: "rgb(197, 171, 146)",
        },
        {
            color: "rgb(237, 226, 208)",
        }        
  ],
  "xAxis": {
      "type": "category"
  },
  plotOptions: {
    series: {
        stacking: 'normal'
    }
  },
  legend: {
        layout: "vertical",
        verticalAlign: "middle",
        itemMarginBottom: 5,     
        align: "right",
        useHTML: false,
        itemStyle: {
            fontWeight: "normal"
        },
        symbolRadius: 0,
  },
  data: {
      //only keep first and last year
      parsed: function(columns){
            columns.forEach(function(column, i, arr){
                column.splice(2, column.length-3);
            });
      }
  },
  chart: {
      type: 'column',
 }
	};
}());

 
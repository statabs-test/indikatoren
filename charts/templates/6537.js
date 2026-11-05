(function(){
    return {
    series: [
        {
            color: "rgb(182, 237, 250)",
        },
        {
            color: "rgb(81, 185, 218)",
        },
        { 
            color: "rgb(14, 129, 167)",
        },
        {
            color: "rgb(138, 138, 138)",
        }
  ],
  xAxis: {
      type: "category"
  },
  yAxis: {
      tickAmount: 5,
      reversedStacks: false
  },
  plotOptions: {
    series: {
        stacking: 'normal', 
        dataLabels: {
            enabled: false,
            style: {
                fontSize: "11px", 
                color: 'black', 
                fontWeight: 'normal',
                textOutline: undefined
            }
        }
    }
  },
  legend: {
        reversed: true,
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
 }, 
    tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    footerFormat: '<span style="color: black">\u25CF</span> Total: <b>{point.total:,.0f}</b>'
}
	};
}());

 
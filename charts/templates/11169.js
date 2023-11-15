(function(){
    return {
      chart: {
        type: "column",
        //type: "area",
      },
  plotOptions: {
    series: {
      dataLabels: {
        style: {
          fontSize: "10px"
        }
      },
      stacking: "normal",
    }
  },
  xAxis: {
//    type: "category"    
  },  
  yAxis: {
    tickAmount: 7,
      labels: {
      format: "{value:,.0f}"
    },
    reversedStacks: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
//    footerFormat: 'Total: <b>{point.total:,.0f}</b>'
 },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    itemStyle: {
      fontWeight: "normal"
    }
  },
  series: [
    {
      color:  "#FF8028"
    },
	  {
      color:  "#DC440E"
    },
    {
      color: "#B375AB"
    },
    {
      type: 'line',
      color: '#083038',
      lineWidth: 3,
    }
  ]
	}
}());

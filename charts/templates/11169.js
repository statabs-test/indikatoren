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
      borderWidth: 0,
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
      color:  "#68ab2b"
    },
	  {
      color:  "#007a2f"
    },
    {
      color: "#0a3b19"
    },
    {
      type: 'line',
      color: '#010101',
      lineWidth: 3,
    }
  ]
	}
}());

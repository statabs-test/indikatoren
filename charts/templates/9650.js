(function(){
    return {
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
    type: "category"    
  },  
  yAxis: {
    tickAmount: 5,
    //max: 2000,
      labels: {
      format: "{value:,.0f}"
    },
    //reversedStacks: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> GWh ({point.percentage:,.1f}%)<br/>',
    footerFormat: 'Total: <b>{point.total:,.0f}</b> GWh<br/>'
 },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    alignColumns: false,
    //itemWidth: 95,
    itemStyle: {
      fontWeight: "normal"
    }
  },
  series: [
    {
      color: "#D3E2E4",
    },
    {
      color: "#A8C3CA",
    },
    {
      color:  "#689199",
    },
	  {
      color:  "#246370",  
    },
    {
      color: "#FF8028", 
    },
    {
      color:"#DC440E", 
    },
    {
      color:"#B00000",
    },
    {
      color:"#E7CEE2",
    },
    {
      color:"#B375AB",
    },
    {
      color:"#923F8D",
    }
  ],
  chart: {    
    /*marginBottom: 75,
    marginTop: 75,*/
    type: "column"
  }
	}
}());

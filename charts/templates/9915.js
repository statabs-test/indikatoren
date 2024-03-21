(function(){
    return {
  plotOptions: {
    series: {
      minPointLength:3,
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
    tickAmount: 7,
    //max: 6000,
      labels: {
      format: "{value:,.0f}"
    },
    reversedStacks: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
    footerFormat: 'Total: <b>{point.total:,.0f}</b>'
 },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    //alignColumns: false,
    //itemWidth: 300,
    itemStyle: {
      fontWeight: "normal"
    }
  },
  series: [
    {color: "#CD9C00", index:3},
	{color: "#FABD24", index:2},
    {color: "#68AB2B", index:1},
    {color:"#0A3B19", index:0},
  ],
  chart: {    
    /*marginBottom: 75,
    marginTop: 75,*/
    type: "column"
  }
	}
}());

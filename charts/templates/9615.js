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
    tickAmount: 7,
    max: 6000,
      labels: {
      format: "{value:,.0f}"
    },
    reversedStacks: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
    footerFormat: 'Total: <b>{point.total:,.0f}</b><br/>'
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
    {
      color: "#D3E2E4",
      //index: 0     
    },
    {
      color:  "#A8C3CA",
      //index: 3
    },
	  {
      color:  "#689199",
      //index: 6     
    },
    {
      color: "#246370", 
      //legendIndex: 9
    },
    {
      color:"#FFDA80", 
      //legendIndex: 1
    },
    {
      color:"#FABD24",
      //legendIndex: 4
    },
    {
      color:"#CD9C00",
      //legendIndex: 7
    },
    {
      color:"#7F5F1A",
      //legendIndex: 10
    },
    {
      color:"#ECE1D0",
      //legendIndex: 2
    },
    {
      color:"#C4AB91",
      //legendIndex: 5
    },
    {
      color:"#9E7C59",
      //legendIndex: 8
    }
  ],
  chart: {    
    /*marginBottom: 75,
    marginTop: 75,*/
    type: "column"
  }
	}
}());

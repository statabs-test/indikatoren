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
    max: 2000,
      labels: {
      format: "{value:,.0f}"
    },
    reversedStacks: true
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} GWh</b> ({point.percentage:,.1f}%)<br/>',
    footerFormat: 'Total: <b>{point.total:,.0f} GWh</b><br/>'
 },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    alignColumns: false,
    //itemWidth: 300,
    itemStyle: {
      fontWeight: "normal"
    }
  },
  series: [
    {
      color: "#A8C3CA"  
    },
    {
      color:  "#689199"
    },
	  {
      color:  "#246370"  
    },
    {
      color: "#FF8028"
    },
    {
      color:"#DC440E"
    },
    {
      color:"#B00000"
    },
    {
      color:"#661200"
    }/*,
    {
      color:"#E7CEE2"
    }*/
  ],
  chart: {    
    /*marginBottom: 75,
    marginTop: 75,*/
    type: "column",
    width: 665
  }
	}
}());

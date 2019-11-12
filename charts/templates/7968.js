(function(){
    return {
    xAxis: {
        type: "category", 
        labels: {
            formatter: undefined/*,
            align: "left"*/
        }
    },
    yAxis: {
        tickInterval: null,
        reversedStacks: false,
        labels:
    {
        format: "{value:,.0f}%"
    }
    },   
    series: [
        {
        color: "#923F8D"
        },
        {
        color: "#FF8028"
        },
        {
        color: "#73B97C"
        },      
    ],        
    legend: {
        layout: "horizontal",
        verticalAlign: "top",
        itemMarginBottom: 5,     
        align: "left",
        //"x": 145,
        //"y": 70,
        itemWidth: 250,
        itemStyle: {
            fontWeight: "normal"
        }
    },      
    chart:
    {
        height: 500,
        inverted: true
    },
    plotOptions: {
        series: {
          groupPadding: 0.1
        }
      },
    tooltip: {
        footerFormat: '\u25CF Total: <b>{point.total:,.0f}</b><br/>'
     },
	}
}());
 
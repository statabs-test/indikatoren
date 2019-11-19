(function(){
    return {
    xAxis: {
        type: "category", 
        labels: {
            formatter: undefined,
            style: {
                fontSize: "8px"
            },
        }
    },
    yAxis: {
        tickAmount: 10,
        //tickInterval: null,
        reversedStacks: false
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
        x: -1, // ***
        //"x": 145,
        //"y": 70,
        itemWidth: 250,
        itemStyle: {
            fontWeight: "normal"
        }
    },      
    chart:
    {
        height: 350, // ***
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
 
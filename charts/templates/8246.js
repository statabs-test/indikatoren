(function(){
    return {
        series: [
            {
                color: "#007A2F",
                index: 0,
                legendIndex: 0 
            },
            {
                color: "#73BA7C",
                index: 1,
                legendIndex: 1 
            },
            {
                color: "#FFBB58",
                index: 2,
                legendIndex: 2 
            },
            {
                color: "#FF8028",
                index: 3,
                legendIndex: 3
            },
            {
                color: "#C8C8C8",
                index: 4,
                legendIndex: 4 
            }        
    ],
    xAxis: {
        type: "category",
        labels: {
           align: "left",
            x: -160,
            useHTML: true,
            style: {
                whiteSpace: 'nowrap'
            },
            formatter: function() {
                return this.value.replace(/^\.\s+/g, "&nbsp; &nbsp; &nbsp;")
                .replace("Weiblich", "&nbsp; &nbsp; &nbsp; Weiblich")
                ;
            },
        } 
    },
    tooltip: {
        headerFormat: "<span style=font-size: 10px>{point.key}</span><br/>"
    },  
    yAxis:{
        tickInterval: 20,
        max: 100,
        labels:{
            type: "category",
            rotation: 0,
        }
    },
    chart: {     
        marginLeft: 170,
        inverted: true,
        height: 600,
     }
	}
}());

 
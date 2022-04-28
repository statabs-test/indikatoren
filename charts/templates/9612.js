(function(){
    return {
        chart: {
            polar: true,
            type: 'line'
        },
    
        xAxis: {
            categories: ['Zufuhr voll', 'Abfuhr voll', 'Zufuhr leer', 'Abfuhr leer'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            labels:{
                //enabled: false
            },
            tickAmount: 6,
            gridLineInterpolation: 'circle',
            lineWidth: 0,
            min: 0
        },
    
        "tooltip": {
            "shared": false,
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> TEU<br/>'
        },
    
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 5,
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
    
        series: [{
            pointPlacement: 'on',
            color: "#FABD24",
            dashStyle: 'shortdash',
            marker:{
                symbol: "circle",
                enabled: false
            }, legendIndex: 2
        }, {
            pointPlacement: 'on',
            color: "#68AB2B",
            marker:{
                symbol: "circle",
                enabled: false
            }, legendIndex: 1
        },
        {
            pointPlacement: 'on',
            color: "#0A3B19",
            marker:{
                symbol: "circle",
                enabled: false
            }, legendIndex: 0
        }],
    
    };
}());


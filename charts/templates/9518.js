(function(){
    return {
        chart: {
            polar: true,
            type: 'column'
        },
       /* pane: {
            size: '85%'
        },*/
    
        legend: {
            enabled: false,
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },
    
        xAxis: {
            tickmarkPlacement: 'on'
        },
    
        yAxis: {
            min: 0,
            max: 150000,
            endOnTick: false,
            showLastLabel: true,
            reversedStacks: false
        },
    
    
        plotOptions: {
            series: {
                
                //pointWidth: 2,
              //  stacking: 'normal',
               shadow: false,
                groupPadding: 0,
                pointPadding:0,
                pointPlacement: 'on'
            }
        },
        "series": [
            {"color": "#68AB2B"},
            {"color": "#68AB2B"}, 
            {"color": "#68AB2B"},
            {"color": "#68AB2B"},
            {"color": "#FF8028"},
            {"color": "#FF8028"}, 
            {"color": "#FF8028"},
            {"color": "#FF8028"},
            {"color": "#FF8028"}, 
            {"color": "#FF8028"},
            {"color": "#FF8028"},
            {"color": "#FF8028"}, 
            {"color": "#FF8028"},
            {"color": "#FF8028"},
            {"color": "#FF8028"}, 
            {"color": "#FABD24"},
            {"color": "#FABD24"},
            {"color": "#FABD24"},
            {"color": "#FABD24"},
            {"color": "#FABD24"},
            {"color": "#FABD24"},
            {"color": "#FABD24"},
            {"color": "#FABD24"},
            {"color": "#FABD24"},
            {"color": "#008AC3"},
            {"color": "#008AC3"}
            
            
            ],
}
}());


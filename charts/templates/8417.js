(function () {
    return {
        chart: {
            spacingTop: 15,
            //type: 'area'
        },
        xAxis: {
            min: "2000-12-31",
            max: "2018-12-31",
            endOnTick: true,
            startOnTick: true,
            showFirstLabel: true,
            showLastLabel: true
        },
        yAxis: {
            showLastLabel: true,
            endOnTick: true,
            labels: {
                format: '{value:,.0f}'
            }
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false, //null,
                    radius: 4
                }
            }
        },
        rangeSelector: {
            enabled: false
        },
        navigator: {
            enabled: false
        }
    };
}());


(function () {
    return {
        title: {
            useHTML: true
        },
        subtitle: {
            useHTML: true
        },
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
            tickAmount: 6,
            labels: {
                format: "{value:,.0f}"
            },
            reversedStacks: true
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} m<sup>2</sup></b><br/>',
            //footerFormat: 'Total: <b>{point.total:,.1f} GWh</b><br/>'
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
                color: "#A8C3CA",
            },
            {
                color: "#246370",
            },
        ],
        chart: {
            /*marginBottom: 75,
            marginTop: 75,*/
            type: "column"
        },
        exporting: {
            allowHTML: true,
        },
    }
}());

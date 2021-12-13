(function () {
    return {
        "yAxis": {
            "labels": {
                "format": "{value:,.0f}%",
            },
        },
        "xAxis": {
            "type": "category"
        },
        "legend": {
            "enabled": false
        },
        "series": [
            {
                "color": "#FFBB58"
            }
        ],
        "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}%</b><br/>'
        },
        "chart": {
            "type": "column"
        },
        plotOptions:{
            series: {
                pointPadding: 0.2
            }
        }
    };
}());
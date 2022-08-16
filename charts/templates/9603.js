(function () {
    return {
        "xAxis": {
            tickInterval: 1,
            type: "category"
        },
        "yAxis": {
            tickAmount: 9,
            "labels": {
                "format": "{value:,.0f}"
            }
        },
        "tooltip": {
            useHTML: true,
            "pointFormatter": function () {
                if (this.color == '#FABD24') {
                    return '<span style="color:' + this.color + '">\u25CF</span> ' + 'Gesamtumschlag: <b>' + Highcharts.numberFormat((this.y * 100), 0) + '</b><br/><b>';
                }
                else if (this.y < 0) {
                    return '<span style="color: #B00000">\u25CF</span> ' + 'Veränderung gegenüber Vorjahr: <b>' + Highcharts.numberFormat((this.y * 100), 0) + '</b><br/><b>';

                }
                else {
                    return '<span style="color:' + this.color + '">\u25CF</span> ' + 'Veränderung gegenüber Vorjahr: <b>' + Highcharts.numberFormat((this.y * 100), 0) + '</b><br/><b>';

                }
            }
        },
        series: [{
            upColor: '#68AB2B',
            color: '#B00000',
        }],
        "data": {
            "seriesMapping": [
                {
                    x: 0, y: 1, isSum: 2, color: 3
                }
            ]
        },
        "legend": {
            "enabled": false,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 5,
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "plotOptions": {
            waterfall: {
                pointPadding: 0
            }
        },
        chart: {
            type: 'waterfall'
        },
    }
}());
(function () {
    return {
        "xAxis": {
            "tickInterval": 1,
        },
        "yAxis": {
            "labels": {
                "format": "{value:,.0f}",
                "formatter": function () {
                    return Highcharts.numberFormat((this.value * 100), 0) + '%';
                },
            }

        },
        tooltip: {
            "pointFormatter": function () {
                return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y * 100), 1) + '% </b><br/><b>'
            },

        },
        "series": [
            { "color": "#73B97C", index: 1 },
            //{ "color": "#007A2F ", index: 2 },

        ],
        "legend": {
            "enabled": true,
            //"x": 45,
            //"y": 35,
            "itemWidth": 140,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 5,
            "align": "left",
            "itemStyle": {
                "fontWeight": "normal"
            }
        },
        "plotOptions": {
            "line": {
                "marker": {
                    "enabled": false,
                    "symbol": "circle",
                }
            }
        }
    }
}());


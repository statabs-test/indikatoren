(function () {
    return {
        "xAxis": {
            "tickInterval": 1
        },
        "yAxis": {
            "labels": {
                "format": "{value:,.0f}"
            }
        },
        "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>'
        },
        "series": [
            {
                "color": "#999999",
                legendIndex: 2,
            }, /* grau */
            {
                "color": "#007a2f",
                legendIndex: 1,
            }, /* grün */
            {
                "color": "#672773",
                legendIndex: 0,
            }, /* blau */
        ],
        "legend": {
            "enabled": true,
            //"x": 45,
            //"y": 35,
            //"itemWidth": 150,
            //"itemMarginBottom": 5,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            alignColumns: false,
        },
        "plotOptions": {
            "line": {
                //"connectNulls": true,
            }
        }
    };
}());

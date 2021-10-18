(function () {
    return {
        "chart": {
            "type": "line"
        },
        "plotOptions": {
            "series": {
                borderWidth: 0,
            }
        },
        subtitle: {
            useHTML: true
        },
        "yAxis": [
            {
                gridLineColor: '#B9CFD7',
                gridLineWidth: 0.5,
                "title": {
                    enabled: false
                },
                "labels": {
                    useHTML: true,
                    "format": "{value:,.0f}",
                    "style": {
                        "color": "#000000"
                    }
                },
                "min": 0
            },
            {
                gridLineColor: '#B9CFD7',
                gridLineWidth: 0.5,
                //tickInterval: 10,
                "title": {
                    enabled: false
                },
                "labels": {
                    "format": "{value:,.0f}",
                    "style": {
                        "color": "#000000"
                    }
                },
                "min": 0,
                "opposite": true
            }
        ],
        "xAxis": {
            "tickInterval": 1
        },
        "legend": {
            "enabled": true,
            "layout": "horizontal",
            "verticalAlign": "top",
            "align": "left",
            alignColumns: true,
            "itemMarginBottom": 5,
            //itemWidth: 200
        },
        "series": [
            {
                "color": "#cd9c00",
                "index": 0,
                zIndex: 2,
                "type": "line",
                marker: {
                    enabled: false
                },
                tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
            },
            {
                "color": "#7f5f1a",
                "index": 1,
                zIndex: 2,
                "type": "line",
                marker: {
                    enabled: false
                },
                tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
            },
            {
                "color": "#b375ab",
                "index": 2,
                zIndex: 1,
                "type": "column",
                "yAxis": 1,
                tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
            },

        ]
    }
}());

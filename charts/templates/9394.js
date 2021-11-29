(function () {
    return {
        "chart": {
            "type": "column"
        },
        plotOptions:{
            series: {
                marker: {
                    enabled: false
                }
            }
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
            "itemMarginBottom": 5,
            //itemWidth: 200
        },
        tooltip: {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>'
        },
        "series": [
            {
                "color": "#DC440E",
                "index": 0,
                zIndex: 2,
                //"type": "line",
               // tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
            },
            {
                "color": "#FABD24",
                "index": 1,
                zIndex: 2,
               // tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>' }
            },
            {
                "color": "#246370",
                "index": 2,
                zIndex: 3,
                "type": "line",
                "yAxis": 1,
              //  tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
            },

        ]
    }
}());

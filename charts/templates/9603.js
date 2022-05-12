
    (function () {
        return {
            "xAxis": {
                tickInterval: 1,
                type: "category"
            },
            "yAxis": {
                "labels": {
                    "format": "{value:,.0f}"
                }
            },
            "tooltip": {
                "shared": false,
                "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            "series": [
                {
                    upColor: "#68AB2B",
                    color: "#B00000",

                    "data": [
                        {
                            name: "2012",
                            y: 7210548,
                            isSum: true
                        },
                        {
                            name: "2013",
                            y: -380864
                        },
                        {
                            name: "2014",
                            y: -847594
                        },
                        {
                            name: "2015",
                            y: 351748
                        },
                        {
                            name: "2016",
                            y: -437335
                        },
                        {
                            name: "2017",
                            y: -106349
                        },
                        {
                            name: "2018",
                            y: -1092173
                        },
                        {
                            name: "2019",
                            y: 1367253
                        },
                        {
                            name: "2020",
                            y: -938454
                        },
                        {

                            name: "2021",
                            y: 5407266,
                            isSum: true
                        }
                    ]
      
    }],

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
            },
            chart: {
                type: 'waterfall'
            },
        }
    }());
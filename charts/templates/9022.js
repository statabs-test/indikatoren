(function () {
    return {
        "yAxis": [{
            min: -20,
            max: 30,
            tickInterval: 5,
            tickAmount: 6,
            alignTicks: true,
            title: {
                text: null,
                "color": "#000000",
                "fontSize": null
            },
            "labels": {
                "format": "{value:,.0f}",
                style: {
                    color: "black",
                },
            },

        },
        {
            min: -160,
            max: 240,
            tickInterval: 5,
            tickAmount: 6,
            alignTicks: true,
            "title": {
                "style": {
                    "color": "#000000",
                    "fontSize": null
                },
                "text": null
            },
            "labels": {
                "format": "{value:,.0f}",
                style: {
                    color: "black",
                },
            },
            "opposite": true
        }
        ],
        "xAxis": {
            min: 1,
            "tickInterval": 1,
            labels: {step:3}
        },
        "legend": {
            enabled: true,
            y: -40,
            layout: "horizontal",
            verticalAlign: "top",
            itemMarginBottom: 5,
            align: "right",
            //itemWidth: 200,
            itemStyle: {
                fontWeight: "normal",
                width: 40,

            },
            width: 300,
            itemWidth: 50,
            symbolRadius: 0,
            labelFormatter: function () {
                //remove text before year on each item with odd index
                return this.name.split(" ").slice(0, 1).toString();

            },
            title: {
                text: 'Wöchentlich:<br/>Kumuliert (rechte Skala):',
                style: {
                    fontWeight: 'normal', 
                    lineHeight: 18
                }
            },
        },

        "series": [
            {
                "color": "#FFBB58", // 2015 kummuliert
                "index": 0,
                "type": "line",
                "yAxis": 1,
                visible: false,
                "marker": {
                    "enabled": false
                },
                legendIndex: 6,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
                },
            },
            {
                "color": "#FFBB58", // 2015 wöchentlich
                "index": 1,
                "type": "column",
                visible: false,
                pointPadding: 0,
                borderWidth: 0,
                legendIndex: 0,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
                },
            },
            {
                "color": "#A8C3CA", // 2016 kumuliert
                "index": 1,
                "type": "line",
                "yAxis": 1,
                visible: false,
                "legendIndex": 7,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
                },
                "marker": {
                    "enabled": false
                },
            },
            {
                "color": "#A8C3CA", // 2016 wöchentlich
                "index": 0,
                "type": "column",
                visible: false,
                pointPadding: 0,
                borderWidth: 0,
                //"pointWidth": "8",
                legendIndex: 1,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
                },
            },
            {
                "color": "#B00000", // 2017 kumuliert
                "index": 1,
                "type": "line",
                "yAxis": 1,
                visible: false,
                "marker": {
                    "enabled": false
                },
                legendIndex: 8,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
                },
            },
            {
                "color": "#B00000", // 2017 wöchentlich
                "index": 0,
                "type": "column",
                visible: false,
                pointPadding: 0,
                borderWidth: 0,
                legendIndex: 2,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
                },
            },
            {
                "color": "#246370", // 2018 kumuliert
                "index": 1,
                "type": "line",
                "yAxis": 1,
                visible: false,
                "legendIndex": 9,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
                },
                "marker": {
                    "enabled": false
                },
            },
            {
                "color": "#246370", // 2018 wöchentlich
                "index": 0,
                "type": "column",
                visible: false,
                pointPadding: 0,
                borderWidth: 0,
                //"pointWidth": "8",
                legendIndex: 3,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
                },

            },
            {
                "color": "#923f8d", // 2019 kumuliert
                "index": 1,
                "type": "line",
                "yAxis": 1,
                visible: true,
                "marker": {
                    "enabled": false
                },
                legendIndex: 10,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
                },
            },
            {
                "color": "#923f8d", // 2019 wöchentlich
                "index": 0,
                "type": "column",
                visible: true,
                pointPadding: 0,
                borderWidth: 0,
                legendIndex: 4,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
                },
            },
            {
                "color": "#FF8028", // 2020 kumuliert
                "index": 1,
                "type": "line",
                "yAxis": 1,
                visible: true,
                "legendIndex": 11,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
                },
                "marker": {
                    "enabled": false
                },
            },
            {
                "color": "#FF8028", // 2020 wöchentlich
                "index": 0,
                "type": "column",
                visible: true,
                pointPadding: 0,
                borderWidth: 0,
                //"pointWidth": "8",
                legendIndex: 5,
                "tooltip": {
                    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
                },

            },
        ],
        "tooltip": {
            //"shared": true
        },
        "chart": {
            "alignTicks": false,
            "events": {
                load: function () {

                    //move legend title
                    var title = this.legend.title;
                    title.translate(-150, 40);
                }
            }

        }
    };
}());
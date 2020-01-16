(function () {
    return {
        "series": [
            {
                "color": "#007A2F",
                "index": 0,
                "legendIndex": 5
            },
            {
                "color": "#73BA7C",
                "index": 1,
                "legendIndex": 4
            },
            {
                "color": "#FFBB58",
                "index": 2,
                "legendIndex": 3
            },
            {
                "color": "#FF8028",
                "index": 3,
                "legendIndex": 2
            },
            {
                "color": "#C8C8C8",
                "index": 4,
                "legendIndex": 1
            },
            {
                "color": "#6F6F6F",
                "index": 5,
                "legendIndex": 0
            }
        ],
        xAxis: {
            "type": "category",
            "labels": {
                align: "left",
                x: -115,
                useHTML: true,
                style: {
                    whiteSpace: 'nowrap'
                },
                "formatter": function () {
                    var tmp = "&nbsp;&nbsp;&nbsp;" + this.value;
                    return tmp.replace("&nbsp;&nbsp;&nbsp;*", "");
                }
            }
        },
        "legend": {
            "enabled": true,
            //"x": 45,
            //"y": 35,
            margin: 0,
            padding: 5,
            "itemWidth": 114,
            itemDistance: 1,
            "layout": "horizontal",
            "verticalAlign": "top",
            //"itemMarginBottom": 5,
            "align": "left"
        },
        yAxis: {
            tickInterval: 20,
            max: 100,
            labels: {
                "type": "category",
                rotation: 0,
            }
        },
        "chart": {
            marginLeft: 125,
            // marginTop: 120,
            marginRight: 25,
            "inverted": true,
            "height": 700,
        }
    }
}());


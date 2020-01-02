(function () {
    return {
        chart: {
            "inverted": true,
            width: 665
        },
        "xAxis": {
            "type": "category",
            reversed: false,
            "labels": {
                formatter: undefined
            }
        },
        "yAxis": {
            "tickInterval": 10,
            "reversedStacks": false,
            max: 100,
            "labels": {
                rotation: 0,
                y: 10
            }
        },
        "series": [
            {
                "color": "#256370"
            },
            {
                "color": "#71A3B5"
            },
            {
                "color": "#FFBB58"
            },
            {
                "color": "#FF8028"
            },
            {
                "color": "#C8C8C8"
            },
            {
                "color": "#8A8A8A"
            }
        ],
        "legend": {
            "layout": "vertical",
            "align": "right",
            "verticalAlign": "middle",
            "itemMarginBottom": 5,
            //"x": 145,
            //"y": 70,
            "itemWidth": 150
        }
    }
}());

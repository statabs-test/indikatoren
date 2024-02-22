
(function () {
    return {
        "chart": {
            marginLeft: 200,
            inverted: true,
            height: 415,
        },
        "series": [
            { "color": "#246370" }, // dunkelgrün
            { "color": "#FFBB58" }, // grün
            // { "color": "#C8C8C8"}, // grau
            { "color": "#6F6F6F" }, // grau
        ],
        "xAxis": {
            type: "category",
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            uniqueNames: true,
            tickLength: 0,
            title: {
                style: {
                    color: "#000000"
                }
            },
            labels: {
                rotation: 0,
                align: "left",
                x: -200,
                useHTML: true,
                style: {
                    color: "#000000",
                    whiteSpace: 'nowrap',
                    textOverflow: "none"
                },
                formatter: function () {
                    //indentation of labels, except category-titles
                    var tmp = "&nbsp;&nbsp;&nbsp;" + this.value;
                    return tmp.replace("&nbsp;&nbsp;&nbsp;*", "");
                }
            }
        },
        "yAxis": {
            tickInterval: 25,
        },
    }
}());

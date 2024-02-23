
(function () {
    return {
        "chart": {
            marginLeft: 200,
            inverted: true,
            height: 415,
        },
        "xAxis": {
            type: "category",
            labels: {
                rotation: 0,
                align: "left",
                x: -190,
                useHTML: true,
                style: {
                    color: "#000000",
                    whiteSpace: 'nowrap',
                    textOverflow: "none"
                },
                formatter: function () {
                    return this.value
                    .replace(" (z. B. Kleider, Elektronik)", "")
                    .replace(", Essen", "");
                }
            }
        },
        "yAxis": {
            tickInterval: 25,
        },
        legend: {
            reversed: false,
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
        },
        "series": [
            { "color": "#246370" }, // dunkelgrün
            { "color": "#FFBB58" }, // grün
            // { "color": "#C8C8C8"}, // grau
            { "color": "#6F6F6F" }, // grau
        ],
    }
}());

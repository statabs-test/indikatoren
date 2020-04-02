(function () {
    return {
        chart: {
            type: "column",
            marginRight: 10
        },
        plotOptions:{
            series: {
                borderWidth: 0
            }
        },
        yAxis: {
            tickAmount: 6,
        },
        xAxis: {
            tickPositioner: function () {
                var interval = 10,
                    ext = this.getExtremes(),
                    i = ext.dataMax,
                    pos = [i];
                while (i >= ext.dataMin) pos.unshift(i = i - interval);
                return pos;
            }
        },
        series: [{
            color: "#8b2223"
        }
        ],
    };
}());
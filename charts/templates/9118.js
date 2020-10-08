(function () {
    return {
        series: [
            { "color": "#71A3B5" }, // blau
            { "color": "#FABD24" }, // gelb
            { "color": "#C8C8C8" }, // hellgrau
            { "color": "#6F6F6F" }, // grau
        ],
        xAxis: {
            type: "category",
            labels: {
                "formatter": function () {
                    //add sum of observations of visible series to the axis label
                    var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
                        return val.visible;
                    });
                    var indexOfCurrentValue = this.axis.names.indexOf(this.value);
                    var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
                        return accumulator + series.yData[indexOfCurrentValue];
                    }, 0);
                    //use N if all series are visible, otherwise use n
                    var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';
                    //check for value that contains only spaces
                    return (this.value.replace(/\s/g, "") == "") ? this.value : this.value + '<br>(' + nString + sum + ')';
                }
            }
        },
        yAxis: {
            reversedStacks: false,
        },
        legend: {
            reversed: false,
            "layout": "horizontal",
            "verticalAlign": "top",
            "itemMarginBottom": 4,
            "align": "left",
            labelFormatter: function () {
                return this.name.replace("/", " /<br/>");
            }
        }
    };
}());
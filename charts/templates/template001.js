// call this in chart.events.load: function () {onLoadFunction(this);}
var onLoadFunction = function (chart) {

    //remove default function for credits-link
    chart.credits.element.onclick = function () { };

    //for top-left legends with no x defined: move legend to x position of first yAxis
    if (chart['legend']['options']['align'] == 'left' && chart['legend']['options']['verticalAlign'] == 'top' && chart['legend']['options']['x'] == 0) {
        chart.update({
            legend: {
                x: chart.yAxis[0].left - chart.spacingBox.x - chart.legend.padding
            }
        });
    }
};


(function () {
    return {
        chart: {
            borderColor: "#fbfbfb",
            backgroundColor: "#fbfbfb",
            width: 485,
            height: 415,
            spacing: [10, 10, 30, 10],
            style: {
                fontFamily: "Arial"
            },
            zoomType: "xy",
            panning: true,
            panKey: 'shift',
            events: {
                load: function () {
                    onLoadFunction(this);
                }
            }
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    style: {
                        fontSize: "10px"
                    }
                }
            }
        },
        title: {
            align: "left",
            style: {
                fontSize: "14px",
                fontWeight: "bold",
                color: "#000000"
            }
        },
        subtitle: {
            text: "",
            align: "left",
            style: {
                fontSize: "12px",
                fontWeight: "normal",
                color: "#000000"
            }
        },
        xAxis: {
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            tickLength: 0,
            uniqueNames: true,
            title: {
                style: {
                    color: "#000000"
                }
            },
            labels: {
                style: {
                    color: "#000000"
                }
            }
        },
        yAxis: {
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7',
            title: {
                style: {
                    color: "#000000",
                    fontSize: null
                },
                text: null
            },
            labels: {
                style: {
                    color: "#000000"
                }
            }
        },
        navigation: {
            menuItemStyle: {
                fontFamily: Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
                padding: '2px 10px'
            }
        },
        credits: {
            enabled: true,
            style: {
                color: "#000000",
                fontSize: "10px",
                cursor: "default"
            },
            position: {
                align: "left",
                verticalAlign: "bottom",
                x: 10
            }
        },
        legend: {
            symbolRadius: 0,
            itemStyle: {
                fontWeight: "normal"
            }
        }
    };
}());
// call this in chart.events.load: function () {onLoadFunction(this);}
var onLoadFunction = function (chart) {

    //remove default function for credits-link
    chart.credits.element.onclick = function () { };

    //square legends must be placed 3 pixels more to the left that lines, don't know why
    var squareLegendX = (chart.legend.allItems != undefined && chart.legend.allItems[0].options.type == 'column' ? 3 : 0);

    //for top-left legends with no x defined: move legend to x position of first yAxis
    if (chart['legend']['options']['align'] == 'left' && chart['legend']['options']['verticalAlign'] == 'top' && chart['legend']['options']['x'] == 0) {
        chart.update({
            legend: {
                x: chart.yAxis[0].left - chart.spacingBox.x - chart.legend.padding// - squareLegendX
            }
        });
    }
};


(function () {
    return {
        chart: {
            borderColor: "#fbfbfb",
            backgroundColor: "#fbfbfb",
            width: 320,
            height: 208,
            spacing: [2, 2, 2, 2], /*top, right, bottom and left */
            style: {
                fontFamily: "Arial"
            },
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
                        fontSize: "10px",
                        fontFamily: "Arial",
                        fontWeight: "normal",
                        color: "#000000"
                    }
                }
            }
        },
        title: {
            align: "left",
            style: {
                fontSize: "10px",
                fontWeight: "bold",
                color: "#000000"
            }
        },
        subtitle: {
            text: "",
            align: "left",
            style: {
                fontSize: "10px",
                fontWeight: "normal",
                fontFamily: "Arial",
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
                    fontSize: "10px",
                    color: "#000000"
                }
            }
        },
        yAxis: {
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7',
            title: {
                text: '',
                style: {
                    fontSize: "10px",
                    color: "#000000"
                }
            },
            labels: {
                y: 3,
                style: {
                    fontSize: "10px",
                    color: "#000000"
                }
            }
        },
        credits: {
            enabled: true,
            position: {}
        },
        legend: {
            padding: 0,
            symbolRadius: 0,
            itemMarginBottom: 2,
            itemStyle: {
                fontSize: "10px"
            }
        },
        dataLabels: {
            enabled: false,
            style: {
                fontSize: '10px',
            }
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        }
    };
}());
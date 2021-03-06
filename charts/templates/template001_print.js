(function () {
    return {
        chart: {
            borderColor: "#fbfbfb",
            backgroundColor: "#fbfbfb",
            width: 320,
            height: 208,
            spacing: [2, 2, 2, 2], /*top, right, bottom and left */
            style: {
                fontFamily: "Arial",
                fontSize: '10px',
                color: "#000000"
            },
            zoomType: "xy",
            events: {
                load: function () {
                    this.credits.element.onclick = function () { };

                    //square legends must be placed 3 pixels more to the left that lines, don't know why
                    var squareLegendX = (this['options']['chart']['type'] == 'line' ? 0 : 3);

                    //add right-margin if legend is top to allow space for axis-labels
                    if (this['legend']['options']['layout'] == 'horizontal' && this.yAxis[1] == undefined) {
                        this.update({
                            chart: {
                                marginRight: 15
                            }
                        });
                    }
                    if (this['legend']['options']['enabled'] == false || this['legend']['options']['layout'] == 'vertical') {
                        this.update({
                            chart: {
                                marginTop: 7
                            }
                        });
                    }

                    //for top-left legends with no x defined: move legend to x position of first yAxis
                    if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0) {
                        this.update({
                            legend: {
                                x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding - squareLegendX
                            }
                        });
                    }

                    // format second y-Axis (if exists)
                    if (this.yAxis[1]) {
                        this.update({
                            yAxis: [{
                                gridLineColor: '#B9CFD7',
                                gridLineWidth: 0.5,
                                lineColor: '#B9CFD7',
                                title: {
                                    style: {
                                        fontSize: '10px',
                                        color: "#000000"
                                    },
                                    text: ''
                                },
                                labels: {
                                    y: 3,
                                    style: {
                                        fontSize: '10px',
                                        color: "#000000"
                                    }
                                }
                            },
                            {
                                gridLineColor: '#B9CFD7',
                                gridLineWidth: 0.5,
                                lineColor: '#B9CFD7',
                                title: {
                                    style: {
                                        fontSize: '10px',
                                        color: "#000000"
                                    },
                                    text: ''
                                },
                                labels: {
                                    y: 3,
                                    style: {
                                        fontSize: '10px',
                                        color: "#000000"
                                    }
                                }
                            }]
                        });
                    }
                }
            }
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    style: {
                        fontSize: "10px",
                        color: "#000000",
                        fontFamily: "Arial",
                        fontWeight: "normal",
                    }
                }
            }
        },
        title: {
            style: {
                fontSize: "10px",
                color: "#000000",
                fontWeight: "bold",
            },
            align: "left"
        },
        subtitle: {
            style: {
                fontSize: '10px',
                color: "#000000",
                fontWeight: "normal",
                fontFamily: "Arial",
            },
            text: "",
            align: "left"
        },
        xAxis: {
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            uniqueNames: true,
            title: {
                style: {
                    color: "#000000"
                }
            },
            labels: {
                style: {
                    fontSize: '10px',
                    color: "#000000",
                    textOverflow: 'none',
                }
            },
            tickLength: 0,
        },
        yAxis: {
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7',
            title: {
                style: {
                    fontSize: '10px',
                    color: "#000000",
                },
                text: '',
            },
            labels: {
                y: 3,
                style: {
                    fontSize: '10px',
                    color: "#000000",
                }
            }
        },
        legend: {
            padding: 0,
            symbolRadius: 0,
            itemMarginBottom: 2,
            itemStyle: {
                fontSize: "10px",
                color: "#000000",
                fontWeight: "normal",
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
                fontSize: "10px",
                color: "#000000",
                cursor: "default",
            },
            position: {
                align: "left",
                verticalAlign: "bottom",
                x: 10
            }
        },
        dataLabels: {
            enabled: false,
            style: {
                fontSize: "10px",
                color: "#000000",
            }
        }
    };
}());
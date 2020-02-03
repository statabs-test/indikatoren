(function () {
    return {
        "chart": {
            "events": {
                "load": function () {
                    this.credits.element.onclick = function () { };
                    //for top-left legends with no x defined: move legend to x position of first yAxis
                    if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0) {
                        this.update(
                            {
                                legend: {
                                    x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                                }
                            }
                        );
                    }
                }
            },
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "inverted": true,
            "width": 485,
            "height": 700,
            marginLeft: 170,
            marginRight: 25,
            "spacingBottom": 30,
            "zoomType": "xy",
            "type": "column",
            "style": {
                "fontFamily": "Arial"
            }
        },
        "title": {
            "style": {
                "fontSize": "14px",
                "fontWeight": "bold",
                "color": "#000000"
            },
            "align": "left"
        },
        "subtitle": {
            "style": {
                "fontSize": "12px",
                "color": "#000000"
            },
            "align": "left"
        },
        "navigation": {
            "menuItemStyle": {
                "fontFamily": Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
                "padding": '2px 10px'
            }
        },
        "plotOptions": {
            "series": {
                borderWidth: 0,
                "dataLabels": {
                    "style": {
                        "fontSize": "10px"
                    }
                },
                "stacking": "percent"
            }
        },
        "yAxis": {
            "tickInterval": 20,
            "reversedStacks": false,
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7',
            "title": {
                "style": {
                    "color": "#000000",
                    "fontSize": null
                },
                "text": null
            },
            max: 100,
            "labels": {
                "format": "{value}%",
                //"type": "category",
                rotation: 0,
                "style": {
                    "color": "#000000"
                }
            }
        },
        "xAxis": {
            type: "category",
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
            "uniqueNames": true,
            "tickLength": 0,
            "title": {
                "style": {
                    "color": "#000000"
                }
            },
            "labels": {
                "rotation": 0,
                align: "left",
                x: -160,
                useHTML: true,
                "style": {
                    "color": "#000000",
                    "width": 1,
                    whiteSpace: 'nowrap',
                    "textOverflow": "none"
                },
                "formatter": function () {
                    var tmp = "&nbsp;&nbsp;&nbsp;" + this.value;
                    return tmp.replace("&nbsp;&nbsp;&nbsp;*", "");
                }
            }
        },
        "tooltip": {
            "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
            "shared": false
        },
        "credits": {
            "enabled": true,
            "style": {
                "color": "#000000",
                "fontSize": "10px",
                "cursor": "default"
            },
            "position": {
                "align": "left",
                "verticalAlign": "bottom",
                "x": 10
            }
        },
        "legend": {
           "enabled": true,
            margin: 0,
            padding: 5,
            "itemDistance": 10,
            "layout": "horizontal",
            "verticalAlign": "top",
            "reversed": true,
            "itemMarginBottom": 5,
            "align": "left",
            "useHTML": false,
            "itemStyle": {
                "fontWeight": "normal",
                "width": 150,
                textOverflow: null
            },
            "symbolRadius": 0,
            "labelFormatter": function () {
                return this.name.replace('/ ', '/<br/>');
            }
        }
    };
}());
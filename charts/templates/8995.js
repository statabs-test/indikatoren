(function () {
    return {
        plotOptions: {
            arearange: {
                lineWidth: 0.5,
                fillOpacity: 0.2,
                zIndex: -1,
                /*legend: {
                    fillOpacity: 0.2
                },*/
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
                marker: { states: { hover: { enabled: false } } }
            },
            line: {
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
            }
        },

        tooltip: {
          // shared: true,

            xDateFormat: 'Woche vom %A, %d.%m.%Y',
            formatter: function (e) {
                //use shared tooltip for group of series only (instead of for all)
                //source: https://jsfiddle.net/BlackLabel/gq1d1aba/

                //console.log(this.point.series);

                var point = this.point,
                    series = point.series,
                    chart = series.chart,
                    correspondingSeries = series.linkedSeries[0] || series.linkedParent,
                    linePoint,
                    arearangePoint,
                    correspondingPoint;
                if (correspondingSeries === undefined) return e.defaultFormatter.call(this, e);
                else {
                    // unselect previously selected point
                    if (chart.extraHoveredPoint) {
                        chart.extraHoveredPoint.setState('');
                    }

                    // find corresponding point
                    if (correspondingSeries) {
                        correspondingPoint = correspondingSeries.points[point.index];
                        correspondingPoint.setState('hover');
                        chart.extraHoveredPoint = correspondingPoint;
                    }

                    // identify type of points for formatting purposes
                    if (point.low !== undefined) {
                        arearangePoint = point;
                        linePoint = correspondingPoint;
                    } else {
                        arearangePoint = correspondingPoint;
                        linePoint = point;
                    }
                    //console.log(this);
                    if (linePoint.y === null) linePoint.y = '';
                    arearangePoint.series.name = arearangePoint.series.name.replace('Untere Grenze', '');

                    return "<span style='font-size: 10px'>" + Highcharts.dateFormat('Woche vom %A, %d.%m.%Y', this.x) + 
                        "</span></span><br><span style='color:" + linePoint.series.color + "'>●</span> " + 
                        linePoint.series.name + ": <b>" + linePoint.y + "</b><br>" +
                        arearangePoint.series.name + ": <b>" + arearangePoint.low + "</b> bis <b>" + arearangePoint.high + "</b>";
                }
            }
            
        },

        "series": [
            {
                id: "a",
                "color": "#71A3B5",
                zIndex: 10,
                legendIndex: 2
            },
            {
                id: "b",
                "color": "#71A3B5",
                //lineWidth: 0.5,
                dashStyle: 'ShortDot',
                zIndex: 5,
                legendIndex: 3
                //linkedTo:"eins",
            },
            {
                id: "c",
                "color": "#256370",
                type: 'arearange',
                linkedTo: "a",
                zIndex: 2,
            },
            {
                id: "d",
                "color": "#FF8028",
                zIndex: 9,
                legendIndex: 0
            },
            {
                id: "e",
                "color": "#FF8028",
                //lineWidth: 0.5,
                dashStyle: 'ShortDot',
                zIndex: 4,
                legendIndex: 1
                //linkedTo:"zwei",
            },
            {
                id: "f",
                "color": "#FFBB58",
                type: 'arearange',
                linkedTo: "d",
                zIndex: 1
            },


        ],
        "xAxis": {
            "type": "datetime",
            //min: 30,
            /*type: 'datetime',
            startOnTick: true,
            endOnTick: true,
            //min: 1546819200000,
            dateTimeLabelFormats: {
              week: '%e.%b'
            },
            */
        },
        /*
                yAxis: {
                            tickInterval: 10,
                            max: 70
                },
        */
        navigator: {
            enabled: false
        },
        legend: {
            enabled: true,
            layout: "horizontal",
            verticalAlign: "top",
            align: "left",
            alignColumns: false,
            itemWidth: 160,
            itemStyle: {
                textOverflow: undefined,
                whiteSpace: 'nowrap',
            }
        }
    }
}());


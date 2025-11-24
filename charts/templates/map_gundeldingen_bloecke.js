//Simple Wohnviertel Choropleth Map without ranks and with simple tooltip

/* 
    global Highcharts
    global rheinDataEPSG2056
    global scalebarDataEPSG2056
    global geojson_wohnviertelEPSG2056
*/

(function () {
    return {
        "chart": {
            events: {
                load: function () {
                    this.credits.element.onclick = function () { };
                }
            },
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 485,
            "height": 415,
            "spacingBottom": 45,
            "style": {
                "fontFamily": "Arial"
            },
            "type": "map",
            "inverted": false
        },
        "title": {
            "style": {
                "fontSize": "14px",
                "fontWeight": "bold",
                "fontFamily": "Arial",
                "color": "#000000"
            },
            "align": "left"
        },
        "subtitle": {
            "style": {
                "fontSize": "12px",
                "fontWeight": "normal",
                "fontFamily": "Arial",
                "color": "#000000"
            },
            "text": "",
            "align": "left"
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
        "colorAxis": {
            "min": 0,
            "gridLineColor": "#fbfbfb",
            "gridLineWidth": 1,
            "labels": {
                "style": { "color": "black", "cursor": "default", "fontSize": "11px", "textOverflow": "none" }
            },
            "marker": {
                "color": "black"
            }
        },
        "mapNavigation": {
            "enabled": true,
            "buttonOptions": {
                "align": "right",
                "verticalAlign": 'top'
            }
        },
        "legend": {
            useHTML: false,
            "enabled": true,
            "align": "right",
            "floating": true,
            itemStyle: {
                fontWeight: 'normal'
            },
            "title": {
                "style": {
                    "fontWeight": "normal",
                    "fontSize": "12px"
                }
            }
        },
        /* series with fixed data that should be added to the series object before merging with csv data */
        beforeSeries: [
            {
                //Outline WOhnviertel if all choropleth shapes have been deselected through classed colorAxis, see https://forum.highcharts.com/highmaps-usage-f14/outline-shapes-hidden-by-click-onto-classed-coloraxis-t40837/
                name: "Outline",
                enableMouseTracking: false,
                color: '#ededed',
                borderWidth: 1,
                borderColor: '#fbfbfb',
                "animation": true,
                "mapData": geojson_gundeldingen_bloecke,
                "joinBy": ['GeoID', 'GeoID'],
                "keys": ['GeoID', 'value'],
                "states": {
                    "hover": {
                        "enabled": false,
                        "borderColor": "#BADA55",
                        "brightness": 0
                    }
                },
                "data": [
                    [61002, -999],
                    [61003, -999],
                    [61004, -999],
                    [61005, -999],
                    [61006, -999],
                    [61007, -999],
                    [61008, -999],
                    [61011, -999],
                    [61012, -999],
                    [61013, -999],
                    [61014, -999],
                    [61015, -999],
                    [61016, -999],
                    [61018, -999],
                    [61019, -999],
                    [61020, -999],
                    [61021, -999],
                    [61022, -999],
                    [61023, -999],
                    [61024, -999],
                    [61025, -999],
                    [62001, -999],
                    [62002, -999],
                    [62003, -999],
                    [62004, -999],
                    [62005, -999],
                    [62006, -999],
                    [62007, -999],
                    [62008, -999],
                    [62009, -999],
                    [62010, -999],
                    [62011, -999],
                    [62012, -999],
                    [62013, -999],
                    [62014, -999],
                    [62015, -999],
                    [62016, -999],
                    [62017, -999],
                    [62018, -999],
                    [62019, -999],
                    [62020, -999],
                    [62021, -999],
                    [62022, -999],
                    [63001, -999],
                    [63002, -999],
                    [63003, -999],
                    [63004, -999],
                    [63005, -999],
                    [63006, -999],
                    [63007, -999],
                    [63008, -999],
                    [63009, -999],
                    [63010, -999],
                    [63011, -999],
                    [63012, -999],
                    [63013, -999],
                    [63014, -999],
                    [63015, -999]
                ],
            }
        ],
        /* series with fixed data that should be added to the series object after merging with csv data */
        "afterSeries": [
            /*{
                "name": "Rhein",
                "animation": true,
                "data": rheinDataEPSG2056, 
                "color": "#008AC3",    
                "borderColor": "#fbfbfb"
            },*/
            {
                name: 'Massstab',
                animation: true,
                type: 'mapline',
                data: gundeldingen_scalebar,
                color: 'black',
                tooltip: {
                    pointFormatter: function () {
                        return '<br/>';
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return '300 m';
                    },
                    style: { fontSize: "12px", fontWeight: "normal", color: 'black' },
                    y: -10
                }
            }
        ],
        "tooltip": {
            formatter: function (args) {
                /*if (! this.point["Wohnviertel Id"]) {
                    //Rhein
                    return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
                }
                else {*/
                //Wohnviertel
                return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + '</span><br/>' +
                    this.point.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.point.value), 0) + '</b><br/>';
                //}
            }
        },

        customFunctions: {
            addLegendRectangle: function (chart, x, y, width, height, fill, cssClass) {
                return chart.renderer.rect(x, y, width, height).attr({
                    'stroke-width': 0,
                    fill: fill,
                    zIndex: 6,
                    class: cssClass
                }).add();
            },
        }

    };
}()
);

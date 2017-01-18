//Include the exporter module
const exporter = require('highcharts-export-server');


//Export settings 
var exportSettings = {
    type: 'svg',
    outfile: 'images/test.svg',
    options: 
    {
      "series": [
        {
          "marker": {
            "symbol": "circle",
            "enabled": true
          },
          "index": 0,
          "color": "#008AC3",
          "data": [
            [
              2005,
              187920
            ],
            [
              2006,
              187792
            ],
            [
              2007,
              188000
            ],
            [
              2008,
              189556
            ],
            [
              2009,
              190815
            ],
            [
              2010,
              190799
            ],
            [
              2011,
              192304
            ],
            [
              2012,
              193459
            ],
            [
              2013,
              195459
            ],
            [
              2014,
              196471
            ],
            [
              2015,
              197204
            ]
          ],
          "name": "Bevölkerungszahl am Jahresende"
        }
      ],
      "chart": {
        "events": {
          "load": function () {
                  this.credits.element.onclick = function() {}
              }
        },
        "borderColor": "#fbfbfb",
        "backgroundColor": "#fbfbfb",
        "zoomType": "xy",
        "width": 485,
        "height": 415,
        "spacingBottom": 45,
        "style": {
          "fontFamily": "Arial"
        },
        "type": "line",
        "forExport": true,
        "renderTo": "container-4132"
      },
      "title": {
        "style": {
          "fontSize": "14px",
          "fontWeight": "bold",
          "color": "#000000"
        },
        "align": "left",
        "text": "I.01.1.0023 Bevölkerung am Jahresende"
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
      "tooltip": {
        "shared": false
      },
      "yAxis": {
        "min": 0,
        "title": {
          "style": {
            "color": "#000000",
            "fontSize": null
          },
          "text": null
        },
        "labels": {
          "style": {
            "color": "#000000"
          },
          "format": "{value:,.0f}"
        }
      },
      "xAxis": {
        "labels": {
          "style": {
            "color": "#000000"
          }
        },
        "tickLength": 0,
        "tickInterval": 1
      },
      "credits": {
        "href": "http:\u002F\u002Fwww.statistik.bs.ch",
        "enabled": true,
        "style": {
          "color": "#000000",
          "fontSize": "10px",
          "cursor": "default"
        },
        "position": {
          "align": "left",
          "verticalAlign": "bottom",
          "x": 10,
          "y": -15
        },
        "text": "Quelle: Statistisches Amt Basel-Stadt, kantonale Bevölkerungsstatistik"
      },
      "legend": {
        "enabled": false,
        "layout": "vertical",
        "verticalAlign": "middle",
        "align": "right",
        "symbolRadius": 0
      },
      "plotOptions": {
        "series": {
          "dataLabels": {
            "enabled": true,
            "formatter": function () {
                var first = this.series.data[0];
                var last  = this.series.data[this.series.data.length - 1];
                if (this.point.y === first.y || this.point.y === last.y ) {
                  return Highcharts.numberFormat(this.point.y, 0, ",", " ");
                }
                return "";
              }
          }
        }
      },
      "exporting": {
        "filename": "I.01.1.0023"
      }
    }
};


//Set log level
exporter.logLevel(4);

//Set up a pool of PhantomJS workers
exporter.initPool({
    maxWorkers: 1
});

//Perform an export
/*
    Export settings corresponds to the available CLI arguments described
    above.
*/
exporter.export(exportSettings, function (err, res) {
    //The export result is now in res.
    //If the output is not PDF or SVG, it will be base64 encoded (res.data).
    //If the output is a PDF or SVG, it will contain a filename (res.filename).
    console.log('Successfully exported to ' + res.filename);

    //Kill the pool when we're done with it, and exit the application
    exporter.killPool();
    process.exit();
});




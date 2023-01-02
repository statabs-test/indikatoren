(function () {
    return {
        "chart": {
            "type": "line",
            events: {
              load: function () {
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
      
                this.series[1].points[this.series[1].points.length - 1].update({
                  dataLabels: {
                    enabled: true,
                    y: -5,
                    x: -50,
                    format: 'Zielwert 2035: {y}',
                    style: {
                      textOutline: false,
                    }
                  },
                  marker: {
                    enabled: true,
                    symbol: "circle"
                  }
                });
              }
            }
          },
        plotOptions: {
            series: {
                marker: {
                    enabled: false, //null,
                    radius: 4
                }
            }
        },
        xAxis: {
            endOnTick: true,
            startOnTick: true,
            showFirstLabel: true,
            showLastLabel: true,
        },
        yAxis: {
            showLastLabel: true,
            endOnTick: true,
            labels: {
                format: '{value:,.0f}'
            },
            opposite: false,
        },
        legend: {
            enabled: true,
            layout: "horizontal",
            verticalAlign: "top",
            align: "left",
        },
        tooltip: {
            xDateFormat: '%A, %e. %b. %Y',
        },

        "series": [
            {
                "color": "#008AC3",
            },
            {
                type: "line",
                dashStyle: 'ShortDash',
                "color": "#999999",

            }
        ],
        rangeSelector: {
            buttons:
                [
                    {
                        count: 20,
                        type: 'year',
                        text: '20 J'
                    },
                    {
                        count: 50,
                        type: 'year',
                        text: '50 J'
                    },
                    {
                        count: 100,
                        type: 'year',
                        text: '100 J'
                    },
                    {
                        type: 'all',
                        text: 'Alle J'
                    }
                ],
            buttonSpacing: 15,
            inputEnabled: false,
            selected: 0,
            inputDateFormat: '%Y',
            inputEditDateFormat: '%Y'
        }
    };
}());


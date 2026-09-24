(function () {
  return {
    chart: {
      type: "column",
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

          this.series[2].points[this.series[2].points.length - 1].update({
            dataLabels: {
              enabled: true,
              //y: -5,
              //x: -50,
              format: 'Zielwert: Rang {y:,.0f}',
              style: {
                textOutline: false,
                color: "#999999",
              }
            },
          });
        }
      }
    },
    plotOptions: {
      column: {
        threshold: 100,
        dataLabels: {
          enabled: true,
          format: 'Rang {y}'
        }
      }
    },
    xAxis: {
      tickInterval: 1
    },
    yAxis: [
      {
        min:0,
        max: 100,
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
          },
          formatter: function () {
            return this.value + "%";
          }

        }
      },
      {
        opposite: true,
        reversed: true,
        min: 0,
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
          format: "{value:,.0f}",
          style: {
            color: "#000000"
          },
        }
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    "series": [
      {
        "color": "#0091f7",
        yAxis: 1,
        legendIndex: 2
      },
      {
        type: "line",
        "color": "#0091f7",
        tooltip: {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
          "shared": false
        },
      },
      {
        "color": "#999999",
        yAxis: 1,
        showInLegend: false
      },

    ],
  }
}());

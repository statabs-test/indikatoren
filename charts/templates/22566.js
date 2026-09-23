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

          this.series[1].points[this.series[1].points.length - 1].update({
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
    "yAxis": {
      reversed: true,
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "series": [
      {
        "color": "#0091f7"
      },
      {
        "color": "#999999",
      },

    ],
  }
}());

(function () {
  return {
    "chart": {
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
              format: 'Zielwert {key}: {y}',
              style: {
                textOutline: false,
              }
            },
            marker: {
              enabled: true
            }
          });
        }
      }
    },
    "xAxis": {
      "tickInterval": 1,
      labels:{
        step: 1,
        rotation: -45
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    "series": [
      {
        "color": "#FFBB58", // Bevölkerung
        "type": "column",
      },
      {
        type: "line",
        dashStyle: 'ShortDash',
        "color": "#999999",
        marker: {
          enabled: false
        }
      }
    ],
  };
}());
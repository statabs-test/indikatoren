(function () {
  return {
    "chart": {
      "type": "column",
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
              format: 'Zielwert {key}: {y:,.1f}%',
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
      "type": "category",
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    },
    "series": [
      { "color": "#990300", "visible": true }, /* rot*/
      {
        type: "line",
        dashStyle: 'ShortDash',
        color: "#999999",
      }
    ],
  }
}());
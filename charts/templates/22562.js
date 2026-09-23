(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
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
              format: 'Zielwert 2035: {y:,.0f} kg<br>(30% Reduktion gegenüber 2019)',
              style: {
                textOutline: false,
                color: "#999999",
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
    "plotOptions": {
      "series": {
        "borderWidth": 0,
        "pointWidth": 10
      }
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f} kg",
      },
    },
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "align": "left",
      "verticalAlign": "top"
    },
    "series": [
      {
        "index": 2,
        "color": "#0091f7",
        "type": "column",
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} kg</b><br/>',
        }
      },
      {
        dashStyle: 'ShortDash',
        "color": "#999999",
      },
    ],

  }
}());

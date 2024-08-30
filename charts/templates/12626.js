(function () {
  return {
    subtitle: {
      useHTML: true
    },
    xAxis: {
      tickInterval: 1
    },
    "yAxis": {
      min:30,
      max:45,
      tickInterval: 5,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      useHTML: true,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f} m<sup>2</sup></b><br/>'
    },
    "series": [
      {
        "color": "#3c3c3c",
        "dashStyle": "ShortDash"
      },
      {
        "color": "#9E7C59"
      },
      {
        "color": "#FF8028"
      },
      {
        "color": "#923F8D"
      },
      {
        "color": "#689199"
      },
      {
        "color": "#FABD24",
        visible: true,
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      },
      labelFormatter: function() {
        return this.name.split("Wohnviertel ").slice(-1).toString(); 
    }
    },
    "plotOptions": {
      "line": {
        "connectNulls": true,
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    },
    chart: {
      events: {
          load: function() {
              // `this` refers to the chart instance
              this.series[5].update({
                  name: "Bezirk Friedmatt"
              });
    
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
          }
  }
}());

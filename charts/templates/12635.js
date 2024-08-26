(function () {
  return {
    "chart": {
      "type": "column",
      events: {
        load: function () {
          //set xAxis min in navigator
          this.xAxis[0].update({
            min: 2020
          });

          this.credits.element.onclick = function () { };
        }
      }
    },
    "yAxis": {
      tickInterval: 1,
      "labels": {
        "format": "{value:,.0f}",
      },
    },
    "xAxis": {
      tickInterval: 1
      //"type": "category",
    },
    "legend": {
      "enabled": true,
      "verticalAlign": "top",
      "align": "left"
    },
    "series": [
      { 
        "color": "#9E7C59" /*"#cd9c00" Pestalozzi*/ 
      },
      {
        "color": "#FF8028" /* "#689199" Kannenfeld*/
      },
      {
        "color": "#923F8D" /* "#662673" Landskron*/
      },
      {
        "color": "#689199" /* "#999" Lysbüchel*/
      },
      {
        "color": "#FABD24" /* "#b375ab" Friedmatt*/,
}
    ],
    "plotOptions": {
      series: {
        borderWidth: 0,
        marker: {
          enabled: true
        },
        showInNavigator: true
      }
    },
    subtitle: {
      useHTML: true
    },
    navigator: {
      enabled: true,
      top: 330,
      series: {
        type: 'column',
        pointRange: null
      },
      xAxis: {
        max: 2023.1,
        // tickInterval: 1,
        tickPositioner: function () {
          //use only every nth tick, starting with startingPoint
          const startingPoint = 1,
            step = 2,
            positions = [];
          for (let i = startingPoint; i < this.max; i += step) {
            positions.push(i)
          }
          return positions
        },
        labels: {
          //step: 1,
          rotation: 0,
          align: 'center',
          y: 15,
          style: {
            color: "#000000"
          },
          /*formatter: function () {
            // get year from chart axis label names
            return this.chart.xAxis[0].names[this.value].slice(0, 4);
          }*/
        },
      }
    },
  };
}());
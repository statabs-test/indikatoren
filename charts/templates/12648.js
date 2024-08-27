(function () {
  return {
    "plotOptions": {
      "column": {
        pointPadding: 0,
        groupPadding: 0,
        //borderWidth: 0,
        pointWidth: 5,
        stacking: "normal",
        showInNavigator: true
      }
    },
    "chart": {
      //"marginTop": 75,
      "type": "column",
      "inverted": false,
      events: {
        load: function () {
          //set xAxis min in navigator
          this.xAxis[0].update({
            min: 45
          });

          this.credits.element.onclick = function () { };
        }
      }
    },
    "xAxis": {
      min: 0,
      "type": "category",
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemDistance: 10
    },
    "series": [
      {"color": "#9E7C59", index: 5, legendIndex: 0, tooltip: {valueDecimals: 0},
      },
      {
        "color": "#C4AB91", index: 4, legendIndex: 1, tooltip: {
          valueDecimals: 0
        },
      },
      {
        "color": "#FFDA80", index: 3, legendIndex: 2, tooltip: {
          valueDecimals: 0
        },
      },
      {
        "color": "#C9D6DB", index: 2, legendIndex: 3, tooltip: {
          valueDecimals: 0
        },
      }/*,
      {
        "color": "#6F6F6F", index: 1, legendIndex: 4, tooltip: {
          valueDecimals: 0
        },
      },*/
      // {"color": "#ff8028", index: 4, legendIndex: 5},
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    },
    navigator: {
      enabled: true,
      top: 330,
      series: {
        type: 'column',
        stacking: 'normal',
        pointRange: null
      },
      xAxis: {
        //max: "2022",
        // tickInterval: 1,
        tickPositioner: function () {
          //use only every nth tick, starting with startingPoint
          const startingPoint = 1,
            step = 5,
            positions = [];
          for (let i = startingPoint; i < this.max; i += step) {
            positions.push(i)
          }
          return positions
        },
        labels: {
          step: 1,
          rotation: 0,
          align: 'center',
          y: 15,
          style: {
            color: "#000000"
          },
          formatter: function () {
            // get year from chart axis label names
            return this.chart.xAxis[0].names[this.value].slice(0, 4);
          }
        },
      }
    },



  }
}());

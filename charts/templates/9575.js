(function () {
  return {
    "chart": {
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column",
      events: {
        load() {
          this.showHideFlagI = true;
          this.showHideFlagB = true;
        }
      }
    },
    "plotOptions": {
      "series": {
        stacking: "normal",
        borderWidth: 0,
        groupPadding: 0,
        events: {
          legendItemClick() {
            let chart = this.chart,
              series = chart.series;
              //console.log(this);
              console.log(this.chart.series);
            if (this.name == 'Show/Hide Innenstadt') {
              if (chart.showHideFlagI) {
                series.forEach(series => {
                  if (series.userOptions.stack == 'I') {
                    console.log(chart.series[series.linkedSeries[0].index]);
                    
                    /*for (var key in chart.series[series.linkedSeries[0].index]) {
                      if (key == 'linkedParent') {
                        chart.series[series.linkedSeries[0].index].splice(key, 1);
                      }
                  }*/
                   delete chart.series[series.linkedSeries[0].index].linkedParent;
                    series.linkedSeries = [];


                    series.hide()
                  }
                })
              } else {
                series.forEach(series => {
                  if (series.userOptions.stack == 'I') {
                    series.show()
                   // chart.series[series.linkedSeries[0].index].linkedParent = [];
                    
                  }
                })
              }
              chart.showHideFlagI = !chart.showHideFlagI;
            }
            if (this.name == 'Show/Hide Basel-Stadt') {
              if (chart.showHideFlagB) {
                series.forEach(series => {
                  if (series.userOptions.stack == 'B') {
                    console.log(series.name);

                    series.hide()
                  }
                })
              } else {
                series.forEach(series => {
                  if (series.userOptions.stack == 'B') {
                    series.show()
                  }
                })
              }
              chart.showHideFlagB = !chart.showHideFlagB;
            }

          }
        }
      }
    },
    xAxis: {
      type: "category",
      tickInterval: 1,
      labels: {
        step: 1,
        rotation: -45,
        style: {
          fontSize: "11px"
        },
      }
    },
    "yAxis": {
      tickInterval: 2000,
      "labels": {
        "format": "{value:,.0f}"
      },
    },
    "legend": {
      "enabled": true,
      reversed: false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      padding: 0,
      itemDistance: 2,
      width: 500,
      itemWidth: 230,
      itemMarginBottom: 1,
      "labelFormatter": function () {
        return this.name.replace('Innenstadt: ', '');
    }
    },
    "series": [
      { stack: 'I', id: '0', "color": "#8B2223", index: 12, legendIndex: 0 }, /*dunkelrot*/
      { stack: 'I', id: '1', "color": "#DC440E", index: 11, legendIndex: 1 }, /*hellrot*/
      { stack: 'I', id: '2', "color": "#FF8028", index: 10, legendIndex: 2 }, /*dunkelorange*/
      { stack: 'I', id: '3', "color": "#FFBB58", index: 9, legendIndex: 3 }, /*dunkelgelb*/
      { stack: 'I', id: '4', "color": "#FFDA80", index: 8, legendIndex: 4 }, /*hellgelb*/
      { stack: 'I', id: '5', "color": "#007A2F", index: 7, legendIndex: 5 }, /*dunkelgrün*/
      { stack: 'I', id: '6', "color": "#D7E8D2", index: 6, legendIndex: 6 }, /*hellgrün1*/
      { stack: 'I', id: '7', "color": "#73BA7C", index: 5, legendIndex: 7 }, /*hellgrün2*/
      { stack: 'I', id: '8', "color": "#2B0099", index: 4, legendIndex: 8 }, /*dunkelblau1*/
      { stack: 'I', id: '9', "color": "#008AC3", index: 3, legendIndex: 9 }, /*dunkelblau2*/
      { stack: 'I', id: '10', "color": "#B9CFD7", index: 2, legendIndex: 10 }, /*hellblau*/
      { stack: 'I', id: '11', "color": "#672773", index: 1, legendIndex: 11 }, /*dunkelpink*/
      { stack: 'I', id: '12', "color": "#E7CEE2", index: 0, legendIndex: 12 }, /*hellpink*/
      { stack: 'B', "color": "#8B2223", index: 25, linkedTo: '0' }, /*dunkelrot*/
      { stack: 'B', "color": "#DC440E", index: 24, linkedTo: '1' }, /*hellrot*/
      { stack: 'B', "color": "#FF8028", index: 23, linkedTo: '2' }, /*dunkelorange*/
      { stack: 'B', "color": "#FFBB58", index: 22, linkedTo: '3' }, /*dunkelgelb*/
      { stack: 'B', "color": "#FFDA80", index: 21, linkedTo: '4' }, /*hellgelb*/
      { stack: 'B', "color": "#007A2F", index: 20, linkedTo: '5' }, /*dunkelgrün*/
      { stack: 'B', "color": "#D7E8D2", index: 19, linkedTo: '6' }, /*hellgrün1*/
      { stack: 'B', "color": "#73BA7C", index: 18, linkedTo: '7' }, /*hellgrün2*/
      { stack: 'B', "color": "#2B0099", index: 17, linkedTo: '8' }, /*dunkelblau1*/
      { stack: 'B', "color": "#008AC3", index: 16, linkedTo: '9' }, /*dunkelblau2*/
      { stack: 'B', "color": "#B9CFD7", index: 15, linkedTo: '10' }, /*hellblau*/
      { stack: 'B', "color": "#672773", index: 14, linkedTo: '11' }, /*dunkelpink*/
      { stack: 'B', "color": "#E7CEE2", index: 13, linkedTo: '12' }, /*hellpink*/
      //{ id: 'HideInnenstadt', name: 'Show/Hide Innenstadt', legendIndex: -1, visible: false, color: 'transparent' },
      { id: 'HideBasel', name: 'Show/Hide Stadt Basel', legendIndex: -1, visible: false, color: 'transparent' }
    ],
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
      "shared": true
    },
  }
}());
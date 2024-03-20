(function () {
  return {
    chart: {
      type: "column",
      inverted: false,
      //marginBottom: 35
      //"spacingTop": 100
    },
    xAxis: {
      //type: "category",
      labels: {
        rotation: -45
      },
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    yAxis: {
      // tickAmount: 8,
      // tickInterval: 1000,
      max: 100,
      tickInterval: 25,
      labels: {
        format: "{value:,.0f}%"
      }
    },
    series: [
      {
        color: "#923F8D",
        visible: true
      },
    ],
    legend: {
      enabled: false,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      //"x": 25,
      //"y": 55,    
      itemStyle: {
        fontWeight: "normal"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
      shared: false
    },

  }
}());
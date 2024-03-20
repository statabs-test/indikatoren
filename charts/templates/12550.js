(function () {
  return {
    chart:{
      type: "line"
    },
    subtitle: {
      useHTML: true
    },
    legend: {
      enabled: true,
      align: "left",
      verticalAlign: "top",
      layout: "horizontal",
    },
    yAxis: {
      tickInterval: 25
    },
    xAxis: {
      tickPositioner: function () {
        var interval = 2,
          ext = this.getExtremes(),
          i = ext.dataMax,
          pos = [i];
        while (i >= ext.dataMin) pos.unshift(i = i - interval);
        return pos;
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b> Einwohner/ha<br/>',
      shared: false
    },
    series: [
      {
        color: "#B00000",
      },
      {
        color: "#246370",
      },
      {
        color: "#008AC3",
      }
    ],
  };
}());


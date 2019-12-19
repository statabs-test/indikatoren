(function () {
  return {
    chart: {
      type: "column",
      animation: false,
      inverted: false,
      events: {
        load: function (event) {
          if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
            this.update(
              {
                legend: {
                  x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                }
              }
            )
          };
          justifyColumns(event.target);
        },
        redraw: function (event) {
          justifyColumns(event.target);
        }
      }
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        pointWidth: 14
      }
    },
    yAxis: {
      tickAmount: 5,
      labels: {
        "format": "{value:,.0f}"
      }
    },
    series: [
      { color: "rgb(147,63,141)" },
      { color: "rgb(180,117,171)" },
      { color: "rgb(250,189,36)" },
      { color: "rgb(250,218,128)" },
      { color: "#008AC3" }
    ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      //itemWidth: 300,
      itemStyle: {
        fontWeight: "normal"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    }
  }
}());

(function () {
  return {
    plotOptions: {
      series: {
        marker: {
          symbol: "circle",
          enabled: false
        },
      }
    },
    yAxis: [{
      labels: {
        format: "{value:,.1f}‰",
        style: {
          color: "#000000"
        }
      },
      min: -2.5,
      max: 10,
      tickAmount: 6,
      title: ""
    },
      /*{
        "title": {
          "style": {
            "color": "#000000",
            "fontSize": null
          },
          "text": null
        },
        "labels": {
          "format": "{value:,.f}",
          "style": {
            "color": "#000000"
          }
        },
        "min": -6000,
        "max": 24000,
        tickAmount: 6,
        "gridLineWidth": 0,
        "opposite": true
      }*/
    ],
    xAxis: {
      tickInterval: 2,
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}‰</b><br/>',
    },
    series: [
      {
        color: "#008AC3",
      },
      {
        color: "#008AC3",
        dashStyle: 'ShortDash',
      },
      {
        color: "black",
        dashStyle: 'ShortDot',
        id: 'gw'
      },
      {
        color: "black",
        dashStyle: 'ShortDot',
        linkedTo: 'gw'
      }
    ],

    legend: {
      enabled: true,
      //"x": 25,
      //"y": 55,
      //itemWidth: 170,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left",
      alignColumns: false,
      itemDistance: 10,
      itemStyle: {
        fontWeight: "normal"
      }
    },
  }
}());


(function () {
  return {
    chart: {
      type: "scatter",
      zoomType: 'xy'
    },
    "yAxis": [
      {
        tickAmount: 7,
        labels: {
          "formatter": function () {
            return Highcharts.numberFormat((this.value), 1);
          }
        },
        min: 0,
        title: {
          text: "CMI"
        },
      }
    ],
    "xAxis": {
      title: {
        text: "PCCL"
      },
      labels: {
        formatter: function () {
          return Highcharts.numberFormat((this.value), 1);
        }
      }
      ,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    legend: {
      itemDistance: 8,
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    },
    data: {
      seriesMapping: [
        { name: 0, x: 1, y: 2, color: 3, symbol: 4 }
      ],
    },
/*
    tooltip: {
      useHTML: true,
      pointFormatter: function () {
        return '<b>' + this.point.name + '</b> <br/><br/> CMI: ' + Highcharts.numberFormat(this.x, 2) + '<br/> PCCL: ' + Highcharts.numberFormat(this.y, 2);
      }
    },
*/
    tooltip: {
      pointFormat: '{point.name} <br/><br/> CMI: {point.x} <br/> PCCL: {point.y}'
    },
/*    colors: [
      "#ff8028",
      "#67401e",
      "#3366ff",
      "#fabd24",
      "#cd9c00",
      "#007a2f",
      "#ff33cc",
      "#73b97c",
      "#e7cee2",
      "#662673",
      "#EAB9CE",
      "#010101",
    ],
*/
    plotOptions: {
      scatter: {
        marker: {
          enabled: true,
//          symbol: "circle",
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    }
  };
})();

(function () {
  return {
    chart: {
      type: "scatter",
      zoomType: 'xy',
      events: {
        load: function () {


          this.series[0].points.forEach(point => {

            if (point.name == 'Alle Spitäler') {
              point.update({
                marker: {
                  symbol: 'square',
                  enabled: true,
                  states: {
                    hover: {
                      enabled: true,
                      symbol: 'square',
                    }
                  }
                }
              });
            }
          });
        }
      }
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
        style: {
          color: "black"
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
      showLastLabel: true,
      gridLineWidth: 1,
      tickAmount: 7,
      style: {
        color: "black",
      }
    },
    legend: {
      itemDistance: 8,
      "enabled": false,
      "layout": "vertical",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "right"
    },
    data: {
      seriesMapping: [
        { name: 0, x: 2, y: 1, color: 3, symbol: 4 }
      ],
    },
    /*
        tooltip: {
          useHTML: true,
          pointFormatter: function () {
            return '<b>' + this.point.name + '</b> <br/><br/> CMI: ' + Highcharts.numberFormat(this.y, 2) + '<br/> PCCL: ' + Highcharts.numberFormat(this.x, 2);
          }
        },
    */
    tooltip: {
      pointFormat: '<b>{point.name}</b> <br/><br/> PCCL: {point.x} <br/> CMI: {point.y}'
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
      series: {
        dataLabels: {
          enabled: true,
          align: 'left',
          verticalAlign: 'top',
          allowOverlap: true,
          crop: false,
          format: '{point.name}',
          style: {
            fontWeight: 'normal',
            fontSize: '7pt',
            color: '#555',
            textOverflow: 'clip',
            textOutline: 'none',
          }
        }
      },
      scatter: {
        marker: {
          radius: 6,
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

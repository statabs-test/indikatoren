(function () {
  return {
    title: {
      margin: 30
    },
    yAxis: {
      labels: {
        format: "{value:,.0f}",
      }
    },
    xAxis: {
      type: "category"
    },
    tooltip: {
      //shared: true,
      formatter: function (e) {

        var point = this.point,
          series = point.series,
          chart = series.chart,
          correspondingSeries = series.linkedParent || series.linkedSeries[0] || false,
          correspondingSeries2 = series.linkedSeries[1] || series.linkedParent.linkedSeries[1] || false,
          arearangePoint, // Werte vom Vertrauungsintervall 
          parentSeries,
          childSeries,
          parentPoint,
          childPoint;

        // unselect previously selected point
        if (correspondingSeries === undefined || correspondingSeries2 === undefined ) return e.defaultFormatter.call(this, e);
        else {
          if (chart.extraHoveredPoint) {
            chart.extraHoveredPoint.setState('');
          }
       
          // identify type of points for formatting purposes
          if (point.low !== undefined) {
            arearangePoint = point;
          } else {
            arearangePoint = correspondingSeries2.points[point.index];
            if (series.linkedParent !== undefined) {
              parentSeries = series.linkedParent;
              parentPoint = series.linkedParent.points[point.index].y;
              series.linkedParent.points[point.index].setState('hover');
              childSeries = this.series;
              childPoint = this.point.y;
              this.point.setState('hover');
            } else {
              parentSeries = this.series;
              parentPoint = this.point.y; 
              this.point.setState('hover');             
              childSeries = series.linkedSeries[0];
              childPoint = series.linkedSeries[0].points[point.index].y;
              series.linkedSeries[0].points[point.index].setState('hover');
            }
            return parentSeries.name + ": " + parentPoint +  "<br>" + 
            childSeries.name + ": " + childPoint + "<br>" + 
            "Vertrauensinterval: " + arearangePoint.low + " - " + arearangePoint.high;
          }
        }
      }
    },
    series: [
      {
        linkedTo: "1zi",
        type: "line",
        lineWidth: 0,
        color: "#9E7C59",
        zIndex: 1,
        visible: true, 
        showInLegend: false,
        marker: {
          symbol: "circle",
          enabled: true
        },
        states: {
          hover: {
            enabled: "true",
            lineWidthPlus: 0
          }
        },
      },
      {
        id: "1zi",
        color: "#9E7C59",
        zIndex: 1
      },
      {
        color: "#ECE1D0",
        type: 'arearange',
        linkedTo: "1zi",
        /*zIndex: 0*/
      },

      {
        linkedTo: "2zi",
        type: "line",
        lineWidth: 0,
        color: "#689199",
        zIndex: 1,
        visible: false, 
        showInLegend: false,
        marker: {
          symbol: "circle",
          enabled: true
        },
        states: {
          hover: {
            enabled: "true",
            lineWidthPlus: 0
          }
        },

      },
      {
        id: "2zi",
        visible: false,
        color: "#689199",
        zIndex: 1
      },
      {
        color: "#D3E2E4",
        type: 'arearange',
        linkedTo: "2zi",
        zIndex: 0
      },

      {
        /*linkedTo: "3zi",*/
        type: "line",
        lineWidth: 0,
        color: "#DC440E",
        zIndex: 1,
        visible: false, 
        showInLegend: false,
        marker: {
          symbol: "circle",
          enabled: true
        },
        states: {
          hover: {
            enabled: "true",
            lineWidthPlus: 0
          }
        },

      },
      {
        id: "3zi",
        visible: false,
        color: "#DC440E",
        zIndex: 1
      },
      {
        color: "#FFBB58",
        type: 'arearange',
        linkedTo: "3zi",
        zIndex: 0
      },

      {
        /*linkedTo: "4zi",*/
        type: "line",
        lineWidth: 0,
        color: "#923F8D",
        zIndex: 1,
        visible: false, 
        showInLegend: false,
        marker: {
          symbol: "circle",
          enabled: true
        },
        states: {
          hover: {
            enabled: "true",
            lineWidthPlus: 0
          }
        },

      },
      {
        id: "4zi",
        visible: false,
        color: "#923F8D",
        zIndex: 1
      },
      {
        color: "#E7CEE2",
        type: 'arearange',
        linkedTo: "4zi",
        zIndex: 0
      },

      {
        linkedTo: "5zi",
        type: "line",
        lineWidth: 0,
        color: "#68AB2B",
        /*zIndex: 1*/
        marker: {
          symbol: "circle",
          enabled: true
        },
        states: {
          hover: {
            enabled: "true",
            lineWidthPlus: 0
          }
        },

      },
      {
        id: "5zi",
        visible: false,
        color: "#68AB2B",
        zIndex: 1
      },
      {
        color: "#D7E8D2",
        type: 'arearange',
        linkedTo: "5zi",
        zIndex: 0
      },
    ],

    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "middle",
      itemMarginBottom: 5,
      align: "left",
      verticalAlign: "top",
      labelFormatter: function () {
        return this.name.replace("1 Zimmer Median", "1 Zi.")
          .replace("2 Zimmer Median", "2 Zi.")
          .replace("3 Zimmer Median", "3 Zi.")
          .replace("4 Zimmer Median", "4 Zi.")
          .replace("5 Zimmer Median", "5 Zi.");
      },
    },
    /*"plotOptions": {
      "series": {
        "dataLabels": {
          "enabled": false,
          "allowOverlap": true,
            //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
            formatter: function() {
              var last  = this.series.data[this.series.data.length - 1];
              if (this.point.category === last.category  &&  this.point.y === last.y ) {
                return this.series.name;
              }
              return "";
            }
        }
      }
    }*/
  };
}());

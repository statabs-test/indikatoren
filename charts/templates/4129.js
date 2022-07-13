(function () {
  return {
    title: {
      margin: 30
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
      }
    },
    "xAxis": {
      "type": "category"
    },
    tooltip: {
      formatter: function (e) {
        var point = this.point,
          series = point.series,
          chart = series.chart,
          correspondingSeries = series.linkedSeries[1] || series.linkedParent,
          linePoint,
          arearangePoint;
        //console.log(correspondingSeries);
        //console.log(point.index);

        // unselect previously selected point
        if (correspondingSeries === undefined) return e.defaultFormatter.call(this, e);
        else {
          if (chart.extraHoveredPoint) {
            chart.extraHoveredPoint.setState('');
          }

          // find corresponding point
          if (correspondingSeries) {
            console.log(correspondingSeries.points[point.index]);
            correspondingPoint = correspondingSeries.points[point.index];
            correspondingPoint.setState('hover');
            chart.extraHoveredPoint = correspondingPoint;
          }

          // identify type of points for formatting purposes
          if (point.low !== undefined) {
            arearangePoint = point;
            linePoint = correspondingPoint;
          } else {
            arearangePoint = correspondingPoint;
            linePoint = point;
          }

          return "Line: " + linePoint.y + "<br>" + "Arearange: " + arearangePoint.low + " - " + arearangePoint.high;
          //return this.series.index;
        }

      }
    },
    /*"tooltip": {
      formatter() {
        if (this.series.userOptions.id == "1zi") { //nur für series mit stacking: true
          const series = this.series.chart.series;
          let tooltip = ""
          let s = 0
          series.forEach(series => {
            if (series.userOptions.id == "1zi") { //nur für series mit stacking: true
              series.setState('hover'); //"aktiviere" alle series
              series.points.forEach(point => {
                if (point.x === this.x) {
                  tooltip += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}:</span> <b> ${Highcharts.numberFormat(point.y, 0, ",", " ")} </b><br>` + "Q1" + point.y.low;
                  s += point.y;
                }
              })
            }
          },
          )
          return '<span style="font-size: 10px">Alter: ' + this.x +
            '</span><br>' + tooltip + point.y + '<span style="opacity: 0">\u25CF</span> <br> Q1: <b>' + point.y.low + '</b>';
        } else {
          return '<span style="font-size: 10px">Alter: ' + this.x +
            '</span><br><span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>'
            + Highcharts.numberFormat(this.y, 0, ",", " ") + '</b><br/>';
        }
      }
    },*/
    "series": [
      {
        linkedTo: "1zi",
        type: "scatter",
        marker: {
          symbol: "circle",
          enabled: true
        },
        color: "#9E7C59",
        zIndex: 1
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
        zIndex: 0
      },

      {
        linkedTo: "2zi",
        type: "scatter",
        marker: {
          symbol: "circle",
          enabled: true
        },
        color: "#689199",
        zIndex: 1
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
        linkedTo: "3zi",
        type: "scatter",
        marker: {
          symbol: "circle",
          enabled: true
        },
        color: "#DC440E",
        zIndex: 1
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
        linkedTo: "4zi",
        type: "scatter",
        marker: {
          symbol: "circle",
          enabled: true
        },
        color: "#923F8D",
        zIndex: 1
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
        type: "scatter",
        marker: {
          symbol: "circle",
          enabled: true
        },
        color: "#68AB2B",
        zIndex: 1
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
      itemStyle: {
        fontWeight: "normal"
      },
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

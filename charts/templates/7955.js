
  /* http://jsfiddle.net/zmktekak/14/ */

  var justifyColumns = function (chart) {
    var categoriesWidth = chart.plotSizeX / (1 + chart.xAxis[0].max - chart.xAxis[0].min),
      distanceBetweenColumns = 0,
      each = Highcharts.each,
      sum, categories = chart.xAxis[0].names,
      number, offset;

    for (var i = 0; i < categories.length; i++) {
      sum = 0;
      each(chart.series, function (p, k) {
        if (p.visible) {
          each(p.data, function (ob, j) {
            //if (ob.category == categories[i]) {
            if (ob.options.name == categories[i]) {
              if (ob.options.y != null) {
                sum++;
              }
            }
          });
        }
      });
      //distanceBetweenColumns = categoriesWidth / (sum + 1);
      distanceBetweenColumns = categoriesWidth / 5;
      number = 1;
      offset= 0;
      each(chart.series, function (p, k) {
        if (p.visible) {
          each(p.data, function (ob, j) {
            if (ob.options.name == categories[i]) {
              if (ob.options.y != null) {
                //ob.graphic.element.x.baseVal.value = i * categoriesWidth + distanceBetweenColumns * number - ob.pointWidth / 2;
                ob.graphic.element.x.baseVal.value = ob.graphic.element.x.baseVal.value + ((4 - sum) * ob.pointWidth) / 2 - offset;
                number++;
              } else {
                offset = ob.pointWidth;
              }
            }
          });
        }
      });
    }
  };



(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        events: {
          hide: function () {
            justifyColumns(this.chart);
          },
          show: function () {
            justifyColumns(this.chart);
          }
        }
      }
    },

    /*"xAxis": {
      //"type": "category",
    },*/
    "yAxis": {
      //"min": 0,
      //"max": 0.5,
      "labels": {
        "format": "{value:,.0f}"
      }
    },

    /*    xAxis: {
          categories: [
              'Jan',
              'Feb',
              'Mar',
            '',''],
          crosshair: true
        },
        */
    "series": [
      { "color": "#FFBB58" },
      { "color": "#FF8028" },
      { "color": "#DC440E" },
      { "color": "#B00000" }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"x": 25,
      //"y": 55,  
      "itemWidth": 300,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    },
    "chart": {
      "type": "column",
      "inverted": false,
      events: {
        load: function () {
          justifyColumns(this);
        },
        redraw: function () {
          justifyColumns(this);
        }
      }
    }
  }
}());


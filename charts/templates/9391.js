(function () {
  return {
   // "chart": {
   //   "type": "column"
   // },
  //  title: {
      //useHTML: true
   // },
    "plotOptions": {
      "series": {
        "borderWidth": 0,
        "stacking": "true",
        minPointLength: 2,
      },
    },
    "xAxis": {
      "type": "category",
    },
    "yAxis": [{
      title: {
        text: null
      },
      "labels": {
        "format": "{value:,.0f}",
        "style": {
          "color": "black"
        },
      },
      "min": 0,
      // tickAmount: 5
    },
    {
      title: {
        text: null
      },
      "labels": {
        "format": "{value:,.0f}%",
        "style": {
          "color": "black"
        },
      },
      "min": 0,
      "opposite": true
    }
    ],
    "legend": {
      //useHTML: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      labelFormatter: function () {
        return this.name.replace("-elektrisch", "-elektr.");
      },
    },
    "series": [
      {
        "index": 4,
        "color": "#2F656B",
        "legendIndex": 1,
        "type": "column"/*,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
          shared: true
        }*/
      }, // Blau
      {
        "index": 3,
        "color": "#8B2223",
        "legendIndex": 3,
        "type": "column"/*,
          "tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
           }*/
      },
      {
        "index": 2,
        "color": "#83522E",
        "legendIndex": 2,
        "type": "column"/*,
            "tooltip": {
              "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
             }*/
      },
      {
        "index": 1,
        "color": "#9A86A6",
        "legendIndex": 4,
        "type": "column"/*,
              "tooltip": {
                "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
               }*/
      },
      {
        "index": 0,
        "color": "#BAA85A",
        "legendIndex": 5,
        "type": "column",
        "stacking": false,
        visible: false/*,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
        }*/
      },
      {
        index: 6,
        "color": "#000000",
        "type": "line",
        "stacking": false,
        "legendIndex": 6,
        zIndex: 100,
        "yAxis": 1,
        "marker": {
          "enabled": false
        }/*,
        "tooltip": {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
          shared: false
        }*/
      }
    ],
    /*    tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>', "footerFormat": 'Total neue Inverkehrsetzungen von Elektroautos: <b>{point.total:,.0f}</b>',
          shared: true,
          useHTML: true
        }
        */
        tooltip: {
          formatter: function () {
            if (this.series.userOptions.stacking !== false) {
              const series = this.series.chart.series;
              const filteredSeries = series.filter(s => s.userOptions.stacking !== false);
              
              const tooltip = filteredSeries.reduce((acc, currentSeries) => {
                currentSeries.setState('hover');
                const relevantPoints = currentSeries.points.filter(point => point.x === this.x);
        
                acc += relevantPoints.map(point => `<span style="color:${point.color}">\u25CF</span> ${point.series.name}: <b>${Highcharts.numberFormat(point.y, 0, ",", " ")}</b><br>`).join('');
        
                return acc;
              }, '');
        
              const totalStackValue = filteredSeries.reduce((total, currentSeries) => {
                const relevantPoint = currentSeries.points.find(point => point.x === this.x);
                if (relevantPoint) {
                  total += relevantPoint.y;
                }
                return total;
              }, 0);
        
              return `<span style="font-size: 10px">${this.key}</span><br>${tooltip}<span style="opacity: 0">\u25CF</span> Total neue Inverkehrsetzungen von Elektroautos: <b>${Highcharts.numberFormat(totalStackValue, 0, ",", " ")}</b>`;
            } else {
              const valueFormat = this.series.userOptions.type === 'line' ? Highcharts.numberFormat(this.y, 1, ",", " ") : Highcharts.numberFormat(this.y, 0, ",", " ");
              return `<span style="font-size: 10px">${this.key}</span><br><span style="color:${this.color}">\u25CF</span> ${this.series.name}: <b>${valueFormat}</b><br/>`;
            }
          }
        }
  };
}());

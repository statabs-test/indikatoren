(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: 0,
        //groupPadding: 0.1, 
        borderWidth: 0,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        }
      },
      "column": {
        "colorByPoint": true
      }
    },
    "xAxis": {
      "type": "category",
      labels: {
        rotation: 0
      }
    },
    "yAxis": {
      tickAmount: 6,
      tickInterval: 50000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [{
      name: 'Kanton'
    }
    ],
    "colors": [
      "#474747",
      "#FF8028",
      "#FABD24",
      "#923F8D",
      "#990300"
    ],

    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"y": 35,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} Fr.</b><br/>',
      "shared": false
    },
    "chart": {
      "marginBottom": 35,
      "type": "column",
    }
  }
}());

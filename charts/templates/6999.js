(function () {
  return {
    "plotOptions": {
      "series": {
        "pointWidth": 15,
        "dataLabels": {
          "style": {
            "fontSize": 10
          }
        },
        "stacking": "normal"
      }
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "format": "{value:,.0f}"
      },
      "reversedStacks": false
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "shared": false
    },
    "legend": {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "series": [

      {
        "color": "#246370",
        "legendIndex": 1
      },
      {
        "color": "#D3E2E4",
        "legendIndex": 2
      },
      {
        "color": "#68AB2B",
        "legendIndex": 3
      },
    ],
    "chart": {
      // "marginBottom": 85,
      //"marginTop": 75,
      "type": "column",
      inverted: true,
    }
  };
}());

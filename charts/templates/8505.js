(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: 0,
        borderWidth: 0,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        }
      },
    },
    "xAxis": {
      "type": "category",
      labels: {
        rotation: 0
      }
    },
    "yAxis": {
      tickAmount: 5,
      "labels": {
        "format": "{value:,.0f}%"
      }
    },
    series: [
      { color: "#73B97C" },
      { color: "#68AB2B" },
      { color: "#007A2F" },
      { color: "#71A3B5" },
      { color: "#689199" },
      { color: "#0F7399" },
      { color: "#246370" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",  
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
      "shared": false
    },
    "chart": {
      "marginBottom": 35,
      "type": "column",
    }
  }
}());

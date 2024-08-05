(function () {
  return {

    "xAxis": {
      "type": "category",
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
      }
    },
    "yAxis": {
      //	"max": 3500,
      "tickInterval": 100,
      //min: -1500,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      {
        "color": "#cd9c00"
      },
      {
        "color": "#689199"
      },
      {
        "color": "#662673"
      },
      {
        "color": "#999"
      },
      {
        "color": "#b375ab",
        visible: true,
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //itemWidth: 300,
      //"x": 40,
      //"y": 55,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "spacingBottom": 40
    }
  }
}());
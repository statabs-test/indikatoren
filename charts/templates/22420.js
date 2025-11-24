(function () {
  return {
    plotOptions: {
      series: {
        pointPadding: 0,
        borderWidth: 0,
        //itemWidth: 10,
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        rotation: 0,
        useHTML: true,
            style: {
                whiteSpace: 'normal', 
                //width: '80px',
                textOverflow: 'none',
                textAlign: 'left'
            }

      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "series": [
      { "color": "#007a2f" } 
    ],
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
    },
    /*tooltip: {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    },*/
    "chart": {
      "type": "column",
      "inverted": false,
      //marginRight: 30,
      //"spacingTop": 100
    }
  }
}()); 
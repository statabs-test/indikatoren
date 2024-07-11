(function () {
  return {
    "chart": {
      "type": "column"
    },
    "plotOptions": {
      "series": {
        //pointPadding: 0,
        groupPadding: 0.2,
        borderWidth: 0
      }
    },    "xAxis": {
      type: "category"
      //"tickInterval": 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.1f} GWh</b><br/>'
    },
    "series": [
      {
        "color": "#9E7C59"
      },
      {
        "color": "#C4AB91"
      },
      {
        "color": "#FFDA80"
      },
      {
        "color": "#C9D6DB"
      },
      {
        "color": "#6F6F6F"
      }
    ],
    "legend": {
      width: 460,
      //itemWidth: 230,
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    }
  }
}());
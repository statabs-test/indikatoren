(function () {
  return {
    subtitle: {
      useHTML: true
    },
    "chart": {
      "type": "column"
    },
    "xAxis": {
      type: "category"
      //"tickInterval": 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      useHTML: true,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f} m<sup>2</sup></b><br/>'
    },
    "series": [
      {  //Wohnen Klybeck
        "color": "#cd9c00",
        legendIndex: 1
      },
      { // Wohnen Kleinhüningen
        "color": "#b375ab",
        legendIndex: 3
      },
      { // Wohnen Basel
        "color": "#8A8A8A",
        legendIndex: 5
      },
      { // Arbeiten Klybeck
        "color": "#7f5f1a",
        legendIndex: 2
      },
      {  //Arbeiten Kleinhüningen
        "color": "#923f8d",
        legendIndex: 4
      },
      {  //Arbeiten Basel
        "color": "#474747",
        legendIndex: 6
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    },
    "plotOptions": {
      "series": {
        pointPadding: 0,
        groupPadding: 0.15,
        borderWidth: 0
      }
    },
  }
}());
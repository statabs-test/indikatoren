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
      {  //Wohnen Pestalozzi
        "color": "#cd9c00",
        legendIndex: 1
      },
      { // Wohnen Kannenfeld
        "color": "#b375ab",
        index: 2,
        legendIndex: 2
      },
      { // Wohnen Landskron
        "color": "#7f5f1a",
        index: 1,
        legendIndex: 3
      },
      {  //Wohnen Lysbüchel
        "color": "#923f8d",
        legendIndex: 4
      },
      {  //Wohnen Friedmatt
        "color": "#923f8d",
        legendIndex: 5
      },
      { // Wohnen Basel
        "color": "#7f5f1a",
        index: 1,
        legendIndex: 6
      },
      {  //Arbeiten Pestalozzi
        "color": "#923f8d",
        legendIndex: 7
      },
      { // Arbeiten Kannenfeld
        "color": "#7f5f1a",
        index: 1,
        legendIndex: 8
      },
      {  //Arbeiten Landskron
        "color": "#923f8d",
        legendIndex: 9
      },
      { // Arbeiten Lysbüchel
        "color": "#7f5f1a",
        index: 1,
        legendIndex: 10
      },
      {  //Arbeiten Friedmatt
        "color": "#923f8d",
        legendIndex: 11
      },
      { // Arbeiten Basel
        "color": "#7f5f1a",
        index: 1,
        legendIndex: 12
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
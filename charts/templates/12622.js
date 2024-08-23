(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      tickInterval: 25000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f} Fr.</b><br/>'
    },
    "series": [
      {
        "color": "#FABD24" /* "#b375ab" Friedmatt*/ 
      },
      {
        "color": "#FABD24", /* "#b375ab" Friedmatt*/ 
        dashStyle: "Dash",
      },
      {
        "color": "#FF8028" /* "#689199" Kannenfeld*/
      },
      {
        "color": "#FF8028", /* "#689199" Kannenfeld*/
        dashStyle: "Dash",
      },
      {
        "color": "#923F8D" /* "#662673" Landskron*/
      },
      {
        "color": "#923F8D", /* "#662673" Landskron*/
        dashStyle: "Dash",
      },
      {
        "color": "#689199" /* "#999" Lysbüchel*/
      },
      {
        "color": "#689199", /* "#999" Lysbüchel*/
        dashStyle: "Dash",
      },
      {
        "color": "#9E7C59" /*"#cd9c00" Pestalozzi*/
      },
      {
        "color": "#9E7C59", /*"#cd9c00" Pestalozzi*/
        dashStyle: "Dash",
      },
    ],
    "legend": {
      enabled: true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left"
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());

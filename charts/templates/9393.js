(function () {
  return {
    "chart": {
      "type": "column"
    },
    "plotOptions": {
      "series": {
        "stacking": "percent"
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}%",
      }
    },
    "series": [
      {
        "color": "#a8c3ca",
      },
      {
        "color": "#ff8028",
      },
      {
        "color": "#dc440e",
      },
      {
        "color": "#246370",
      }
    ],
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
      footerFormat: 'Total: <b>{point.total:,.0f}</b>',
      shared: true,
    },
    "legend": {
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
    },
  };
}());

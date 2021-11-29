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
      shared: true,
      useHTML: true,
      followPointer: true,
      headerFormat: "<table>",
      pointFormat: '<tr><td><span style="color:{series.color}">\u25CF</span> {series.name}:</td>'
        + '<td style="text-align:right">&nbsp;<b>{point.y:,.0f} GWh</b></td>'
        + '<td style="text-align:right">&nbsp;({point.percentage:,.1f}%)</td></tr>',
      footerFormat: '<tr><td>Total: </td><td><b>{point.total:,.0f} GWh</b></td><td></td></tr></table>',
    },
    "legend": {
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
    },
  };
}());

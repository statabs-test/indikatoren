(function () {
  return {
    rangeSelector: {
      buttonTheme: {
        width: null
      },
      buttons:
        [{
          type: '',
          count: 14,
          text: 'vor 2020'
        },
        {
          count: 1,
          type: 'year',
          text: 'ab 2020',
        },
        {
          type: 'all',
          text: 'Alle Jahre',
        },

        ],
      buttonSpacing: 40,
      inputEnabled: false,
      selected: 2,
    },
    "xAxis": {
      events: {
        SetExtremes: function (e) {
          if (e.trigger == "rangeSelectorButton" &&
            e.rangeSelectorButton.text == "vor 2020") {
            // it is your button that caused this,
            // so setExtrememes to your custom
            // have to do in timeout to let
            // highcharts finish processing events...
            setTimeout(function () {
              Highcharts.charts[0].xAxis[0].setExtremes(Date.UTC(2006, 1, 1), Date.UTC(2019, 12, 31))
            }, 1);
          }
        },
      },
    },
    "yAxis": {
      labels: {
        format: "{value:,.0f}",
      },
      opposite: false,
    },
    "tooltip": {
      shared: true,
      split: false,
      xDateFormat: '%Y-%m',
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },

    "series": [
      { "color": "#68AB2B" },
      { "color": "#008AC3" },
      { "color": "#FABD24" },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
    },
  }
}());

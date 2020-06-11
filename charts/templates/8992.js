
(function () {
  return {

    "yAxis": {
      showLastLabel: true,
      endOnTick: true,
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
      {
        "color": "#68AB2B",
        "marker": {
          "enabled": false
        }
      },
      {
        "color": "#008AC3",
        "marker": {
          "enabled": false
        }
      },
      {
        "color": "#FABD24",
        "marker": {
          "enabled": false
        }
      },

    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },


    rangeSelector: {
      allButtonsEnabled: true,
      buttonTheme: {
        width: null
      },
      buttons:
        [{
          type: 'millisecond',
          count: Date.UTC(2019, 12)-Date.UTC(2006, 0),
          text: 'vor 2020',
        },
        {
          type: 'millisecond',
          count: Date.now()-(Date.now() % (30 * 24 * 3600 * 1000))- 2 * 30 * 24 * 3600 * 1000 - Date.UTC(2020, 0),
          text: 'ab 2020',
        },
        {
          type: 'all',
          text: 'Alle Jahre'
        }
        ],
      buttonSpacing: 40,
      enabled: true,
      inputEnabled: false,
      selected: 2,


    },
    "xAxis": {
      tickPixelInterval: 50,
      type: 'datetime',
      DateTimeLabelFormats: {
        month: '%b \'%y',
        year: '%Y'
   
    },
      ordinal: false,
      events: {
        afterSetExtremes: function (e) {
          if (e.trigger == "rangeSelectorButton" &&
            e.rangeSelectorButton.text == "vor 2020") {
            setTimeout(function () {
              Highcharts.charts[0].xAxis[0].setExtremes(Date.UTC(2006, 0), Date.UTC(2019, 12))
            }, 1);
          }
          else if (e.trigger == "rangeSelectorButton" &&
            e.rangeSelectorButton.text == "ab 2020") {
            setTimeout(function () {
              Highcharts.charts[0].xAxis[0].setExtremes(Date.UTC(2020, 0),  
              Date.now()-(Date.now() % (30 * 24 * 3600 * 1000))- 2 * 30 * 24 * 3600 * 1000)
            }, 1);
          }
        },
      }
    },
  }
}());


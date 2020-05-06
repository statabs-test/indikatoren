(function () {
  return {
    rangeSelector: {
      enabled: true,
      buttonTheme: {
        width: null
      },
      buttons:
        [
          {
            //count: 14,
            type: 'year',
            text: 'vor 2020',
            //dateMin:Date.UTC(2010,0),
            dateMax: Date.UTC(2019, 12)
          },
          {
            type: 'year',
            text: 'ab 2020',
            dateMin: Date.UTC(2020, 0),
            // dateMax:Date.UTC(2019,9)
          },
          /* {
             type: 'ytd',
             text: 'YTD'
           },
           {
             type: 'month',
             count: 6,
             text: '6m'
         },*/
          {
            type: 'all',
            text: 'Alle Jahre',
          },

        ],
      buttonSpacing: 40,
      inputEnabled: false,
      selected: 3,
      //inputDateFormat: '%Y-%m',
      //inputEditDateFormat: '%Y'

    },
    "yAxis": {
      showLastLabel: true,
      endOnTick: true,

      labels: {
        format: "{value:,.0f}",
      },
      opposite: false,
    },
    "xAxis": {
      minRange: 3600 * 1000,
      endOnTick: true,
      startOnTick: true,
      showFirstLabel: true,
      showLastLabel: true,
      ordinal: false,

      labels: {
        //  rotation: -45
      }

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
      },
      {
        "color": "#008AC3",
      }, /* violett */
      {
        "color": "#FABD24",
      }, /* rot */

    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
    },

    /*data: {
      //convert year in first column to UTC date to be used by Highstock
      parsed: function(columns){
          columns[0].forEach(function(v, i, a){
              columns[0][i] = Date.UTC(columns[0][i]);
          });
      }
    }, */
  }
}());

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
    "xAxis": {
      endOnTick: true,
      startOnTick: true,
      showFirstLabel: true,
      showLastLabel: true,
      ordinal: false,
     // tickInterval: (365 * 24 * 3600 * 1000 * 3)/12,
     
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
        "color": "#FFDA80",
        "marker": {
          "enabled": false
        }
      }, /* black */
      {
        "color": "#008AC3",
        "marker": {
          "enabled": false
        }
      }, /* violett */
      {
        "color": "#2B0099",
        "marker": {
          "enabled": false
        }
      }, /* rot */

    ],
    "legend": {
      "enabled": true,
      //"x": 50,
      //"y": 25,
      //"itemWidth": 150,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },

    /*data: {
      //convert year in first column to UTC date to be used by Highstock
      parsed: function(columns){
          columns[0].forEach(function(v, i, a){
              columns[0][i] = Date.UTC(columns[0][i]);
          });
      }
    }, */
    rangeSelector: {
      //enabled:  false,
      buttonTheme: {
        width: null
      },
      buttons:
        [
          {

            type: 'all',
            text: 'Alle Jahre'
          }, {
          count: 1,
          type: 'year',
          text: '1 Jahr'
      }

  

    ],
    buttonSpacing: 40,
    enabled: false,
    inputEnabled: false,
    selected: 1,
    inputDateFormat: '%Y',
    inputEditDateFormat: '%Y'
  }, 

  
}
}());

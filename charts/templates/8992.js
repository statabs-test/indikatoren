(function(){
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
        labels: {
          //  rotation: -45
        }
      
             
    },
  "tooltip": {
    shared: false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
  	   {"color": "#007A2F",
      "marker": {
        "enabled": false
      }    
    }, /* black */
    {"color": "#923F8D",
      "marker": {
        "enabled": false
      }    
    }, /* violett */
	{"color": "#DC440E",
      "marker": {
        "enabled": false
      }    
    }, /* rot */

  ],
  "legend": {
    "enabled": true,
    //"x": 50,
    //"y": 25,
    "itemWidth": 150,
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
            count: 1,
            type: 'year',
            text: '1 Jahr'
        }, 
    {
            count: 3,
            type: 'year',
            text: '3 Jahre'
        }, 
    
        {
            type: 'all',
            text: 'Alle Jahre'
        }
      ],
  buttonSpacing: 40,
  inputEnabled: true,
  selected: 1, 
  inputDateFormat: '%Y',
inputEditDateFormat: '%Y'
}, 
  
}
}());
 
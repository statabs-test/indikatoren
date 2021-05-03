(function(){
    return {
  "xAxis": {
    tickInterval: 1,
    labels:{
        step: 8
    },
     /* plotLines: [{
        value: 1955,
        width: 1,
        color: '#CFD1D1'
    },
    {
      value: 1956,
      width: 1,
      color: '#CFD1D1'
  },
  {
    value: 1975,
    width: 1,
    color: '#CFD1D1'
},
{
value: 1980,
width: 1,
color: '#CFD1D1'
},{
value: 1992,
width: 1,
color: '#CFD1D1'
},{
  value: 2011,
  width: 1,
  color: '#CFD1D1'
  }
]*/
   /* plotBands: [{
      color: '#CFD1D1',
      from: 1955,
      to: 1956
    },
    {
      color: '#CFD1D1',
      from: 1976,
      to: 1980
    },
    {
      color: '#CFD1D1',
      from: 1992,
      to: 2011
    },]*/

    /* plotBands: [{
      color: 'rgba(200,200,200,0.1)',
      from: 1924,
      to: 1955
    },
    {
      color: 'rgba(200,200,200,0.2)',
      from: 1955,
      to: 1956
    },
    {
      color: 'rgba(200,200,200,0.1)',
      from: 1956,
      to: 1975
    },
    {
      color: 'rgba(200,200,200,0.4)',
      from: 1975,
      to: 1980
    },
    {
      color: 'rgba(200,200,200,0.3)',
      from: 1980,
      to: 1992
    },
    {
      color: 'rgba(200,200,200,0.81)',
      from: 1992,
      to: 2011
    },
    {
      color: 'rgba(200,200,200,0.2)',
      from: 2011,
      to: 2020
    },]*/
  },
  "yAxis": {
    "min": 0, 
    tickInterval: 800,
    max: 4000,
	  "labels": {
        "format": "{value:,.0f}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [

    {
    	"color": "#008AC3", 
    	"legendIndex": 0
    }, /* blau */
    {
    	"color": "#3c3c3c", /* schwarz */
    	"legendIndex": 1,
        },
            {
              "color": "#3c3c3c", /* schwarz */
              showInLegend: false,
                },
                {
                  "color": "#3c3c3c", /* schwarz */
                  showInLegend: false
                    },
                    {
                      "color": "#3c3c3c", /* schwarz */
                      showInLegend: false
                        },
                        {
                          "color": "#3c3c3c", /* schwarz */
                          showInLegend: false
                            },
                            {
                              "color": "#3c3c3c", /* schwarz */
                              showInLegend: false
                                },
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());
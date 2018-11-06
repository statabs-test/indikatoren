(function(){
    return {
  "yAxis": [{
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "title": ""
  },
  {
    gridLineColor: '#B9CFD7', 
    //gridLineWidth: 0.5,
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.f}%",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    //"max": 15,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 5
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
		//"y": 35,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#73b97c",
      "index": 0,
      "type": "column",
      "pointWidth": "8"
    },
    {
      "color": "#cd9c00",
      "index": 1,
      type: 'scatter',
      marker: {
          symbol: 'dot', 
          radius: 5,
      },
      "yAxis": 1, 
      connectNulls: true,
      tooltip: {
        valueDecimals: 2
      }
    }
  ],  
  "tooltip": {
    "shared": false
  },
  "chart": {
    "type": "line",
    "alignTicks": false
  },
  plotOptions: 
  {
    series: 
    {
      borderWidth: 1  
    }
  }  
	}
}());
 
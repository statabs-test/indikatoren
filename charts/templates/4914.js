(function(){
    return {
  "yAxis": [{
    "title": {
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    },
  {
    "title": {
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 2,
    "type": "category"
  },
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
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  },
  "series": [
    {
      "color": "#cd9c00",
      "index": 0,
      "type":"column",
      "yAxis":0, 
      //"pointWidth": "10"
    },
    {
      "color": "#73b97c",
      "index": 1,
      "yAxis": 1
    }
  ],  
  "tooltip": {
    "shared": false
  },
	};
}());

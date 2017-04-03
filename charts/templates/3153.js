(function(){
    return {
  "yAxis": [{
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": 15000,
    "tickInterval":3000,
    "title": ""
  },
  {
    "title": {
        "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}‰",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": 10,
    "tickInterval": 2,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 40,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#71a3b5",
      "index": 0,
      "type": "column",
      "pointWidth": "20",
      "tooltip": {
       "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
      }
    },
    {
      "color": "#7d60a0",
      "index": 1,
      "type": "line",
      "yAxis": 1,
      "tooltip": {
       "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}‰</b><br/>'
      }
    }
  ],  
  "tooltip": {
    "shared": true
  },
  "chart": {
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
  }
}
}());


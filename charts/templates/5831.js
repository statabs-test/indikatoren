(function(){
    return {
  "yAxis": [{
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "title": ""
  },
  ],
  "xAxis": {
    "tickInterval": 5
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
      "pointWidth": "10",
      "tooltip": {
       "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
      }
    },
    {
      "color": "#7d60a0",
      "index": 1,
      "type": "line",
      "marker": {
        "symbol": "circle",
        "enabled": false
      }, 

      "tooltip": {
       "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
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


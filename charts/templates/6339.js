(function(){
    return {
  "yAxis": [{
    "labels": {
      "format": "{value:,.0f}‰",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    "title": "",
    tickAmount: 5,
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
      "format": "{value:,.0f} Fr.",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    "gridLineWidth": 0,
    tickAmount: 5,
    "opposite": true
  }
  ],
  "xAxis": {
	"tickInterval": 2,
  },
  "series": [
    {
      "color": "#008AC3"
    },
    {
      "color": "#68AB2B",
      "yAxis": 1
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    "shared": false
  },
  "legend": {
    "enabled": true,
    //"x": 25,
    //"y": 35,
    "itemWidth": 500,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
}
}());


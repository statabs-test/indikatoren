(function(){
    return {
  "plotOptions": {
    "series": {
      "stacking": null,
      "pointPadding": 0,
      "groupPadding": 0.1
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%"
    }
  },
  "xAxis": {
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.1f}<br/>',
    shared: false
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 30,
	"y": 45,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#b00000"
    }, /*Schweiz - rot*/
    {
      "color": "#71a3b5"
    }, /*Ausland- blau*/
    {
      "color": "#ff8028",
      "marker": {
        "enabled": true
      }, /*Kt. BS - orange*/
      "type": "line"
    }    
  ],

  "chart": {
    "marginBottom": 65,
    "marginTop": 100,
    "type": "column"
  }
}
}());

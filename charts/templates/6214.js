(function(){
    return {
plotOptions: {
        area: {
            stacking: 'normal',
            //lineColor: '#666666',
            lineWidth: 1,

        }
    },
  "yAxis": [{
  	title: {
        text: null
    },
    "labels": {
      "format": "{value:,.0f}"
    },
    "min": 0,
    //"max": 200000,
    //"tickInterval":600,
    //"title": ""
  },
  {
    /*"title": {
        "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },*/
    title: {
        text: null
    },
    "labels": {
      "format": "{value:,.0f}"
    },
    "min": 0,
    // max: 120,
    //"tickInterval": 30,
    //"gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 2
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 45,
	"itemMarginBottom": 5,
    "itemWidth": 500, 
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#FFBB58", // Bevölkerung
      "index": 0,
      "type": "area",
      "marker": {
        "enabled": true,
        //radius: 3,
         "symbol": "circle",
      },
    },
     {
      "color":  "#A8C3CA", // Beschäftigte
      "index": 0,
      "type": "area",
      "marker": {
        "enabled": true,
         //radius: 3,
         "symbol": "circle",
      },
    },
    {
      "color":  "#246370", // Beschäftigte indexiert
      "index": 1,
      "type": "line",
      "yAxis": 1,
      "legendIndex": 3,
      "marker": {
        "enabled": true,
         "symbol": "circle",
      },
    }
  ], 
      "tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
		   },
  "chart": {
    "marginBottom": 65,
    "alignTicks": false
  }
}
}());
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
      "format": "{value:,.0f}",
       style:{
       		color: "black",
       },
    },
    "min": 0,
    //tickInterval: 25000
  },
  {
    "title": {
        "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    title: {
        text: null
    },
    "labels": {
      "format": "{value:,.0f}",
       style:{
       		color: "black",
       },
    },
    "min": 0,
    //tickInterval: 50000,
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
	//"y": 40,
	"x": 45,
	"itemMarginBottom": 5,
    "itemWidth": 500, 
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#FFBB58", // Area
      "index": 1,
      "type": "area",
      "marker": {
        "enabled": false,
        //radius: 3,
         "symbol": "circle",
      },
    },
     {
      "color":  "#A8C3CA", // Area
      "index": 0,
      "type": "area",
      "marker": {
        "enabled": false,
         //radius: 3,
         "symbol": "circle",
      },
    },
    {
      "color":  "#246370", // Line
      "index": 1,
      "type": "line",
      "yAxis": 1,
      "legendIndex": 3,
      "marker": {
        "enabled": false,
         "symbol": "circle",
      },
    }
  ], 
      "tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
		   },
  "chart": {
    "alignTicks": false
  }
}
}());
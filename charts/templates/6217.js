(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns
            borderWidth: 0
        }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	"type": "category",
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 45,
 	itemWidth: 500,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#B00000",  // red
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#008AC3", // blue
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
     {
      "color": "#68AB2B", // green
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
     {
      "color": "#E6E600", // yellow
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 3
    },
     {
      "color": "#923F8D", // pink
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 4
    },
  ],  
  "tooltip": {
    "shared": true
  },
};
}());
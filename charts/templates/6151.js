(function(){
    return {
  "yAxis": [{
  	title: {
        text: null
    },
    "labels": {
      "format": "{value:,.0f}"
    },
    "min": 0,
  },
  {
    title: {
        text: null
    },
    "labels": {
      "format": "{value:,.0f}"
    },
    "min": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    //"tickInterval": 2
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 20,
	"width": 300,
	"itemMarginBottom": 5,
    "itemWidth": 200, 
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#B00000", // Fussabdruck
      //"index": 1,
      "type": "line",
      "yAxis": 0,
       "marker": {
        "enabled": true
      },
      //legendIndex: 2,
      "tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
		   },
    },
    {
      "color":  "#246370", // BIP
      //"index": 1,
      "type": "line",
      "yAxis": 1,
      //"legendIndex": 3,
      "marker": {
        "enabled": true
      },
      "tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
		   },
		   
    }
  ],  
  "chart": {
    "marginBottom": 65,
    "alignTicks": false
  }
}
}());
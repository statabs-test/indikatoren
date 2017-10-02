(function(){
    return {
  "legend": {
  	y: 50,
  	itemWidth: 220,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    }
  },

        "series": [
            {
                "color": "#007A2F", // dark green
                "index": 4,
                "legendIndex": 4 
            },
            {
                "color": "#73BA7C", // light green
                "index": 3,
                "legendIndex": 3 
            },
                 {
                "color": "#C8C8C8", // grey
                "index": 2,
                "legendIndex":2 
            },        
            {
                "color": "#FFBB58", // light orange
                "index": 1,
                "legendIndex": 1 
            },
            {
                "color": "#FF8028", // dark orange
                "index": 0,
                "legendIndex": 0 
            },
    ],
    
    "xAxis": {
        "type": "category"
    }
	}
}());

 
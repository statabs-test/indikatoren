(function(){
    return {
      "xAxis": {
        "type": "category"
      },  
      "tooltip": {
        valueDecimals: 1
      },  
        "legend": {
	    "enabled": true,
	    "layout": "horizontal",
	    "verticalAlign": "top",
	    "align": "left",
		//"x": 45,
		"itemWidth": 120,
	    "itemStyle": {
	    "fontWeight": "normal"
	    }
	  },
      "series": [
        {"color": "#C8C8C8"}, /*grau*/
        {"color": "#CD9C00"}, /*dunkelrot*/
        {"color": "#FABD24"}, /*hellrot*/
        {"color": "#73B97C"}, /*hellgrün*/
        {"color": "#007A2F"} /*dunkelgrün*/
      ]
    };
}());
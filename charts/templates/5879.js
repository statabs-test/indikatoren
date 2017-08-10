(function(){
    return {
   	"chart": {
			spacing: [15,3,8,3], /*top, right, bottom and left */ /*[3,3,3,3]*/
		},
      "xAxis": {
        "type": "category"
      },  
      "tooltip": {
        valueDecimals: 1
      },  
       /* "legend": {
	    "enabled": true,
	    "layout": "horizontal",
	    "verticalAlign": "top",
	    "align": "left",
		//"x": 45,
		"itemWidth": 120,
	    "itemStyle": {
	    "fontWeight": "normal"
	    }
	  },*/
      "series": [
        {"color": "#C8C8C8"}, /*grau*/
        {"color": "#CD9C00"}, /*dunkelrot*/
        {"color": "#FABD24"}, /*hellrot*/
        {"color": "#73B97C"}, /*hellgrün*/
        {"color": "#007A2F"} /*dunkelgrün*/
      ]
    };
}());
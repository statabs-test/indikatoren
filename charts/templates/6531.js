(function(){
    return {
    "yAxis":{
    tickInterval:25,
    },
   
 	"xAxis": {
        "type": "category",
        "labels": {
            "formatter": function() {
                  	 return this.value;
            }
        } 
  },  
  plotOptions: {
  	column: {
  		groupPadding: 0,
  	}
  },
 "series": [
	 {"color": "#83038", index: 3, legendIndex: 0}, /* */
	 {"color": "#2F656B", index:  2, legendIndex: 1}, /* */
	 {"color": "#689199", index: 1, legendIndex: 2},  /* */
	 {"color": "#D3E2E4", index: 0, legendIndex: 3},  /* */
     ],
  "legend": { 
     y: 45,
    "enabled": true,
    "layout": "horizontal",
    "itemWidth": 105,
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
 "data":{
  	"switchRowsAndColumns": true
  },
"chart": {  
     "inverted": false,
  },
      tooltip: {
        valueDecimals: 0
      },
}
}());

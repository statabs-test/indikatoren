(function(){
    return {
    yAxis:{
    	tickInterval: 25,
    },
	"xAxis": {
        "type": "category",
        "labels": {
            "formatter": function() {
            	return this.value;
            }
        } 
    }, 
  "series": [
    {"color": "#007a2f"}, // dunkelgrün
    {"color": "#68ab2b"}, //grün
    {"color": "#999999"}, //grau
    {"color": "#ffbb58"}, //orange
    {"color": "#dc440e"}, // rot
  ],
"chart": {      
     "inverted": true,
  },
	}
}());

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
    {
      "color": "#999999",
      "index": 2
    },
    {
      "color": "#dc440e",
      "index": 0
    },
    {
      "color": "#ffbb58",
      "index": 1
    },
    {
      "color": "#68ab2b",
      "index": 3
    },
    {
      "color": "#007a2f",
      "index": 4
    }
  ],
"chart": {      
     "inverted": true,
  },
	}
}());

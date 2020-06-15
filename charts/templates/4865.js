(function(){
    return {
    "series": [
        {
            "color": "#71A3B5", 
            "index": 0            
        },
        {
            "color": "#FFBB58", 
            "index": 1
        },
        {
            "color": "#8A8A8A", 
            "index": 2
        }        
  ],
  "xAxis": {
      "type": "category"
  },
  legend: {
    reversed: false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 4,
    "align": "left",
    labelFormatter: function(){
        return this.name.replace("/", " /<br/>");

      }
  }
	}
}());

 
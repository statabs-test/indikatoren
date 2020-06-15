(function(){
    return {
        "series": [
            {"color": "#007A2F"},
            {"color": "#73BA7C"},
            {"color": "#FFBB58"},
            {"color": "#FF8028"},
            { "color": "#C8C8C8"}        
    ],
    legend: {
        reversed: false,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 4,
        "align": "left",
        labelFormatter: function(){
            return this.name.replace("/", " /<br/>");
    
          }
      
    },       
    "xAxis": {
        "type": "category"
    }
	}
}());

 
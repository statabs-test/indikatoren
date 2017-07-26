(function(){
    return {
	 "data":{
	  	"switchRowsAndColumns": true
	  },
	  "legend": {
	    "enabled": true,
	    "layout": "horizontal",
	    "verticalAlign": "top",
	    "align": "left",
		//"x": 45,
		"width": 330,
	    "itemStyle": {
	    "fontWeight": "normal"
	    }
	  },
      plotOptions: {
        pie: {
         colors: [
 	           '#B00000', 
	           '#FF8028', 
	           '#E6E600', 
	           '#68AB2B ', 
	           '#008AC3', 
         ],
        size: "50%",
		dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f} %',
		                style: {
		                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
		                    fontSize: '10px' 
		                }
	      }
      }
    }
    };
}());

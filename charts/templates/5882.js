(function(){
    return {
	 "data":{
	  	"switchRowsAndColumns": true
	  },
	   legend:{
      	itemStyle: {
		fontSize: "12px"
		}
      },
	  "legend": {
	    "enabled": true,
	    "layout": "horizontal",
	    "verticalAlign": "top",
	    "align": "left",
		//"x": 45,
		"itemWidth": 100,
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
        size: "100%",
		dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f} %',
		                distance: 17,
		                style: {
		                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
		                    fontSize: '12px', 
		                    fontWeight: 'normal'
		                }
	      }
      }
    }
    };
}());

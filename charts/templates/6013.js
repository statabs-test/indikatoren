(function(){
    return {
      legend:{
      	style: {
		fontSize: "12px"
		}
      },
      "data":{
      	"switchRowsAndColumns": true
      },
      "series": [ 
          {
              "name": "Anzahl"
          }        
      ],
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} km² ({point.percentage:,.1f}%)</b><br/>',
        "shared": false
      },
      plotOptions: {
        pie: {
         colors: [
           '#007A2F', 
           '#68AB2B ',
           '#73B97C',
           '#990300',
           '#6F6F6F',
           '#3C3C3C',
           '#008AC3'
         ],
		dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f}%',
		                distance: -30,
		                style: {
		                    color: 'white',
		                    textOutline: "0px white", 
                        fontWeight: "normal", 
                        fontSize: "12px"
		                }
	      }
      }
    }
    };
}());

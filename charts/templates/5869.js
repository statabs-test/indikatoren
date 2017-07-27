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
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f} km² ({point.percentage:.1f}%)</b><br/>',
        "shared": false
      },
	  "legend": {
	    "enabled": true,
	    "layout": "horizontal",
	    "verticalAlign": "top",
	    "align": "left",
		//"x": 45,
		//"width": 340,
		"itemWidth": 135,
	    "itemStyle": {
	    "fontWeight": "normal"
	    }
	  },
      plotOptions: {
        pie: {
         colors: [
           '#007A2F',  // Wald
           '#68AB2B ',  // Acker, Wiese, Weide
           '#73B97C',  // Übrige Grünfläche
           '#990300',  // Gebäude
           '#6F6F6F',  // Verkehrsflächen
           '#3C3C3C',  // Übrige versiegelte Fläche
           '#008AC3' // Gewässer
         ],
        size: "115%",
	dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f} %',
		                distance: 5,
		                style: {
		                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
		                    fontSize: '12px' 
		                }
	      }
      }
    }
    };
}());




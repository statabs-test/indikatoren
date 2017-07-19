(function(){
    return {
      "data":{
      	"switchRowsAndColumns": true
      },
      "series": [ 
          {
              innerSize: '20%',
              id: 0,
              showInLegend: false
          }, 
          {
              innerSize: '60%',
              linkedTo: ':previous'
          }
      ],
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f} km² ({point.percentage:.1f}%)</b><br/>',
            "shared": false
      },
      plotOptions: {
        pie: {
            borderWidth: 1,
            colors: [
               '#50B432', 
               '#ED561B', 
               '#DDDF00', 
               '#24CBE5', 
               '#64E572', 
               '#FF9655', 
               '#FFF263', 
               '#6AF9C4'
             ]
	      }
      }
    };
}());

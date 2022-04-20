/*global $*/
(function(){
    
    return {
      
      plotOptions: {
    
        series: {
            allowPointSelect: false,
            point: {
                events: {
                    legendItemClick: function (event) {
                        event.preventDefault();
                        /*
                        var id = this.id,
                            data = this.series.chart.series[0].data;
                        $.each(data, function (i, point) {
                           
                            if (point.parentId == id) {
                                if(point.visible)
                                    point.setVisible(false);
                                else
                                    point.setVisible(true);
                            }
                        });
                        */
                    }
                }
            }
        }
    },
        
      legend:{
        layout: "horizontal",
        verticalAlign: "top",
        align: "left",
        itemDistance: 2,
      	style: {
		fontSize: "12px"
		}
      },
      "series": [{
          data: {
                series: [
              {ParentId: '1',
          },{
              ParentId: '2',
          }]},
          
            showInLegend: false,
            type: 'pie',
            size: '100%',
            innerSize: '40%',
            center: [180,120],
          borderWidth: 2,
            colors: [
                "#008ac3",
                "#DC440E",
 
           
           
        ],
      }, {
            data: {
                series: [
              {id: '1',
          },{
              id: '2',
          }]},
            showInLegend: true,
            type: 'pie',
            innerSize: '70%',
            center: [180,120],
          borderWidth: 2,
             colors: [
                "#008ac3",
                "#DC440E",
            ],
        }],
        
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} </b> ({point.percentage:.1f}%)<br/><br/>',
        "shared": false
      },
      
     labels: {
  items: [{
    html: 'Innen: 2011-2020<br/>Aussen: 2021',
    style: {
     left: '300px',
      top: '250px'
    }
  }]
}
		/*dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f}',
		                distance: 1,
		                style: {
		                    color: 'black',
		                    textOutline: "0px black", 
                        fontWeight: "normal", 
                        fontSize: "12px"
		                }
	      }
      }
      */
     
    };
}());

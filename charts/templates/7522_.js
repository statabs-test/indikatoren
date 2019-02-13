/*global $*/
(function(){
    
    return {
      
      plotOptions: {
       series: {
            point: {
                events: {
                    legendItemClick: function () {
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
                    }
                }
            }
        },
    
        
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
        
            parentIdid: '1',
            showInLegend: true,
            type: 'pie',
            size: '100%',
            innerSize: '40%',
            center: [180,120],
          borderWidth: 2,
            colors: [
           "#DC440E",
           "#FABD24", 
           "#68AB2B",
           "#8A8A8A",
           
        ],
      }, {
          //linkedTo: '1',
            id: '1',
            showInLegend: false,
            type: 'pie',
            innerSize: '70%',
            center: [180,120],
          borderWidth: 2,
             colors: [
           "#DC440E",
           "#FABD24", 
           "#68AB2B",
           "#8A8A8A",
            ],
        }],
        
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.percentage:,.1f}%</b><br/>',
        "shared": false
      },
      
     labels: {
  items: [{
    html: 'innen: Inland<br/>aussen: Ausland',
    style: {
     left: '300px',
      top: '270px'
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

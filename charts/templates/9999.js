(function(){
    return {
        chart: {
        	type: 'area'
        },
        xAxis: {
            
            showFirstLabel: true,
            startOnTick: true,
            showLastLabel: true,
            endOnTick: true
            
        },
        yAxis: { 
            showLastLabel: true,
            endOnTick: true,
            labels: {
            	format: '{value:,.0f}'
            }, 
            opposite: false
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false, //null,
                    radius: 4
                }
            }
        },
    	rangeSelector: {
    		buttons: 
    			[
        			{
                      count: 10,
                      type: 'year',
                      text: '10J'
    	            }, 
    	            {
                      count: 50,
                      type: 'year',
                      text: '50J'
    	            }, 
    	            {
                      count: 100,
                      type: 'year',
                      text: '100J'
    	            },
    	            {
                      type: 'all',
                      text: 'Total'
    	            }
                ],
            inputEnabled: false,
            selected: 3 , 
            inputDateFormat: '%Y',
    		inputEditDateFormat: '%Y'
        }  
	};
}());

 
(function(){
    return {
        chart: {
            marginTop:70,
        	type: 'line'
        },
        xAxis: {
            endOnTick: true,    
            startOnTick: true,
            showFirstLabel: true,
            showLastLabel: true,
        },
        yAxis: { 
            showLastLabel: true,
            endOnTick: true,
            labels: {
            	format: '{value:,.0f}'
            }, 
            opposite: false,
        },
        tooltip: {
            xDateFormat: '%A, %e. %b. %Y',
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false, //null,
                    radius: 4
                }
            }
        },
        "series": [
            {
              "color": "#008AC3",
            },
            {
              type: "line",
              dashStyle: 'ShortDash',
              "color": "#999999",
     
            }
          ],
    	rangeSelector: {
    		buttons: 
    			[
        			{
                      count: 20,
                      type: 'year',
                      text: '20 J'
    	            }, 
    	            {
                      count: 50,
                      type: 'year',
                      text: '50 J'
    	            }, 
    	            {
                      count: 100,
                      type: 'year',
                      text: '100 J'
    	            },
    	            {
                      type: 'all',
                      text: 'Alle J'
    	            }
                ],
            buttonSpacing: 15,                
            inputEnabled: false,
            selected: 0, 
            inputDateFormat: '%Y',
    		inputEditDateFormat: '%Y'
        }  
	};
}());

 
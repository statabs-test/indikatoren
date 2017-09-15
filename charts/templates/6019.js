/*
    global Highcharts
*/

(function(){
    return {
        data: {
            parsed: function (columns) {
                //Negate the numbers in the the 2nd column to create the left side of the population pyramid
                var negateNumbersInColumn = function(columnIndex){
                    Highcharts.each(columns, function(column, i, c) {
                        if (i == columnIndex){
                            Highcharts.each(column, function(item, j, v){
                                if (typeof(item) == 'number'){
                                    v[j] = -v[j];
                                }
                            });
                        }
                    });
                };
                negateNumbersInColumn(1);
            }     
        },
        xAxis: [{
                reversed: false,
                type: 'category',
                labels: {
    	        	step: 1,
	                style: {
	                    color: "#000000"
	                }
                }, 
                tickLength: 0, 
	            title: {
	                style: {
	                    color: "#000000"
	                }
	            },
	            tickColor: "#FFFFFF"
            }, 
            { // mirror axis on right side
                type: 'category',
                visible: false,
                opposite: true,
                reversed: false,
                linkedTo: 0
            }
        ],                
		series: [
            {
              color: "#B00000", // rot
              //borderWidth: 0,
              //pointWidth: 15
            }, 
            {
              color: "#008AC3", //blau
              //borderWidth: 0,
              //pointWidth: 15
            },
             {
              color: "#000000", //schwarz
              //borderWidth: 0,
              //pointWidth: 15
            }
	    ],
	    plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
            pointWidth: 16
        }
   },

	};
}());
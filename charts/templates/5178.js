(function(){
    return {
	plotOptions:  {
	    series: {
            pointPadding: 0,
            groupPadding: 0,
            borderWidth: 0,
            shadow: false,
            pointWidth: 10,
        }
	},
    "yAxis":{
        tickInterval:25,
    },
 	"xAxis": {
        "type": "category",
        "labels": {
		  align: "left",
          x: -190,
            "formatter": function() {
                //add sum of observations of visible series to the axis label
                var allVisibleSeries = this.chart.series.filter(function(val, i, arr){
                    return val.visible;
                });
                var indexOfCurrentValue = this.axis.names.indexOf(this.value);
                var sum = allVisibleSeries.reduce(function(accumulator, series, index, arr){
                    return accumulator + series.yData[indexOfCurrentValue];
                }, 0);
                //use N if all series are visible, otherwise use n
                var nString = /*(this.chart.series.length == allVisibleSeries.length) ? 'N=' : */ 'n='; 
                //check for value that contains only spaces
            	return (this.value.replace(/\s/g,"") == "") ? this.value : this.value + ' (' + nString + sum + ')';
            }
        } 
      },  
      plotOptions: {
      	column: {
      		groupPadding: 0,
    
      	}
      },
      "series": [
        {"color": "#C8C8C8", index: 1, legendIndex: 1}, /*grau*/
        {"color": "#CD9C00", index: 2, legendIndex: 2}, /*dunkelrot*/
        {"color": "#FABD24", index: 3, legendIndex: 3}, /*hellrot*/
        {"color": "#73B97C", index: 4, legendIndex: 4}, /*hellgrün*/
        {"color": "#007A2F", index: 5, legendIndex: 5} /*dunkelgrün*/
      ],
    "chart": {      
    	 marginLeft: 200,
         inverted: true,
         "width": 600,
         height: 600,
      },
    };
}());

(function(){
    return {
        yAxis:{
        	tickInterval: 25,
        },
    	"xAxis": {
            "type": "category",
            "labels": {
            	align: "right",
            	//x: -120,
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
                    var nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n='; 
                    //check for value that contains only spaces
                	return (this.value.replace(/\s/g,"") == "") ? this.value : this.value + ' (' + nString + sum + ')';
                }
            } 
        }, 
      "series": [
        {"color": "#007a2f"}, // dunkelgrün
        {"color": "#68ab2b"}, //grün
        {"color": "#999999"}, //grau
        {"color": "#ffbb58"}, //orange
        {"color": "#dc440e"}, // rot
      ],
    "chart": {      
    	  //marginLeft: 120,
         "inverted": true,
      },
    };
}());

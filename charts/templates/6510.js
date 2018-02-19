(function(){
    return {
    "yAxis":{
    tickInterval:25,
    },
 	"xAxis": {
        "type": "category",
        "labels": {
           align: "left",
            x: -125,
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
  yAxis:{
  	tickInterval: 20,
  	max: 100,
  	labels:{
  		"type": "category",
  		rotation: 0,
  	}
  },
  plotOptions: {
  	column: {
  		groupPadding: 0,

  	}
  },
  "series": [
    { "color": "#246370", index: 4, legendIndex: 4}, // dunkelgrün
    { "color": "#A8C3CA", index: 3, legendIndex: 3}, // grün
    { "color": "#FABD24", index: 2, legendIndex: 2}, // orange
    { "color": "#999999", index: 0, legendIndex: 0}, // grau
  ],
"chart": {     
	 marginLeft: 140, 
	 //marginBottom: 100,
     "inverted": true,
  },
}
}());

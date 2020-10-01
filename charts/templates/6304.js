(function(){
    return {
    "yAxis":{
        tickInterval:25,
        labels: {
            y: 12,
        }
    },
 	"xAxis": {
        "type": "category",
       // categories: ['2019: männlich', '2019: weiblich', '2015: männlich',	'2015: weiblich',	'2011: männlich',	'2011: weiblich',	'2007: männlich',	'2007: weiblich',	'2005: männlich', '2005: weiblich'],
        "labels": {
            align: "left",
            x: -125,
            y: 3,
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
  data: {
    //only keep first and last year
    parsed: function(columns){
          columns.forEach(function(column, i, arr){
              column.splice(column.length-3,3);
          });
    }
},
  plotOptions: {
  	column: {
  		groupPadding: 0,

  	}
  },
  "series": [
  {"color": "#007a2f", "index": 9, "legendIndex":0}, /*grün dunkel2*/
  {"color": "#44ab2b", "index": 8, "legendIndex":1}, /*grün mittel*/
  {"color": "#73ba7c", "index": 7, "legendIndex":2}, /*grün dunkel1*/
  {"color": "#d7e9d2", "index": 6, "legendIndex":3}, /*grün hell*/
  {"color": "#b9cfd7", "index": 5, "legendIndex":4}, /*blau hell */
  {"color": "#71a3b5", "index": 4, "legendIndex":5}, /*blau dunkel */
  {"color": "#ffbb58", "index": 3, "legendIndex":6}, /*orange hell */
  {"color": "#ff8028", "index": 2, "legendIndex":7}, /*orange dunkel */
  {"color": "#dc440e", "index": 1, "legendIndex":8}, /*rot hell */
  {"color": "#b00000", "index": 0, "legendIndex":9} /*rot dunkel */
  ],
"chart": {     
	 marginLeft: 140, 
     "inverted": true,
     width: 665, 
     spacing: [1,1,1,1]
  },
};
}());

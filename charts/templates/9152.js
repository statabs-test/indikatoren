(function(){
    return {
    "yAxis":{
        tickInterval:25,
    },
 	"xAxis": {
        "type": "category",
        "labels": {
		  align: "left",
          x: -130,
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
      plotOptions: {
      	column: {
      		groupPadding: 0,
    
      	}
      },
      "series": [
        {"color": "#FFBB58", "index": 4, "legendIndex": 0}, /*gelb*/
        {"color": "#71A3B5", "index": 3, "legendIndex": 1}, /*blau mittel*/
        {"color": "#256370", "index": 2, "legendIndex": 2}, /*blau dunkel*/
        {"color": "#C8C8C8", "index": 1, "legendIndex": 3}, /*grau hell*/
        {"color": "#6F6F6F", "index": 0, "legendIndex": 4}, /*grau*/
        ],

    "chart": {      
    	 marginLeft: 145,
         "inverted": true,
        "height": 550,       

      },
    "legend": {
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 5,     
        "align": "left",
        "useHTML": false,
        "itemStyle": {
            "fontWeight": "normal"
        },
        "symbolRadius": 0,
        "labelFormatter": function () {
            return this.name.replace('/', '/<br/>');
        }
    }
    };
}());

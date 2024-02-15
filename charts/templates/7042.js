(function(){
    return {
      data: {
        parsed: function(columns){
          var pointsToKeep=10;
          //keep only the last n elements in the arrays but keep the column title
          columns.forEach(function(v, i, a){
            v.splice(1, v.length-pointsToKeep-1);
          });
        }
      },
    "xAxis": {
    "tickInterval": 1,
    labels:{
      rotation:0
    }
  },
  "yAxis": {
    tickAmount: 5,
	"labels": {
		"format": "{value:,.0f}",
		"formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      }, 
	}
  },	
  "tooltip": {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
    },
  }, 
 "series": [
    {"color": "#008AC3"}, /*Männer*/
 	  {"color": "#DC440E"}, /*Frauen*/
	  {"color": "#3C3C3C"}, /*Total*/
	  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 55,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    },
     series: {
            connectNulls: true
        },
  }
}
}());
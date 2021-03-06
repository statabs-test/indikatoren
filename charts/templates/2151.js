(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
             groupPadding: 0,
             borderWidth: 0,
        }
  },
  "yAxis": {
      tickAmount: 8,
    "labels": {
      "format": "{value:,.0f}",
       "formatter": function(){
        return Highcharts.numberFormat((this.value),0)+''; 
      }, 
    }
  },
  "xAxis": {
  	"type": "category",
    "tickInterval": 1,
          "labels": {
          	step: 1,
        }  
  },
 "legend": { 
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    padding: 0,
    itemDistance: 2,
    width: 485,
    itemWidth: 220
  },
 "series": [
	 {"color": "#E7CEE2", index: 15}, /* */
	 {"color": "#923F8D", index: 14}, /* */
	 {"color": "#662673", index: 13}, /* */
	 {"color": "#73B97C", index: 12}, /* */
	 {"color": "#B6CFD7", index: 11}, /* */
	 {"color": "#007A2F", index: 10}, /* */
	 {"color": "#FFDA80", index: 9}, /* */
	 {"color": "#FFBB58", index: 8}, /* */
	 {"color": "#689199", index: 6}, /* */
	 {"color": "#008AC3", index: 3},  /* */
	 {"color": "#C8C8C8", index: 2},  /* */
	 {"color": "#2B0099", index: 1}, /* */
	 {"color": "#8A8A8A", index: 0}, /* */
  ],
 tooltip: {
     shared: true,
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + ' </b><br/>' 
    },
    footerFormat: '\u25CF Total: <b>{point.total:,.0f}</b><br/>'
  },  
  "chart": {
  //	height: 600,
  	type: "column",
    inverted: false,
  }
};
}());






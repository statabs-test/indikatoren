(function(){
    return {
  series: [
    {"color": "#DC440E", index: 3, legendIndex: 0}, /**/
    {"color": "#FABD24", index: 2, legendIndex: 1}, /**/
    {"color": "#68AB2B", index: 1, legendIndex: 2}, /**/
    {"color": "#8A8A8A", index: 0, legendIndex: 3}, /**/
  ],
  chart: {
    inverted: true
  },
  legend: {
    itemDistance: 5,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 45,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },  
  yAxis: {
    tickInterval: 20
  },
  xAxis: {
    reversed: false,
    labels: {
      formatter: function() {
      	return this.value;
      }
    }
  },

};
}());


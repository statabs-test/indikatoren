/*
global Highcharts
*/


(function(){
    return {
 "xAxis": {
    "tickInterval": 4,
     "type": "category",
     labels:{
        x: 11,
       rotation: 0,
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
  },
  "yAxis": {
    tickAmount: 9,
    tickInterval: 1000,
	"labels": {
		"format": "{value:,.0f}",
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color": "#C8C8C8"},
  {"color": "#008AC3"}, 
  {"color": "#6F6F6F"}, 
  {"color": "#2B0099"}, 
	  ],
  "legend": {
    "enabled": true,
    //"y": 35,
    itemWidth: 1000,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
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
    }
  },
data: {
    parsed: function(columns){
      var pointsToKeep=40;
      //keep only the last n elements in the arrays but keep the column title
      columns.forEach(function(v, i, a){
        v.splice(1, v.length-pointsToKeep-1);
      });
    }
  },
};
}());
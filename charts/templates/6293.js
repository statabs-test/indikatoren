/*
global Highcharts
*/

(function(){
    return {
  "xAxis": {
    "tickInterval": 1, 
    labels: {
      step: 2,
      rotation: -45,
    },
  },
  "yAxis": {
  	"labels": {
  	  formatter: function(){
  		  return Highcharts.numberFormat((this.value*100),1)+'%'; 
  	  }
  	}
  },	
  "tooltip": {
    "shared": false, 
    "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>';
    },

  },
  "series": [
    {"color": "#008AC3",
    legendIndex: 0,}, /* grün */
  	{
  	  "color": "#68AB2B",
	    legendIndex: 2,
    }, /* blau */
  	{
  	  "color": "#3C3C3C",
    	legendIndex: 1,
    }, /* scharz */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 3,
    padding: 0,
    itemDistance: 18,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 
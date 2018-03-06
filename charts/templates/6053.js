(function(){
    return {
  "xAxis": {
    "tickInterval": 2
  },
  "yAxis": {
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
    {"color": "#008AC3",
    legendIndex: 0,
      "marker": {
        "enabled": false
      }    
    }, /* grün */
    	{"color": "#68AB2B",
	visible:true,
	legendIndex: 2,
      "marker": {
        "enabled": false
      }    
    }, /* blau */
    	{"color": "#3C3C3C",
	legendIndex: 1,
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* scharz */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    "y": 35,
    "itemWidth": 500,
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
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 
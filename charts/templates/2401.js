(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
    "labels": {
     "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      }, 
      "format": "{value}" 
    }    
  },
  "series": [
	{"color": "#A8C3CA", "index": 2}, /*AG*/
 	{"color": "#FF8028","index": 1}, /*BL*/
	{"color": "#6F6F6F", "index": 0}, /*BS*/
	{"color": "#990300", "index": 4}, /*CH*/
	{"color": "#008AC3", "index": 3}, /*ZH*/
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	"y": 55,  
	"itemWidth": 300,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ':<b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
    },
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 
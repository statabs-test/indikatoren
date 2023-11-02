(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    //tickInterval: 10,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    crosshairs: true,
    "shared": true, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
  {
    "index": 0,
    name: "Anteil",
    "color": "#b00000",
   /* "tooltip": {
      "pointFormatter": function(){
        return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((100*this.y),1) + '%</b>';
      }
    } */
  }, /*Deutsch*/
  {  /* Konfidenzintervall als Band */
    "index": 1,
    name: "95% Konfidenzintervall",
    "color": "#672773",
    "type": "arearange",
    lineWidth: 0,
    linkedTo: ':previous',
    fillOpacity: 0.3,
   /* zIndex: 0 , */
    marker: {
        enabled: false
      }
    /*"tooltip": {
      "pointFormatter": function(){
        return '<br/>' + ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((100*this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((100*this.high),1) + '%</b>)<br/>';
      },
    } */
  }/*, 
  
  {"color": "#007a2f"}, 
  {"color": "#fabd24"}, 
  {"color": "#b475ab"}, 
  {"color": "#71a3b5"}, 
  {"color": "#b9cfd7"}, 
  {"color": "#ff8028"}, 
  {"color": "#73ba7c"}, 
  {"color": "#9f7c5a"}, 
  {"color": "#999999"}, */
  ],
   "legend": {
    "enabled": true,
    "layout": "horizontal",
    itemDistance: 5, 
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
    }
  }
}
}());
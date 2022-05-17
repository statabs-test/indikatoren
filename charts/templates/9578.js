(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    /*tickInterval: 10,
    max: 100, */
	  "labels": {
		  "format": "{value}"
	  }
  },	
    /*"chart": {
        type: 'line',
        inverted: true,
    },*/
data:{
  switchRowsAndColumns: true
},
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>'
  },
 "series": [
  {"color": "#b00000"}, /*Barfi*/
  {"color": "#672773"}, /*Marktplatz*/
  {"color": "#007a2f"}, /*Münsterplatz*/
  {"color": "#fabd24"}, /*Oberer Rheinweg*/
  {"color": "#b475ab"}, /*Unterer Rheinweg*/
  {"color": "#b9cfd7"}, /*Kaserne*/
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    "itemWidth": 230,
    "width": 460,
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
        "inverted": false,

      } 
    }
  }
}
}());
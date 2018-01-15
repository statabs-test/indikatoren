(function(){
    return {
  "xAxis": {
  },
  "yAxis": {
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
<<<<<<< HEAD
	{"color": "#256370",
  "yAxis": 0, visible: true}, /*blau*/
	{"color": "#a8c4cb",
 "yAxis": 0, visible: true}, /*hellblau*/
	{"color": "#ffbb58",
  "yAxis": 0, visible: true}, /*hellorange*/
	{"color": "#b475ab",
  "yAxis": 0, visible: true}, /*hellviolett*/
	{"color": "#44ab2b",
  "yAxis": 0, visible: true}, /*grün*/
  {"color": "#007a2f",
  "yAxis": 0, visible: true},  /*dunkelgrün*/
=======
  {"color": "#b00000", legendIndex: 0}, /*Schweiz*/
  {"color": "#661200", legendIndex: 2, dashStyle: 'LongDash'}, /*Schweizer*/
  {"color": "#dc440e", legendIndex: 4, dashStyle: 'LongDash'}, /*Schwezerinnen*/
  {"color": "#cd9c00", legendIndex: 1}, /*Ausland*/
  {"color": "#7f5f1a", legendIndex: 2, dashStyle: 'LongDash'}, /*Ausländer*/
  {"color": "#ffda80", legendIndex: 5, dashStyle: 'LongDash'}, /*Ausländerinnnen*/
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    "y": 35,
<<<<<<< HEAD
    "itemWidth": 140,
=======
    "itemWidth": 160,
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
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
    }
  }
}
}());
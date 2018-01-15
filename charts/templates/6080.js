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
	{"color": "#672773",
 "yAxis": 0, visible: true}, /*violett*/
	{"color": "#b00000",
  "yAxis": 0, visible: true}, /*rot*/
=======
  {"color": "#b00000"}, /*Schweiz*/
  {"color": "#672773"}, /*Deutschland*/
  {"color": "#007a2f"}, /*Italien*/
  {"color": "#fabd24"}, /*Türkei*/
  {"color": "#b475ab"}, /*EU-17 & EFTA*/
  {"color": "#71a3b5"}, /*EU-Ost */
  {"color": "#b9cfd7"}, /*Balkan*/
  {"color": "#999999"}, /*Übrige Länder*/
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
  ],
   "legend": {
    "enabled": true,
    //"x": 45,
    "y": 35,
    "itemWidth": 140,
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
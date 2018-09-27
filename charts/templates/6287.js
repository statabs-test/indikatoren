(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    max: 25000,
    tickInterval: 5000,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
 	{"color": "black",}, /*schwarz BS*/
 	{"color": "#007a2f",}, /*grün BE*/
	{"color": "#ff8028",}, /*orange GE*/
	{"color": "#b00000",}, /*rot Liestal*/
	{"color": "#a0bec8",}, /*hellblau ZH*/
	  ],
  "legend": {
    "enabled": true,
    margin: 2,
    padding: 2,
    itemDistance: 7,
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
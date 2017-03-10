(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
  	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
    {"color": "#44ab2b"}, /* grün*/
    {"color": "#71a3b5"}, /*blau*/
  	{"color": "#b00000"}, /* rot*/
    {"color": "#000000"}, /*schwarz*/
  	{"color": "#8a8a8a"}, /* grau*/
    {"color": "#933f8d"}, /*pink*/
  	{"color": "#ff8028"}/* gelb*/
  ],
  "legend": {
    "enabled": true,
    "x": 45,
    "y": 35,
    "itemWidth": 200,
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
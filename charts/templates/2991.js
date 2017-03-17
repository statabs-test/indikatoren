(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
  	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
 "series": [
 	{"color": "#b00000"}, /*dunkelrot*/
	{"color": "#71a3b5"}, /*blau*/
	{"color": "#474747"}, /*dunkelgrau*/
	{"color": "#672773"}, /*dunkelviolett*/
	{"color": "#8a8a8a"}, /*grau*/
	{"color": "#44ab2b"}, /*hellgrün*/
	{"color": "#9f7c5a"}, /*hellbraun*/
	{"color": "#dc440e"}, /*orange*/
	{"color": "#007a2f"}, /*grün*/
	{"color": "#b475ab"} /*hellviolett*/
  ],
  "legend": {
    "enabled": true,
    "x": 55,
    "y": 50,
    "itemWidth": 180,
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
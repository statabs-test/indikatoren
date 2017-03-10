(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
	{"color": "#256370",
  "visible": true}, /*blau*/
	{"color": "#a8c4cb",
  "visible": true}, /*hellblau*/
	{"color": "#ffbb58",
  "visible": true}, /*hellorange*/
	{"color": "#b475ab",
  "visible": true}, /*hellviolett*/
	{"color": "#44ab2b",
  "visible": true}, /*grün*/
  {"color": "#007a2f",
  "visible": true},  /*dunkelgrün*/
	{"color": "#672773",
  "visible": true}, /*violett*/
	{"color": "#b00000",
  "visible": true}, /*rot*/
	{"color": "#ff8028",
  "visible": true}, /*orange*/
	{"color": "#cd9c00",
  "visible": true}, /*hellbraun*/
	{"color": "#8a8a8a",
  "visible": true}, /*hellgrau*/
  {"color": "#474747",
  "visible": true,
    "marker": {
      "enabled": true
  }
  }  /*dunkelgrau*/
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 35,
    "itemWidth": 200,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 2,
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
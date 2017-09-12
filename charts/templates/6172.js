(function(){
    return {
  "xAxis": {
    "tickInterval": 3
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
	{"color": "#256370",
  index: 10, "visible":  false}, /*blau*/
	{"color": "#a8c4cb",
  index: 9, "visible":  false}, /*hellblau*/
	{"color": "#ffbb58",
  index: 8, "visible":  false}, /*hellorange*/
	{"color": "#b475ab",
  index: 7, "visible":  false}, /*hellviolett*/
	{"color": "#44ab2b",
  index: 6, "visible":  true}, /*grün*/
  {"color": "#007a2f",
  index: 5, "visible":  false},  /*dunkelgrün*/
	{"color": "#672773",
  index: 4, "visible":  false}, /*violett*/
	{"color": "#b00000",
  index: 3, "visible":  false}, /*rot*/
	{"color": "#ff8028",
  index: 2, "visible":  false}, /*orange*/
	{"color": "#cd9c00",
  index: 1, "visible":  false}, /*hellbraun*/
      {
	  "color": "#E6E6E6",
	  "index": 0,
      "legendIndex": 12,
      "type": "column",
      "borderWidth": 0,
      /*"tooltip": {
    		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
       }*/
    }, // Blau
  ],
  "legend": {
    "enabled": true,
    "x": 45,
    "y": 35,
    "itemWidth": 208,
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
 
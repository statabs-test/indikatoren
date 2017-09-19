(function(){
    return {
  "xAxis": {
    "tickInterval": 2
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
  index: 10}, /*blau*/
	{"color": "#a8c4cb",
  index: 9}, /*hellblau*/
	{"color": "#ffbb58",
  index: 8}, /*hellorange*/
	{"color": "#b475ab",
  index: 7}, /*hellviolett*/
	{"color": "#44ab2b",
  index: 6}, /*grün*/
  {"color": "#007a2f",
  index: 5},  /*dunkelgrün*/
	{"color": "#672773",
  index: 4}, /*violett*/
	{"color": "#b00000",
  index: 3}, /*rot*/
	{"color": "#ff8028",
  index: 2}, /*orange*/
	{"color": "#cd9c00",
  index: 1}, /*hellbraun*/
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
 
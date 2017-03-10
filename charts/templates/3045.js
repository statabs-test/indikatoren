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
  	{"color": "#933f8d",
  	 "visible": true,
  	}, /* violett*/
  	{"color": "#44ab2b",
  	 "visible": true,}, /*grün*/
  	{"color": "#fabd24",
  	 "visible": true,}, /*gelb*/
  	{"color": "#71a3b5",
  	 "visible": true,}, /*hellblau*/
  	{"color": "#256370",
  	 "visible": true,}, /*dunkelblau*/
  	{
      "color": "#b00000", /* rot */
      "marker": {
        "enabled": true
      }
  	},
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 50,
    "itemWidth": 210,
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
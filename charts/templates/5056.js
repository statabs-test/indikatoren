(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
  	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
    {"color": "#69929b"}, /*blau*/
    {"color": "#44ab2b"}, /* grün*/
    {"color": "#ff8028"}, /*orange*/
    {"color": "#933f8d"}, /* violett*/
    {"color": "#c8c8c8"}, /*grau*/
    {"color": "#b00000"}/* rot*/
  ],
  "legend": {
    "enabled": true,
    "x":30,
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
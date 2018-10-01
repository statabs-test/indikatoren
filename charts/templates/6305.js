(function(){
    return {
      chart: {
        spacing: [5,3,3,3], /*top, right, bottom and left */
        width: 665,
      },
  "xAxis": {
    "tickInterval": 1,
    labels: {
      step: 1,
      rotation: -45,
    },
  },
  "yAxis": {
    max: 40, 
    tickInterval: 10,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#B00000",}, /* dunkelrot */
  	{"color": "#007A2F",}, /* dunkelgrün */
  	{"color": "#4f81bd",}, /* dunkelblau */
  	{"color": "#662673",}, /* dunkelviolett */
    {"color": "#7F5F1A",}, /* dunkelbraun */
  	{"color": "#FABD24",}, /* dunkelgelb */
  	{"color": "#3C3C3C",}, /* schwarz */
  	{"color": "#2B0099",}, /* dunkelblau */
  	{"color": "#E7CEE2",}, /* hellviolett */
  	{"color": "#A8C3CA",}, /* hellblau */
  	{"color": "#8AB77D",}, /* hellgrün */
  ],
  "legend": {
    "enabled": true,
    margin: 6,
    padding: 1,
    itemDistance: 5,
    y: -20,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 1,
    "align": "right",
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
};
}());
 
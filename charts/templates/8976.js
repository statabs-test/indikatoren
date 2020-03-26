(function(){
    return {
  "xAxis": {
      type: "category",
    "tickInterval": 5,
    labels:{
    "formatter": function() {
        return this.value.replace("25. Feb", "<b>25. Feb")
        .replace("16. Mrz", "<b>16. Mrz")}}
  },
  "yAxis": {
    "min": 0, 
    tickInterval: 100000,
  	"labels": {
          "format": "{value:,.0f}"}
  },	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    //{"color": "#008AC3"}, 
	{"color": "#FABD24"}, 
  	{"color": "#68AB2B"},
    {"color": "#B00000"},
  ],
  "legend": {
    "enabled": true,
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
        "radius": 3
      }
    }
  }, chart:{
     // width: 600
  }
};
}());
 
(function(){
    return {
      xAxis: {
        tickPositioner: function () {
          var interval = 1,
            ext = this.getExtremes(),
            i = ext.dataMax,
            pos = [i];
          while (i >= ext.dataMin) pos.unshift(i = i - interval);
          return pos;
        }
      },
  "yAxis": {
    "min": 0, 
    //tickInterval: 10,
  //  max: 40, 
	  "labels": {
		  "format": "{value}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
 "series": [
	{"color": "#6F6F6F"}, /*BS*/
 	{"color": "#FF8028"}, /*BL*/
    {"color": "#008AC3"}, /*AG*/
 	{"color": "#FABD24"}, /*SO*/
    {"color": "#B00000"}, /*übrige CH*/
    {"color": "#68AB2B"}, 
  ],
   "legend": {
    "enabled": true,
    //"y": 15,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    //itemDistance: 0,
    //width: 500,
    //"itemWidth": 130,
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
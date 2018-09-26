(function(){
    return {
      chart: {
        spacingTop: 5,
      },
   "yAxis": {
    "labels": {
      "format": "{value:,.0f} °C",
    }
  },
  "xAxis": {
	  "tickInterval": 2,
  },
  "series": [
    {color: "#8b2223"},
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} °C</b><br/>',
    "shared": false
  },
  
}
}());


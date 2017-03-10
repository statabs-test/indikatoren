(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    "max": 10000,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
	{"color": "#b00000"}, /*rot*/
	{"color": "#672773"}, /*violett*/
	{"color": "#71a3b5"} /*hellblau*/
  ],
  "legend": {
    "enabled": false,
    "x": 20,
    "y": 50,
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
      }, 
    },
     "series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
        "y": -5,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var first  = this.series.data[0];
            if (this.point.category === first.category  && this.point.y === first.y) {
              return this.series.name;
            }
            return "";
          }
      }
    }
  }
}
}());
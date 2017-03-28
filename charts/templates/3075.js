(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0,
	  "labels": {
		  "format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
	{	"color": "#b00000", 
		"marker": {
        	"enabled": true
		}
	}, /*rot*/
	{"color": "#b00000"}, /*rot*/
	{"color": "#71a3b5", 
      "marker": {
        "enabled": true
		}
	}, /*hellblau*/
	{"color": "#71a3b5"}
  ],
  "legend": {
    "enabled": true,
    "x": 20,
    "y": 60,
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
       /*"dataLabels": {
        "enabled": true,
        "allowOverlap": true,
       "y": -20,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last  = this.series.data[this.series.data.length - 1];
            if (this.point.category === last.category  && this.point.y === last.y) {
              return this.series.name;
            }
            return "";
          }
      }*/
    }
  }
}
}());
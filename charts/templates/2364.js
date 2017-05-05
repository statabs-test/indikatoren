(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },
  "series": [
	  {"color": "#ff8031",
      "index": 2,
  	   "marker": {
          "enabled": true
      }
  	}, /* BS = orange */
    {"color": "#ffc000",
      "index": 3
    }, /* BL gelb */
  	{"color": "#256370",
  	  "index": 4
  	}, /* Aargau = dunkelblau */
    {"color": "#b00000",
      "index": 1,
       "marker": {
        "enabled": true
    }
    } /*  Schweiz = rot */
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 35,
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
     /*"series": {
      "dataLabels": {
        "y": 0,
        "enabled": true,
        "allowOverlap": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var first  = this.series.data[0];
            if (this.point.category === first.category  && this.point.y === first.y) {
              return this.series.name;
            }
            return "";
          }
      }
    }*/
  }
}
}());

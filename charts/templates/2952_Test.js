(function(){
    return {
 "xAxis": {
	"tickPositioner": function () {
		var positions = [],
		tick = Math.floor(this.dataMin),
		increment = Math.ceil((this.dataMax - this.dataMin) / 6);
		if (this.dataMax !== null && this.dataMin !== null) {
			for (tick; tick - increment <= this.dataMax; tick += increment) {
				positions.push(tick);
			}
		}
		return positions;
	}
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
  {"color": "#B00000",
  	"index": 10,
  	"visible": false
  }, /* rot - Schweiz */
  {"color": "#183ec9",
  	"index": 11,
  	"visible": false
  }, /* blau - Ausland*/
  {"color": "#E64900",
  	"index": 4
  	}, /* hellgrün - 18-29 */
  {"color": "#FF8028",
  	"index": 5,
  	}, /* 30.39 J. */
  {"color": "#FABD24",
  	"index": 6
  	}, /* 50-49 J. */
  {"color": "#73B97C",
  	"index": 7
  	}, /* 50 - 59 J. */
  {"color": "#B6CFD7",
  	"index": 8
  	}, /* 60-69 J. */
  {"color": "#E7CEE2",
  	"index": 9
  	}, /* dunkelgrün >69 J. */
  {"color": "#008AC3",
  	"index": 1,
  	"visible": false
  	}, /* blau - Männer */
  {"color": "#923F8D",
  	"index": 2,
  	"visible": false
  	}, /* violett - Frauen */
  {"color": "#3c3c3c",
  	"index": 3,
  	"visible": false,
  	  "marker": {
        "enabled": true
    }
  	} /* schwarz - Total  */
  ],
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
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
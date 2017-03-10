(function(){
    return {
  "xAxis": {
    "tickInterval": 2,
	"labels": {
		"rotation": 0
	}
  },
  "yAxis": {
    "min": 100,
	"labels": {
		"format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
  	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#71A3B5", 
    "index": 1,
    "marker": {
    "enabled": true
    },
     "visible": true,
    }, /* BS global = hellblau*/
    {"color": "#E7CEE2", 
    "index": 3,
    "marker": {
    "enabled": true
    },
     "visible": true,
    }, /* BE global hellpink*/
	  {"color": "#73B97C", 
    "index": 5,
    "marker": {
    "enabled": true
    },
     "visible": true,
	  }, /* GE global hellgrün*/
  	{"color": "#FFBB58", 
    "index": 7,
    "marker": {
    "enabled": true
    },
     "visible": true,
  	}, /* ZH global gelb*/
  	{"color": "#71A3B5", 
    "index": 2,
     "visible": false,
  	}, /* BS kontinental dunkelblau*/
    {"color": "#E7CEE2", 
    "index": 4,
     "visible": false,
    }, /* BE kontinental dunkelpink*/
  	{"color": "#73B97C", 
    "index":6,
     "visible": false,
  	}, /* GE kontinental dunkelgrün*/
    {"color": "#FFBB58", 
    "index": 8,
     "visible": false,
    }  /* Zürich kontinental orange*/
	// {"color": "#8a8a8a"}, /* BS global = grau*/
    // {"color": "#aaa2c7"}, /* BE global lila*/
	// {"color": "#256370"}, /* GE global dunkelblau*/
  	// {"color": "#67401E"}, /*ZH global dunkelbraun*/
  	// {"color": "#C8C8C8"}, /* BS kontinental hellgrau*/
    // {"color": "#E7CEE2"}, /* BE kontinental hellila*/
  	// {"color": "#007A2F"}, /* GE kontinental hellblau*/
    // {"color": "#C4AB91"}  /* Zürich kontinental hellbraun*/
  ],
  "legend": {
    "enabled": true,
    "itemWidth": 200,
    "x": 20,
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
      } 
    }
  }
}
}());
 
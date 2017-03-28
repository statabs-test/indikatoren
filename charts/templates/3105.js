(function(){
    return {
 "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
  {"color": "#C9D6DB",
  }, 
  {"color": "#E7CEE2",
  },
  {"color": "#008AC3",
  }, 
  {"color": "#DC440E",
  },
  {"color": "#C9D6DB",
    "visible": false,
    "marker":{ "enabled": true, 
    "symbol": "circle", 
    }
  }, 
  {"color": "#E7CEE2",
    "visible": false,
    "marker":{ "enabled": true, 
    "symbol": "circle", 
    }
  }, 
  {"color": "#008AC3",
    "visible": false,
    "marker":{ "enabled": true, 
    "symbol": "circle", 
    }
  },
  {"color": "#DC440E",
    "visible": false,
    "marker":{ "enabled": true, 
    "symbol": "circle", 
    }
  },
  {"color": "#C9D6DB",
    "visible": false,
    "marker":{ "enabled": true, 
    "symbol": "square", 
    }
  }, 
  {"color": "#E7CEE2",
    "visible": false,
    "marker":{ "enabled": true, 
    "symbol": "square", 
    }
  },
  {"color": "#008AC3",
    "visible": false,
    "marker":{ "enabled": true, 
    "symbol": "square", 
    }
  }, 
  {"color": "#DC440E",
    "visible": false,
    "marker":{ "enabled": true, 
    "symbol": "square", 
    }
  }
  ],
  "legend": {
    "enabled": true,
    "x": 0,
    "y": 50,
    "itemWidth": 220,
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
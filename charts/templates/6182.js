(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels: {
      y: 12
    },
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>'
  },
  "series": [
    {"color": "#B00000",
    visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelrot */
    	{"color": "#007A2F",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgrün */
    	{"color": "#4f81bd",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelblau */
    	{"color": "#662673",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelviolett */
        {"color": "#7F5F1A",
        visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelbraun */
    	{"color": "#FABD24",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgelb */
    	{"color": "#3C3C3C",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, /* schwarz */
    {"color": "#B00000",
    visible:true,
    showInLegend: false,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelrot */
    	{"color": "#007A2F",
	visible:true,
	 showInLegend: false,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgrün */
    	{"color": "#4f81bd",
	visible:true,
	 showInLegend: false,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelblau */
    	{"color": "#662673",
	visible:true,
	 showInLegend: false,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelviolett */
        {"color": "#7F5F1A",
        visible:true,
         showInLegend: false,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelbraun */
    	{"color": "#FABD24",
	visible:true,
	 showInLegend: false,
      "marker": {
        "enabled": true
      }    
    }, /* dunkelgelb */
    	{"color": "#3C3C3C",
	visible:true,
	 showInLegend: false,
      "marker": {
        "enabled": true
      }    
    }, /* schwarz */
  ],
  "legend": {
    "enabled": true,
    "itemMarginBottom": 5,
		labelFormatter: function () {
                return this.name.slice(0, -7)
            },
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
}
}());
 
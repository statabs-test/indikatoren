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
    {color: "#B00000"}, /* dunkelrot */
  	{color: "#007A2F"}, /* dunkelgrün */
  	{color: "#4f81bd"}, /* dunkelblau */
  	{color: "#662673"}, /* dunkelviolett */
    {color: "#7F5F1A"}, /* dunkelbraun */
  	{color: "#FABD24"}, /* dunkelgelb */
  	{color: "#3C3C3C"}, /* schwarz */
    { color: "#B00000", /* dunkelrot */
      showInLegend: false,
        marker: {
          enabled: true,
        }    
    }, 
    { color: "#007A2F", /* dunkelgrün */
	    showInLegend: false,
      marker: {
        enabled: true,
      }    
    }, 
    { color: "#4f81bd", /* dunkelblau */
	    showInLegend: false,
        marker: {
        enabled: true,
      }    
    }, 
  	{ color: "#662673", /* dunkelviolett */
	    showInLegend: false,
      marker: {
        enabled: true,
      }    
    }, 
    { color: "#7F5F1A", /* dunkelbraun */
      showInLegend: false,
      marker: {
        enabled: true,
      }    
    }, 
  	{ color: "#FABD24", /* dunkelgelb */
	    showInLegend: false,
      marker: {
        enabled: true, 
      }    
    }, 
  	{ color: "#3C3C3C", /* schwarz */
	    showInLegend: false,
    }, 
  ],
  "legend": {
    "enabled": true,
    "itemMarginBottom": 5,
		labelFormatter: function () {
      return this.name.slice(0, -7);
    },
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
        radius: 2
      }
    }
  }
}
}());
 
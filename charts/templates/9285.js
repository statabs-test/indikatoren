(function(){
    return {
  "xAxis": {
    tickInterval: 1,
    labels:{
        step: 10,
     
    },

  },
  "yAxis": {
    "min": 0, 
    tickInterval: 300,
	  "labels": {
        "format": "{value:,.0f}"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [

    {
    	"color": "rgb(0,138,195)", /* blau */
    	"legendIndex": 0
    }, 
    {
    	"color": "rgb(250,189,36)", /* gelb */
 
        },
        {
          "color": "rgb(255,128,40)", /* orange */
 
            },
            {
              "color": "rgb(176,0,0)", /* rot */
          
                },
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
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
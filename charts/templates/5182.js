(function(){
    return {
 plotOptions: {
        scatter: {
    marker: {
        symbol: 'circle'
    }
 },
 },
 "yAxis": {
  	//"min": -1500,
  	//"tickInterval": 10000,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
   //"tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"width": 50,
  	"y": 50,
  	//"x": 40,
  	"itemMarginBottom": 5,
  	 itemWidth: 200,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  

  "series": [
     {
      "color": "#B00000", // dunkelrot 
    },
    {
      "color": "#007A2F", // dunkelgrün 
    },
    {
      "color": "#4f81bd", //dunkelblau 
    },
    {
    "color": "#2B0099", // dunkelviolett
    },
      {
      "color": "#E64900", // hellrot  
    },
    {
      "color": "#68AB2B", //hellgrün 
    },
    {
    "color": "#008AC3", //hellblau 
    },
    {
      "color": "#B375AB", //hellviolett
    },
  ],
  "chart": {
  	 type: 'scatter',
},
  	    
/*    
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
*/    
};
}());




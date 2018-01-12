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
      "format": "{value:,.0f}%",
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
      "color": "#B00000", legendIndex: 0, // dunkelrot 
    },
    {
      "color": "#E64900", legendIndex: 1, // hellrot 
    },
    {
      "color": "#2B0099", legendIndex: 2 //dunkelblau 
    },
    {
    "color": "#008AC3", legendIndex: 4// hellblau
    },
      {
      "color": "#007A2F", legendIndex: 4,"visible": false// dunkelgrün  
    },
    {
      "color": "#68AB2B",legendIndex: 5,"visible": false //hellgrün 
    },
    {
    "color": "#923F8D", legendIndex:6,"visible": false //dunkelviolett 
    },
    {
      "color": "#B375AB", legendIndex: 7,"visible": false//hellviolett
    },
         {
      "color": "#7F5F1A", legendIndex: 8, "visible": false// dunkelgelb 
    },
    {
      "color": "#FFDA80", legendIndex: 9, "visible": false// hellgelb 
    },
    {
      "color": "#999999", legendIndex: 10, "visible": false//schwarz 
    },
    {
    "color": "#3C3C3C", legendIndex: 11, "visible": false// grau
    },
  ],
  "chart": {
  	 type: 'scatter',
},
  tooltip: {
      headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
      pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>'    
    }  	    
/*    
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
*/    
};
}());




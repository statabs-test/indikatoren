(function(){
    return {
   "chart": {
    "type": "column",
   },
  plotOptions: {
    column: {
      "stacking": "normal",
        pointPadding: 0,
        groupPadding: 0.2,
        borderWidth: 0,
        pointWidth: 2, 

    }, 
    line: {
      tooltip:{shared: false}
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	tickInterval: 10,
  	"type": "linear",
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //itemWidth: 210,
    itemDistance: 0,
    //itemMarginBottom: 2,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {"color":"#73ba7c", "index": 3,legendIndex: 0,  "marker": {"enabled": false}, stacking: true}, //
    {"color":"#FABD24", "index": 2,legendIndex: 1,  "marker": {"enabled": false}, stacking: true}, //
    {"color":"#923F8D", "index": 1,legendIndex: 2, "marker": {"enabled": false}, stacking: true}, //
    {"color":"#999999", "index": 0,legendIndex: 3, "marker": {"enabled": false}, type: "line", stacking: false, tooltip:{shared: false}}, //
    
  ],  
  "tooltip": {
    "shared": true
  },

};
}());








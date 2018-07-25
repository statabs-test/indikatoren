(function(){
    return {
   "chart": {
    "type": "area",
   },
  plotOptions: {
        /*series: {
        	"stacking": "normal",
			pointPadding: 0,
            borderWidth: 0,
            pointWidth: 10, 

        }*/
         area: {
            stacking: 'normal',
            //lineColor: '#666666',
            lineWidth: 0,

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
    itemDistance: 0,
    itemMarginBottom: 2,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {"color":"#73ba7c", "index": 4,legendIndex: 7,  "marker": {"enabled": false}, stacking: false}, //
    {"color":"#FABD24", "index": 3,legendIndex: 8,  "marker": {"enabled": false}, }, //
    {"color":"#923F8D", "index": 2,legendIndex: 9,  "marker": {"enabled": false},}, //
    {"color":"#999999", "index": 1,legendIndex: 10, "marker": {"enabled": false}, stacking: false}, //
    
  ],  
  "tooltip": {
    //"shared": true
  },

};
}());








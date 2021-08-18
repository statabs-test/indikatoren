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
  	"type": "linear",
  	tickInterval: 1,
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
  {"color":"#b00000", "index": 4, "marker": {"enabled": false}}, //rot
  {"color":"#cd9c00", "index": 3, "marker": {"enabled": false}}, //orange
  {"color":"#2F656B", "index": 2, "marker": {"enabled": false}}, //orange
  {"color":"#FF8028", "index": 1, "marker": {"enabled": false}}, //orange
  {"color":"#923F8D", "index": 0, "marker": {"enabled": false}}, //orange
  
  ],  
  "tooltip": {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    footerFormat: '<span style="color: black">\u25CF</span> Total: <b>{point.total:,.0f}</b>'
    //"shared": true
  },
};
}());
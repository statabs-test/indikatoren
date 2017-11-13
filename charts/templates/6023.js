(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns,
            borderWidth: 0
        }
  },
  "yAxis": {
  	"min": -1500,
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
	"y": 40,
	//"x": 40,
	"itemMarginBottom": 5,
	 itemWidth: 110,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#71A3B5", // dunkelblau - Zuzug aus der Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      //legendIndex: 0
    "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },
    },
    {
      "color": "#73B97C", //dunkelgrün - Wegzug in die Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      //legendIndex: 1
    "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },
    },
    {
    "color": "#000000",
    "type": "scatter",
   "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },
    },
  ],
  "chart": {
/*    
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
*/    
  }
};
}());

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
	"x": 40,
	"itemMarginBottom": 5,
	 itemWidth: 110,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#246370", // dunkelblau - Zuzug aus der Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      //legendIndex: 0
    },
    {
      "color": "#007A2F", //dunkelgrün - Wegzug in die Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      //legendIndex: 1
    },
      {
      "color": "#007A2F", //dunkelgrün - Wegzug in die Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      //legendIndex: 1
    },
      {
      "color": "#007A2F", //dunkelgrün - Wegzug in die Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      //legendIndex: 1
    },
      {
      "color": "#007A2F", //dunkelgrün - Wegzug in die Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      //legendIndex: 1
    },
      {
      "color": "#007A2F", //dunkelgrün - Wegzug in die Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      //legendIndex: 1
    }
  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": true
  },
  "chart": {
/*    
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
*/    
  }
};
}());

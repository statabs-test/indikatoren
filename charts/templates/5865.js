(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns
        }
  },
  "yAxis": {
  	"min": -20000,
  	"tickInterval": 10000,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
   "tickInterval": 1
  },
  /*"legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "width": 50,
  	"x": 40,
	"y": 40,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },*/
  "legend": {
  	enabled:true,
  	"layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#8B2223",
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#b00000",
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#246370",
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
    {
      "color": "#71a3b5",
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 4
    },
    {
      "color": "#000000",
      //"index": 1,
      "type": "line",
	   "marker": {
    	"enabled": false
      }, 
      legendIndex: 4,
    },
  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": true
  },
  "chart": { 
  	"width":640,
  }
};
}());

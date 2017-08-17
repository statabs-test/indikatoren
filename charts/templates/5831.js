(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            //groupPadding: 0, // exaclty overlaps columns
            borderWidth: 0,
           

        }
  },
  "yAxis": {
  	//"min": -200,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	//startOnTick: true, 
   "tickInterval": 2
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemWidth": 500,
    y: 40,
	"x": 30,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#b475ab",
      "index": 0,
      "type": "column",
      "pointWidth": "10",
      legendIndex: 0,
    },
    {
      "color": "#a8c4cb",
      "index": 0,
      "type": "column",
      "pointWidth": "10",
      legendIndex: 1,
    },
    {
      "color": "#8AB77D",
      "index": 0,
      "type": "column",
      "pointWidth": "10",
      legendIndex: 1,
    },
	  {
      "color": "#000000",
      "index": 1,
      "type": "line",
      "marker": {
        "enabled": false
      }, 
      //remove series from tooltip
      //enableMouseTracking: false,
      tooltip: {
        pointFormat: ''
      },
      //"yAxis": 1,
      legendIndex: 3,
    },
  ],  
  "tooltip": {
  	"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
  	"footerFormat": 'Total: <b>{point.total:,.1f}</b>',
    "shared": true
  },
};
}());
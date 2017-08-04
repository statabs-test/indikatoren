(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns
            borderWidth: 0
        }
  },
  "yAxis": {
  	//"max": 60,
  	//tickInterval: 30,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
   "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"x": 30,
	itemWidth: 400, 
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#b475ab",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#a8c4cb",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
	{
      "color": "#000000",
      "index": 1,
      "type": "line",
      "marker": {
        "enabled": false
      }, 

      //"yAxis": 1,
      legendIndex: 3,
   //"dataLabels": {
     //   style: {"fontSize": "12px", "fontWeight": "normal", "fontFamily": "Arial", color: 'black',}, 
       // "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
         // formatter: function() {
           // var first  = this.series.data[this.series.data.length - 1];
           // if (this.point.x === first.x) {
            //  return /*this.point.x + ":<br/>" + */ Highcharts.numberFormat(this.point.y, 0, ",", " ") + "";
           // }
           // return "";
         // }
     // }
      },
  ],  
  "tooltip": {
  	"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
  	"footerFormat": 'Total: <b>{point.total:,.0f}</b>',
    "shared": true
  },
  "chart": {   
  	"width":665,
    "type": "column",
    "inverted": false
  }
};
}());
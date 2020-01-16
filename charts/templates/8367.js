(function(){
    return {
"plotOptions": {
    "series": {
     // pointPadding: 100,
     // "pointWidth": 15,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
    tickInterval: 40000,
    tickAmount: 6,
    "labels": {
      "format": "{value:,.0f}",
    },
   /*plotLines: [{
                    value: 0,
                    color: 'white',
                    width: 2,
                    zIndex: 4
                }]*/
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "tooltip": {
    "pointFormatter": function(){
      var s ='<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(Math.abs(this.y,0),0) + '</b><br/><b>'
      var sum = 0;
                $.each(this.points, function(i, point) {
                    var v =this.y; //make - to + again
                    //s += '<span style="color:'+point.series.color+'">\u25CF</span> '+point.series.name+': <b>'+v+'</b><br/>';
                    sum += v;
                });
                s += 'Pendlersaldo: <b>'+ sum + '</b>';
      if (this.series.name == "Pendlersaldo") {
      return "" 
    }
      else return s 
  },
  /*"tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{Math.abs(point.y)}</b><br/>',
  //"footerFormat": 'Total: <b>{point.total:,.0f}</b>',*/
   "shared": true,
  },
  "series": [
  {"color": "#246370", "index": 1, legendIndex: 1}, /*rot */
  {"color": "#A8C3CA", "index": 2, legendIndex: 3}, /*blau */
  {"color": "#007A2F", "index": 3, legendIndex: 2}, /*hellrot */
  {"color": "#8AB77D", "index": 4, legendIndex: 4}, /*hellblau */
      {
      "color": "#000000",
      //"index": 1,
      "type": "scatter",
	   "marker": {
      "enabled": true,
      symbol:"diamond",
      radius: 6,
      }, 
      legendIndex: 4,
    },
  ],
  "chart": {
    //"renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
  },
  "data":{
    "switchRowsAndColumns": true
  },
};
}());

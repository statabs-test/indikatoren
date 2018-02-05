(function(){
    return {
  //seriesMapping necessary for charts with error bars. 
  "data": {
    "seriesMapping": [
      {
        "x": 0
      },
      {
        "x": 0
      },
      {
        "x": 0
      }
    ]  
  },
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    "column": {
        "colorByPoint": true
    },
  "series": [
    {
      "index": 0,
      "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b><br/>';
        }
      }      
    },
    {
      "index": 1,
      "type": "errorbar",
    },
        {
      "index": 2,
      "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b><br/>';
        }
      }      
    },
   {
      "index": 3,
      "type": "errorbar",
    },
         /*   {
      "index": 4,
      "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b><br/>';
        }
      }      
    },*/
    
  ],  
  "colors": [
    "#661200",
    "#dc440e",
    "#7f5f1a",
    "#ffda80"
  ],  
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
        "formatter": function(){
            return Highcharts.numberFormat((this.value),0)+'%';                
        },
    } 
  },    
  "legend": {
    "enabled": false
  },
  "chart": {    
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column",
    "inverted": false
  }
	}
}());

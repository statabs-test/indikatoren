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
      },
      {
        "x": 0
      },
      {
        "x": 0
      },
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
      color: "#661200"
    },
    {
      "index": 1,
      "type": "errorbar",
    },
        {
      "index": 2,
      color: "#dc440e"
      
    },
   {
      "index": 3,
      "type": "errorbar",
    },
         {
      "index": 4,
      color: "#7f5f1a"
    },
    {
      "index": 5,
      "type": "errorbar",
    },
         {
      "index": 6,
      color: "#ffda80"
    },
        {
      "index": 7,
      "type": "errorbar",
    },
    
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

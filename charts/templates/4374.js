(function(){
    return {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
       
            }
           
         
      
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {
    "color": "#ff8028"
    }
  ],
  "tooltip": {
    "shared": false
  },
  "chart": {
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column"
  }
	}
}());
(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 10,
      /*"dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },*/
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
	"tickInterval": 2	
  },  
  "yAxis": {
  	max: 200000,
    "labels": {
      "format": "{value:,.0f}"
    }
	  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
     "footerFormat": 'Total:: <b>{point.total:,.0f}</b>',
    "shared": true
  },  
  "series": [
        {
      "index": 1,
	  "color": "#990300",
      "legendIndex": 1  
    },
    {
      "index": 0,
	  "color": "#71A3B5",
      "legendIndex": 0  
    }        
  ],
  "legend": {
    "enabled": true,
    "x": 55,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
     "fontWeight": "normal"
    }
  },
  "chart": {    
    "type": "column",
    	"width":665,
  }
}
}());

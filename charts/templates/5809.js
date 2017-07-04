(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 10,
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
	"tickInterval": 5	
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }
	  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
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
    "y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
     "fontWeight": "normal"
    }
  },
  "chart": {    
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
}
}());

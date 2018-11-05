(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 25,
      "dataLabels": {
        "style": {
          "fontSize": 10
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
    tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    enabled: true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
   
    {
      "color": "#2E1435",
      "legendIndex": 1  
    },
    {
      "color": "#662673",
      "legendIndex": 2  
    },
    {
      "color": "#923F8D",
      "legendIndex": 3  
    },
     {
      "color": "#B375AB",
      "legendIndex": 4  
    },
     {
      "color": "#E7CEE2",
      "legendIndex": 5  
    },
     {
      "color": "#689199",
      "legendIndex": 6  
    },
     {
      "color": "#246370",
      "legendIndex": 7  
    },
     {
      "color": "#083038",
      "legendIndex": 8  
    },
  ],
  "chart": {    
   // "marginBottom": 85,
    //"marginTop": 75,
    "type": "column"
  }
	};
}());

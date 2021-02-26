(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 25,
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
    "labels": {
      rotation: 0
    }
  },  
  "yAxis": {
    tickAmount: 10,
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    footerFormat: 'Total: <b>{point.total:,.0f}</b>',
    "shared": true,
    valueDecimals: 0
  }, 
  "legend": {
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
      "color": "#661200",
      "legendIndex": 9     
    },
    {
      "color": "#B00000",
      "legendIndex": 8     
    },
    {
      "color": "#FF8028",
      "legendIndex": 7     
    },
    {
      "color": "#FFBB58",
      "legendIndex": 6     
    },
    {
      "color": "#662673",
      "legendIndex": 5     
    },
    {
      "color": "#B375AB",
      "legendIndex": 4
    },
    {
      "color": "#E7CEE2",
      "legendIndex": 3  
    },
    {
      "color": "#246370",
      "legendIndex": 2  
    },
    {
      "color": "#A8C3CA",
      "legendIndex": 1  
    },
    {
      "color": "#D3E2E4",
      "legendIndex": 0  
    }        
  ],
  "chart": {    
    "type": "column"
  }
	}
}());

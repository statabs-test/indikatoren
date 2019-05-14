(function(){
    return {
  "plotOptions": {
    "series": {
      //"pointWidth": 50,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
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
    "layout": "horizontal",
    "verticalAlign": "top",
    //"y": 45, 
    padding: 0,
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#933F8D",
      "legendIndex": 1
    },
    {
      "color": "#B475AB",
      "legendIndex": 2
    },
    {
      "color": "#FABD24",
      "legendIndex": 3
    },
    {
      "color": "#FFDA80",
      "legendIndex": 4
    },
    {
      "color": "#4BACC6",
      "legendIndex": 5
    },
    {
      "color": "#933F8D",
      "legendIndex": 6
    },
    {
      "color": "#B475AB",
      "legendIndex": 7
    },
    {
      "color": "#FABD24",
      "legendIndex": 8
    },
    {
      "color": "#FFDA80",
      "legendIndex": 9
    },
    {
      "color": "#4BACC6",
      "legendIndex": 10
    }  ,
        {
      "color": "#FABD24",
      "legendIndex": 11
    },
    {
      "color": "#FFDA80",
      "legendIndex": 12
    },
    {
      "color": "#4BACC6",
      "legendIndex": 13
    }  
  ],
  "chart": {    
    "marginBottom": 60,
    "marginTop": 160,
    "type": "column"
  }
	}
}());

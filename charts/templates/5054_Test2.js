(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 20,
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
    "labels": {
      "format": "{value:,.0f}"
    },
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
    "shared": false
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
  {"color": "#9a86a6", "index": 6, "legendIndex": 6}, 
  {"color": "#baa85a", "index": 5, "legendIndex": 5},
  {"color": "#71a3b5", "index": 4, "legendIndex": 4},
  {"color": "#85b77d", "index": 3, "legendIndex": 3},
  {"color": "#474747", "index": 2, "legendIndex": 2}, 
  {"color": "#83522e", "index": 1, "legendIndex": 1}, 
  {"color": "#2f656b", "index": 0, "legendIndex": 0} 
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": false
  }
}
}());

(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      "pointWidth": 15,
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
    "tickInterval": 2
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    },
	"max": undefined
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
  	"enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "itemWidth": 120,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#b00000", "index": 5}, /*rot */
  {"color": "#2f656b", "index": 4}, /*dunkelblau */
  {"color": "#ff8028", "index": 3}, /*orange */
  {"color": "#933f8d", "index": 2}, /*violett */
  {"color": "#baa85a", "index": 1},  /*braun */
  {"color": "#71a3b5", "index": 0}  /*hellblau */
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


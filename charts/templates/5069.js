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
	"max": undefined
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 73,
	"y": 55,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#007a2f", "index": 4, 	"legendIndex": 0}, /*dunkelgrün */
  {"color": "#44ab2b", "index": 3, 	"legendIndex": 1}, /*hellgrün */
  {"color": "#dc440e", "index": 2, 	"legendIndex": 2}, /*hellrot */
  {"color": "#b00000", "index": 1, 	"legendIndex": 3}  /*dunkelrot */
  ],
  "chart": {
    "type": "column",
    "inverted": true
  }
}
}());


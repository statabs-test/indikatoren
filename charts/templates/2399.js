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
      "format": "{value:,.0f}%"
    },
	"max": 100
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    "shared": false
  },  
  "legend": {
  	"enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "itemWidth": 100,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#007a2f", "index": 5}, /*dunkelgrün */
  {"color": "#73ba7c", "index": 4}, /*hellgrün */
  {"color": "#ff8028", "index": 3}, /*orange */
  {"color": "#b00000", "index": 2}, /*dunkelrot */
  {"color": "#c8c8c8", "index": 1}  /*grau */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": true
  }
}
}());


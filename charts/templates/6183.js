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
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#d7e9d2", "index": 0, "legendIndex":0}, /*grün dunkel2*/
  {"color": "#73ba7c", "index": 1, "legendIndex":1}, /*grün mittel*/
  {"color": "#44ab2b", "index": 2, "legendIndex":2}, /*grün dunkel1*/
  {"color": "#007a2f", "index": 3, "legendIndex":3}, /*grün hell*/
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

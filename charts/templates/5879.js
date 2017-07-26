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
    "shared": true
  },  
    "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "width": 10,
  	"x": 75,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#C8C8C8"}, /*grau*/
  {"color": "#CD9C00"}, /*dunkelrot*/
  {"color": "#FABD24"}, /*hellrot*/
  {"color": "#73B97C"}, /*hellgrün*/
  {"color": "#007A2F"} /*dunkelgrün*/

  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "type": "column",
    "inverted": true
  }
}
}());
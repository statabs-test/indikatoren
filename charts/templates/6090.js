(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
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
  	max: 100,
  	tickInterval: 20,
    "labels": {
      "format": "{value:,.0f}%",
    },  
  	},
  "legend": {
  	"itemWidth": 115,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 60,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#672773", index: 2, legendIndex: 0}, /*Sek1*/
  {"color": "#b475ab", index: 1, legendIndex: 1}, /*Sek2*/
  {"color": "#fabd24", index: 0, legendIndex:2}, /*Tert.*/
],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": true
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
   "shared": false
  },
}
}());

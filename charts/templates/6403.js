(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 30,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
  	min: 0,
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
  	 max: 100,
     //tickInterval: 60000,
    "labels": {
      "format": "{value:,.0f}%",
    },
  },
  "legend": {
  	"itemWidth": 200,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#923F8D", index: 1, legendIndex: 0}, /*Deutschland*/
  {"color": "#E7CEE2", index: 0, legendIndex: 1}, /*Italien*/
],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": true
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
   "shared": false
  },
}
}());

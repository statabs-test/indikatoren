(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
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
  	min: 11,
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
    tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}",
      style: {
        color: "black"
      },
      x: -5
    },
    title: {
      text: null
    }
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 30,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#246370", index: 9, legendIndex: 0}, /**/
  {"color": "#923F8D", index: 8, legendIndex: 1}, /**/
  {"color": "#7F5F1A", index: 7, legendIndex: 2}, /**/
  {"color": "#CD9C00", index: 6, legendIndex: 3}, /**/
  {"color": "#007A2F", index: 5, legendIndex: 4}, /* */
  {"color": "#DC440E", index: 4, legendIndex: 5}, /**/
],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
  //  "marginBottom": 75,
    "marginTop": 35,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
   "shared": false
  },
}
}());

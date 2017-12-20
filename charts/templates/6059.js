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
  	 //max: 120000,
     //tickInterval: 60000,
    "labels": {
      "format": "{value:,.0f}",
    },
	"max": undefined
  },
  "legend": {
  	"itemWidth": 150,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 20,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#d7e9d2"}, /*grün dunkel2*/
  {"color": "#73ba7c"}, /*grün mittel*/
  {"color": "#44ab2b"}, /*grün dunkel1*/
  {"color": "#007a2f"}, /*grün hell*/
  {"color": "#d7e9d2"}, /*grün dunkel2*/
  {"color": "#73ba7c"}, /*grün mittel*/
  {"color": "#44ab2b"}, /*grün dunkel1*/
  {"color": "#007a2f"}, /*grün hell*/
  {"color": "#d7e9d2"}, /*grün dunkel2*/
  {"color": "#73ba7c"}, /*grün mittel*/
],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
}
}());

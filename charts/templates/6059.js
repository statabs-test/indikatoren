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
<<<<<<< HEAD
=======
  	min: 0,
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
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
<<<<<<< HEAD
  	"itemWidth": 150,
=======
  	"itemWidth": 140,
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
<<<<<<< HEAD
	"y": 20,
=======
	"y": 30,
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
<<<<<<< HEAD
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
=======
  {"color": "#672773", index: 9, legendIndex: 0}, /*Deutschland*/
  {"color": "#007a2f", index: 8, legendIndex: 1}, /*Italien*/
  {"color": "#fabd24", index: 7, legendIndex: 2}, /*Türkei*/
  {"color": "#b475ab", index: 6, legendIndex: 3}, /*EU-17 & EFTA*/
  {"color": "#71a3b5", index: 5, legendIndex: 4}, /*EU-Ost */
  {"color": "#b9cfd7", index: 4, legendIndex: 5}, /*Balkan*/
  {"color": "#ff8028", index: 3, legendIndex: 6}, /*Mittel- & Südamerika */
  {"color": "#73ba7c", index: 2, legendIndex: 7}, /*Arabische Länder */
  {"color": "#9f7c5a", index: 1, legendIndex: 8}, /*Afrikanische Länder*/
  {"color": "#999999", index: 0, legendIndex: 9}, /*Übrige Länder*/
>>>>>>> 366b19e459a40712a886648c90553dc06bc90f9d
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

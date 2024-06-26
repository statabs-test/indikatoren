(function(){
    return {
"plotOptions": {
    "series": {
      //pointPadding: 100,
      borderWidth: 0,
      //"pointWidth": 10,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  xAxis: {
    type: "category", /* muss "category" sein, sonst funktioniert es nicht richtig */
    tickPositioner: function () {
      var maxlabels = 10,
        ext = this.getExtremes(),
        i = Math.round(ext.max),
        interval = Math.round((i - ext.min)/maxlabels),
        pos = [i];
      while (i >= ext.min) pos.unshift(i = i - interval);
      return pos;
    }
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
    "enabled": true,
    itemDistance: 3, 
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#B00000", index: 10, legendIndex: 0}, /*Deutschland*/
  {"color": "#672773", index: 9, legendIndex: 1}, /*Deutschland*/
  {"color": "#007a2f", index: 8, legendIndex: 2}, /*Italien*/
  {"color": "#fabd24", index: 7, legendIndex: 3}, /*Türkei*/
  {"color": "#b475ab", index: 6, legendIndex: 4}, /*EU-17 & EFTA*/
  {"color": "#71a3b5", index: 5, legendIndex: 5}, /*EU-Ost */
  {"color": "#b9cfd7", index: 4, legendIndex: 6}, /*Balkan*/
  {"color": "#ff8028", index: 3, legendIndex: 7}, /*Mittel- & Südamerika */
  {"color": "#73ba7c", index: 2, legendIndex: 8}, /*Arabische Länder */
  {"color": "#9f7c5a", index: 1, legendIndex: 9}, /*Afrikanische Länder*/
  {"color": "#999999", index: 0, legendIndex: 10}, /*Übrige Länder*/
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
  //"footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   //"shared": true
  },
}
}());

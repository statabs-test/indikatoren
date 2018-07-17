(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    //tickInterval: 10,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },
 "series": [
  {"color": "#b00000"}, /*Schweiz*/
  {"color": "#672773"}, /*Deutschland*/
  {"color": "#007a2f"}, /*Italien*/
  {"color": "#fabd24"}, /*Türkei*/
  {"color": "#b475ab"}, /*EU-17 & EFTA*/
  {"color": "#71a3b5"}, /*EU-Ost */
  {"color": "#b9cfd7"}, /*Balkan*/
  {"color": "#ff8028"}, /*Mittel- & Südamerika */
  {"color": "#73ba7c"}, /*Arabische Länder */
  {"color": "#9f7c5a"}, /*Afrikanische Länder*/
  {"color": "#999999"}, /*Übrige Länder*/
  {"color": "#b00000",showInLegend: false}, /*Schweiz*/
  {"color": "#672773",showInLegend: false}, /*Deutschland*/
  {"color": "#007a2f",showInLegend: false}, /*Italien*/
  {"color": "#fabd24",showInLegend: false}, /*Türkei*/
  {"color": "#b475ab",showInLegend: false}, /*EU-17 & EFTA*/
  {"color": "#71a3b5",showInLegend: false}, /*EU-Ost */
  {"color": "#b9cfd7",showInLegend: false}, /*Balkan*/
  {"color": "#ff8028",showInLegend: false}, /*Mittel- & Südamerika */
  {"color": "#73ba7c",showInLegend: false}, /*Arabische Länder */
  {"color": "#9f7c5a",showInLegend: false}, /*Afrikanische Länder*/
  {"color": "#999999",showInLegend: false}, /*Übrige Länder*/
  ],
   "legend": {
   		labelFormatter: function () {
                return this.name.slice(0, -7)
            },
    "enabled": true,
    itemDistance: 5, 
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());
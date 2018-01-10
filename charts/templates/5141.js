(function(){
    return {
   "chart": {
    "type": "area",
   },
  plotOptions: {
        /*series: {
        	"stacking": "normal",
			pointPadding: 0,
            borderWidth: 0,
            pointWidth: 10, 

        }*/
         area: {
            stacking: 'normal',
            //lineColor: '#666666',
            lineWidth: 0,

        }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	"type": "category",
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 45,
 	itemWidth: 130,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#007a2f", "index": 8, "legendIndex":8, "marker": {"enabled": false}}, /*grün dunkel2*/
  {"color": "#44ab2b", "index": 7, "legendIndex":7, "marker": {"enabled": false}}, /*grün mittel*/
  {"color": "#73ba7c", "index": 6, "legendIndex":6, "marker": {"enabled": false}}, /*grün dunkel1*/
  {"color": "#d7e9d2", "index": 5, "legendIndex":5, "marker": {"enabled": false}}, /*grün hell*/
  {"color": "#b9cfd7", "index": 4, "legendIndex":4, "marker": {"enabled": false}}, /*blau hell */
  {"color": "#71a3b5", "index": 3, "legendIndex":3, "marker": {"enabled": false}}, /*blau dunkel */
  {"color": "#ffbb58", "index": 2, "legendIndex":2, "marker": {"enabled": false}}, /*orange hell */
  {"color": "#ff8028", "index": 1, "legendIndex":1, "marker": {"enabled": false}}, /*orange dunkel */
  {"color": "#b00000", "index": 0, "legendIndex":0, "marker": {"enabled": false}} /*rot dunkel */
  ],  
  "tooltip": {
    //"shared": true
  },
};
}());
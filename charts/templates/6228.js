(function(){
    return {
    "yAxis":{
    tickInterval:25,
    },
 	"xAxis": {
        "type": "category",
        "labels": {
            "formatter": function() {
            	return this.value;
            }
        } 
  },  
  "series": [
  {"color": "#007a2f", "index": 9, "legendIndex":9}, /*grün dunkel2*/
  {"color": "#44ab2b", "index": 8, "legendIndex":8}, /*grün mittel*/
  {"color": "#73ba7c", "index": 7, "legendIndex":7}, /*grün dunkel1*/
  {"color": "#d7e9d2", "index": 6, "legendIndex":6}, /*grün hell*/
  {"color": "#b9cfd7", "index": 5, "legendIndex":5}, /*blau hell */
  {"color": "#71a3b5", "index": 4, "legendIndex":4}, /*blau dunkel */
  {"color": "#ffbb58", "index": 3, "legendIndex":3}, /*orange hell */
  {"color": "#ff8028", "index": 2, "legendIndex":2}, /*orange dunkel */
  {"color": "#dc440e", "index": 1, "legendIndex":1}, /*rot hell */
  {"color": "#b00000", "index": 0, "legendIndex":0} /*rot dunkel */
  ],
"chart": {      
     "inverted": true,
  },
}
}());

(function(){
    return {
    "yAxis":{
        tickInterval:25,
    },
 	"xAxis": {
        "type": "category",
        "labels": {
		  align: "left",
          x: -185,
            "formatter": undefined
        } 
      },  
      plotOptions: {
      	//column: {
      	//	groupPadding: 0,
    
      	//}
      },
      "series": [
        {"color": "#246370", "index": 6, "legendIndex": 0}, /*blau dunkel*/
        {"color": "#A8C3CA", "index": 5, "legendIndex": 1}, /*blau mittel*/
        {"color": "#FFBB58", "index": 4, "legendIndex": 2}, /*gelb*/
        {"color": "#DC440E", "index": 3, "legendIndex": 3}, /*orange*/
        {"color": "#D3E2E4", "index": 2, "legendIndex": 4}, /*rot*/
        {"color": "#C8C8C8", "index": 1, "legendIndex": 5}, /*grau hell*/
        {"color": "#6F6F6F", "index": 0, "legendIndex": 6}, /*grau*/
        ],

    "chart": {      
    	 marginLeft: 185,
         "inverted": true,
        "height": 550,       

      },
    "legend": {
        "layout": "horizontal",
        "verticalAlign": "top",
        width: 320,
        itemWidth: 160,
        "itemMarginBottom": 5,     
        "align": "left",
        "useHTML": false,
        "itemStyle": {
            "fontWeight": "normal"
        },
        "symbolRadius": 0,
        "labelFormatter": function () {
            return this.name.replace('/', '/<br/>');
        }
    }
    };
}());

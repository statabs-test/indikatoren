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
  plotOptions: {
  	column: {
  		pointWidth: 50,
  		groupPadding: 0,
  	}
  },
 "series": [
  {"color": "#2B0099", legendIndex: 6, index: 6},
  {"color": "#008AC3", legendIndex: 5, index: 5},
  {"color": "#A0BEC8", legendIndex: 4, index: 4},
  {"color": "#007A2F", legendIndex: 3, index: 3},
  {"color": "#68AB2B", legendIndex: 2, index: 2},
  {"color": "#73B97C", legendIndex: 1, index: 1},
  {"color": "#D7E8D2", legendIndex: 0, index: 0}
     ],
  "legend": { 
    "enabled": true,
    "layout": "horizontal",
    itemDistance: 5, 
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
 "data":{
  	"switchRowsAndColumns": true
  },
"chart": {  
     "inverted": false,
  },
"tooltip": {
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
    },
}
}());


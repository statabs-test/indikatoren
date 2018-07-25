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
  {"color": "#662673", legendIndex: 6, index: 6},
  {"color": "#923F8D", legendIndex: 5, index: 5},
  {"color": "#B375AB", legendIndex: 4, index: 4},
  {"color": "#E7CEE2", legendIndex: 3, index: 3},
  {"color": "#DC440E", legendIndex: 2, index: 2},
  {"color": "#FABD24", legendIndex: 1, index: 1},
  //{"color": "#D7E8D2", legendIndex: 0, index: 0}
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


(function(){
    return {
      data: {
        parsed: function(columns){
          var pointsToKeep=10;
          //keep only the last n elements in the arrays but keep the column title
          columns.forEach(function(v, i, a){
            v.splice(1, v.length-pointsToKeep-1);
          });
        }
      },    
 "xAxis": {
    "type": "category",
    "labels": {
     rotation: 0
    }
  },
  "yAxis": {
    max: 25000,
    tickInterval: 5000,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color": "#C8C8C8"},
  {"color": "#008AC3"}, 
  {"color": "#6F6F6F"}, 
  {"color": "#2B0099"}, 
	  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "plotOptions": {
            "series": {
                "stacking": null,
				pointPadding: 0, 
				groupPadding: 0.1, 
				borderWidth: 0

            }
        },
        "chart": {      
            "type": "column"
        },
    }
}());
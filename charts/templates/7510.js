
/*global Highcharts*/
(function(){
    return {
        "plotOptions": {
            "series": {
                "stacking": null,
				pointPadding: 0, 
				groupPadding: 0.1, 
				borderWidth: 0

            }
        },
        "chart": {      
            "type": "column",

            
        },
        "series": [
            {"color": "#083038"},
            {"color": "#008AC3"},
            {"color": "#71A3B5"}
        ],
        "xAxis": {
          type: 'datetime',
          tickInterval: 1000 * 60 * 60 * 24 * 30,
          labels: { 
            formatter: function() {
              if (this.isFirst || this.isLast) {
                return Highcharts.dateFormat('%b %y', this.value);
              } else {
                return Highcharts.dateFormat('%b', this.value);
              }
            },
          },
        },
        "yAxis": {
        	"labels": {
        		"format": "{value:,.0f}",
        		"formatter": function(){
                return Highcharts.numberFormat((this.value*100),0)+'%'; 
              },
      	  }
        },	
        "legend": {
          "enabled": true,
          "layout": "horizontal",
          "verticalAlign": "top",
          "align": "left",
          "itemStyle": {
            "fontWeight": "normal"
          }
        },
        tooltip: {
          "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
        }
	  };
}());

 

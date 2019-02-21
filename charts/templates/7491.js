(function(){
    return {
    "yAxis": [{
    "labels": {
      "format": "{value:,.0f}",
      "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      },
      "style": {
        "color": "#000000",
        fontSize: "10px"
      }
    },
    "min": 0,
    "max": undefined,
    tickAmount: 4,
    tickInterval: 0.01,
    "title": "", 
  },
  {
    "title": {
      "style": {
        "color": "#000000",
        fontSize: "10px",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000",
        fontSize: "10px"
      }
    },
    "min": 0,
    "max": undefined,
    tickAmount: 4,
    tickInterval: 50,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 12,
     "type": "category",
     labels:{
       rotation: 0,
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
  },
  "series": [
    {"color": "#B00000", "index": 0, //"yAxis": 0,
        "tooltip": {
				"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
		},
    },
        {"color": "#FF8028", "index": 1, "yAxis": 1,
        "tooltip": {
				"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
		},
    }
  ],

  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
}
}());

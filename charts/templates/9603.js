(function() {this.series[0].points[3].update({
    isSum: true
})}),
(function(){
    return {
  "xAxis": { 
      tickInterval: 1,
      type: "category"
  },
  "yAxis": {
  "labels": {
    "format": "{value:,.0f}"
  }
  },	
  "tooltip": {
    "shared": false, 
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    {
        upColor: "#68AB2B",
        color: "#B00000",

    },
 
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
  },
  chart: {
    type: 'waterfall'
},
  }
  }());
  
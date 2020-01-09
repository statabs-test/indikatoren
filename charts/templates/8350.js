/*
global Highcharts
*/

(function(){
    return {
   "yAxis": {
      "labels": {
      "format": "{value:,.f}",
    }
  },
  "xAxis": {
    tickInterval: 1
  },
  "legend": {
    "enabled": true,
    //"y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
     "fontWeight": "normal"
    }
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": false
      },     
      "color": "#008AC3"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f} m²</b><br/>',
    "shared": false
  },
  "chart": {
   //"marginBottom": 75,
    "marginTop": 60,
    "type": "column"
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false,
        "allowOverlap": true,
          y: 30,
      }
    }
  }
}
}());

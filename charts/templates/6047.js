(function(){
  return {
    "data":{
    	"switchRowsAndColumns": true
    },
    "plotOptions": {
      "series": {
        pointPadding: 0,
        borderWidth: 1,
        groupPadding: 0.15
      }
    },
    "chart":{
      "type": "column",
      "inverted": true, /* false */
      "marginLeft": 210,
      "marginBottom": 55,
      "marginRight": 15
    },
    "xAxis": {
      "type": "category"
    },
    "yAxis": {
      min: null,
      "labels": {
        "format": "{value}%"
      }    
    },
    "series": [
      {"color": "#ffbb58"},
      {"color": "#ff8028"},
      {"color": "#dc440e"},
      {"color": "#b00000"} 
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"x": 155,
      "y": 30,   
      "itemWidth": 60,
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
      shared: false
    }
  }
}());


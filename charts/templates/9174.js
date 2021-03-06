(function(){
  return {
    "data":{
    	"switchRowsAndColumns": true
    },
    "plotOptions": {
      "series": {
        pointPadding: 0, 
        groupPadding: 0.1,
        borderWidth: 0
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
      max: 100,
      "labels": {
        "format": "{value}%"
      }    
    },
    "series": [
      {"color": "#3C3C3C", "visible": true}, //2000
      {"color": "#b00000", "visible": true}, //2010
      {"color": "#A0BEC8", "visible": true}, //2000
      {"color": "#008AC3", "visible": true}, //2017
     ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"x": 155,
      //"y": 30,   
      //"itemWidth": 60,
      itemDistance: 5,
      symbolPadding: 1,
      padding: 0,
      "itemStyle": {
        "fontWeight": "normal",
        textOverflow: null,
        whitspace: 'nowrap'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
      shared: false
    }
  }
}());


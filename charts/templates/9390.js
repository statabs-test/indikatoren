(function(){
    return {
  "xAxis": { 

  },
  "yAxis": {
    tickAmount: 4,
  "labels": {
    "format": "{value:,.0f}"
  }
  },	
  "tooltip": {
    "shared": false, 
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>'
  },
  "series": [
    {"color": "#73B97C"}, 
    {"color": "#68AB2B"}, 
    {"color": "#007A2F"}, 
    {"color": "#0A3B19"}, 
    {"color": "#FFDA80"}, 
    {"color": "#FABD24"}
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 3,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
    "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  },
  chart: {
      marginRight: 20
  }
  }
  }());
  
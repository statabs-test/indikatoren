(function(){
  return {
"xAxis": {
  //"tickInterval": 1,
  "type": "category"
},
"yAxis": {
  //tickAmount: 5,
  tickInterval: 10,
  min: 0, 
  max: 40,
  labels: {
    format: "{value:,.0f}%",
  }
},	
tooltip: {
  shared: false, 
  headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
  pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>'
},
series: 
[
  {
    type: "scatter",
    marker: 
      {
        symbol: "circle",
        radius: 3,
        "enabled": true
      },
      "color": "#246370"
  },
  {
    type: "scatter",
    "marker": 
      {
        "symbol": "triangle-down",
        radius: 3,
        "enabled": true
      },
      "color": "#246370"
  },
  {
    type: "scatter",
    "marker": 
      {
        "symbol": "triangle",
        "enabled": false,
        radius: 3,
        "enabled": true
      },
      "color": "#246370"
  },



  {
    type: "scatter",
    "marker": 
      {
        "symbol": "circle",
        "enabled": false,
        radius: 3,
        "enabled": true
      },
      "color": "#990300"
  },
  {
    type: "scatter",
    "marker": 
      {
        "symbol": "triangle-down",
        "enabled": false,
        radius: 3,
        "enabled": true
      },
      "color": "#990300"
  },
  {
    type: "scatter",
    "marker": 
      {
        "symbol": "triangle",
        "enabled": false,
        radius: 3,
        "enabled": true
      },
      "color": "#990300"
  }

],
"legend": {
  "enabled": true,
  //"x": 30,
  //"y": 35,
  //"itemWidth": 150,
  "layout": "horizontal",
  "verticalAlign": "top",
  "itemMarginBottom": 5,
  "align": "left",
  "itemStyle": {
    "fontWeight": "normal"
  }
},
chart: {
  inverted: true
}
};
}());

(function(){
  return {
"xAxis": {
  "tickInterval": 1,
},
"yAxis": {
  min: 40,
  tickInterval: 20,
"labels": {
  "format": "{value:,.0f}"
}
},	
"tooltip": {
  "shared": false, 
"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
},
colors:[
      '#2B0099',
      '#661200',
      '#73BA7C',
      '#D7E8D2',
      '#007A2F',
      '#FFDA80',
      '#FF8028',
      '#B9CFD7',
      '#672773',
      '#FFBB58',
      '#008AC3',
      '#E7CEE2',
      '#8B2223',
      '#DC440E',
],
"legend": {
  reversed: true,
  "enabled": true,
  "layout": "vertical",
  "verticalAlign": "middle",
  "align": "right",
  "itemMarginBottom": 5,
  "itemStyle": {
    "fontWeight": "normal"
  }
},
"chart": {
 // height: 500,
},
"plotOptions": {
  "line": {
    "marker":{
      "enabled": false,
      "symbol": "circle",
    } 
  }
}
}
}());
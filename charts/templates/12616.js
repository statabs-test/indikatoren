(function(){
  return {
"xAxis": { tickInterval: 2
},
"yAxis": {
"labels": {
  "format": "{value:,.0f}%"
}
},	
"tooltip": {
  "shared": false, 
"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>'
},
"series": [
  { 
    "color": "#FABD24" /* "#b375ab" Friedmatt*/
  },
  {
    "color": "#FF8028" /* "#689199" Kannenfeld*/
  },
  {
    "color": "#923F8D" /* "#662673" Landskron*/
  },
  {
    "color": "#689199" /* "#999" Lysbüchel*/
  },
  {
    "color": "#9E7C59" /*"#cd9c00" Pestalozzi*/ ,
    visible:true,
  }, 
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
"plotOptions": {
  "line": {
  "connectNulls": true,
    "marker":{
      "enabled": false,
      "symbol": "circle",
    }
  }
}
}
}());

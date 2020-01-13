(function(){
  return {
"plotOptions": {
  "series": {    
    pointPadding: 0, 
  //groupPadding: 0.1, 
  borderWidth: 0,
    "dataLabels": {
      "style": {
        "fontSize": "10px"
      }
    }
  },
  "column": {
      "colorByPoint": true
  }
},
"xAxis": {
"type": "category" ,
labels: {
rotation: 0,
}   
},
"yAxis": [{
  "labels": {
    "format": "{value:,.f}",
    "style": {
      "color": "#000000"
    }
  },
  "min": 0,
  "max": undefined,
  "title": "", 
},
{
  "title": {
    "style": {
      "color": "#000000",
      "fontSize": null
    },
    "text": null
  },
  "labels": {
    "format": "{value:,.f}",
    "style": {
      "color": "#000000"
    }
  },
  "min": 0,
  "max": undefined,
  "gridLineWidth": 0,
  "opposite": true
}
],
"series": [{
  index: 1
},
{
  index: 2,
  yAxis: 1
}
],
"colors": [
  "#474747" ,
  "#FF8028",
  "#FABD24",
  "#923F8D",
  "#990300"
],

"legend": {
  "enabled": false,
  "layout": "horizontal",
  "verticalAlign": "top",
  "align": "left",
  //"y": 35,    
  "itemStyle": {
    "fontWeight": "normal"
  }
},
"tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} Fr.</b><br/>', 
  "shared": false
},  
"chart": {      
 // "renderTo": 'container-I.17.3.0003',
  "marginBottom": 80,
  "marginTop": 65,
  "type": "column"
}
}
}());

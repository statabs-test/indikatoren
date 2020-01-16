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
"type": "category",
labels: {
  style: {
    textOverflow: 'none',
    whiteSpace: "nowrap"
  },
  x: -12,
  rotation: 0,
  "formatter": function() {
  //return this.value.replace("Schweiz (rechte Skala)", "<span style='color: rgba(0,0,0,0)'>Absd</span>Schweiz <br/><span style='color: rgba(0,0,0,0)'>Abs</span>(rechte Skala)")
  return this.value.replace("Schweiz (rechte Skala)", "<span style='color: rgba(0,0,0,0)'>Abstan</span>Schweiz <br/><span style='color: rgba(0,0,0,0)'>Abstan</span>(rechte  Skala)")
  .replace("Basel-Landschaft", "Basel-<br/>Landschaft");
  }
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
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} Mrd. Franken</b><br/>', 
  "shared": false
},  
"chart": {      
 // "renderTo": 'container-I.17.3.0003',
  //margin: [40,60, 40, 40] ,
  "type": "column",
}
}
}());

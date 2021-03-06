(function(){
  return {
"plotOptions": {
  "series": {
     borderWidth: 0,
     pointPadding: 0.1,
   // "pointWidth": 30,
    "stacking": "normal"
  }
},
"xAxis": {
  "type": "category",
  "tickInterval": 1,
  "labels": {
      formatter: function(){
          return this.value
            .replace("4. April 2020", "4. April<br>2020")
            .replace("11. Mai 2020", "11. Mai<br>2020")
            .replace("18. Januar 2021", "18. Januar<br>2021")
            ;
        },
      }
},  
"yAxis": {
    tickAmount: 6,
    "labels": {
"format": "{value:,.0f}%",
  },
"max": undefined
},
"legend": {
    y: 30,
  "enabled": true,
  layout: 'vertical',
  align: 'right',
  verticalAlign: 'middle',
  itemWidth: 200,
  margin: 5,
  "itemMarginBottom": 20,
  "itemStyle": {
    "fontWeight": "normal",
    textOverflow: null,
  }
},
"series": [
{"color": "#FABD24", index:3, legendIndex:3}, /*rot */
{"color": "#923F8D", index:2, legendIndex:2}, /*dunkelblau */
{"color": "#689199", index:1, legendIndex:1}, /*rot */
{"color": "#008AC3", index:0, legendIndex:0}, /*dunkelblau */
],
"chart": {
  //"renderTo": 'container-I.01.1.0016', 
  //"marginBottom": 75,
  //"marginTop": 75,
  "type": "column",
  "inverted": false,
  "spacingBottom": 40,
  spacingRight: 0
},
"tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.1f}%</b>',
 "shared": false
},
credits: {
  position: {
    y: -15
  },
  style: {
    width: 470
  }
}
}
}());

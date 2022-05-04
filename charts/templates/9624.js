(function(){
  return {
 chart: {
  type: "column",
  marginRight: 25
 },
plotOptions: {
      series: {
        "stacking": "normal",
    pointPadding: 0,
          borderWidth: 0,
          pointWidth: 40, 

      }/*,
       area: {
          stacking: 'normal',
          //lineColor: '#666666',
          lineWidth: 0,
        
      }*/
},
"yAxis": {
  "labels": {
    "format": "{value:,.0f}",
  },
  max: 250000,
  min: -100000
},
xAxis: {
  tickPositioner: function () {
    var interval = 2,
      ext = this.getExtremes(),
      i = ext.dataMax,
      pos = [i];
    while (i >= ext.dataMin) pos.unshift(i = i - interval);
    return pos;
  }
},
legend: {
  enabled: true,
  layout: "horizontal",
  verticalAlign: "top",
  align: "left",
//"y": 40,
 itemWidth: 190,
itemMarginBottom: 5,
  itemStyle: {
  fontWeight: "normal"
  }
},
series: [
  {
    color: "#E7CEE2",
    stack: 0
},
{
    color: "#FFDA80",
    stack: 0
},
{
    color: "#E7CEE2",
    showInLegend: "false",
    stack: 0
},
{
  color: "#FFDA80",
  showInLegend: "false",
  stack: 0
},
{
  color: "#923F8D",
  type: "line",
  stack: 1
},
{
  color: "#CD9C00",
  type: "line",
  stack: 2
},

],  
tooltip: {
  pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> m<sup>2 </sup> <br/>',
 shared: true,
 useHTML: true
},
};
}());

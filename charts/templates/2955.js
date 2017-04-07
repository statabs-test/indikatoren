/*global Highcharts  */

(function(){
    return {
  "data":{
  	"switchRowsAndColumns": true
  },
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
	"max": 100,
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#cd9c00", "visible": false}, /* hellbraun*/
  {"color": "#9f7c5a", "visible": false}, /* ... */
  {"color": "#b00000", "visible": false}, /* ...*/
  {"color": "#ff5050", "visible": false}, /* ... */
  {"color": "#45381d", "visible": true}, /* dunkelbraun*/
  {visible: false, showInLegend: false},
  {visible: false, showInLegend: false},
  {visible: false, showInLegend: false},
  {visible: false, showInLegend: false},
  {visible: false, showInLegend: false}
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	"y": 65,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    formatter: function(args){
      var seriesName = this.series.name;
      //get corresponding series by name: series 2015-N corresponds to series 2015, etc.
      var correspondingNSeries = this.series.chart.series.filter(function(element, index, array){
          return element.name == seriesName + '_n';
      })[0];
      var n = correspondingNSeries.yData[this.x];
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1, ",", " ") + '%</b> (n=' + n + ')<br/>';
    },
    "shared": false
  },  
  "chart": {      
    "type": "column",
    "inverted": true
  }
}
}());
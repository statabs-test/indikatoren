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
  {"color": "#d7e9d2", "visible": false}, /* hellgrün*/
  {"color": "#73ba7c", "visible": false}, /* ... */
  {"color": "#007a2f", "visible": false}, /* ... */
  {"color": "#0b3b19", "visible": false}, /* ... */
  {"color": "#4f6228", "visible": true},  /* dunkelgrün */
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
          return element.name == seriesName + '-N';
      })[0];
      var n = correspondingNSeries.yData[this.x];
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1, ",", " ") + '%</b> (N=' + n + ')<br/>';
    },
    "shared": false
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());
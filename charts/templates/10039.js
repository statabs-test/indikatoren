(function(){
  return {
//seriesMapping necessary for charts with error bars. 
"data": {
  /*keys: ['x', 'category', 'y1', 'y2'],*/
  "seriesMapping": [
    {
      "x": 0
    },
    {
      "x": 0, 
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    },
    {
      "x": 0
    }
  ]  
},
plotOptions: {
      series: {
          pointPadding: 0.1,
          groupPadding: 0.1,
          borderWidth: 0
      }
  },
tooltip: {
      shared: true
  },
  "series": [
    {
      "index": 0,
      color: "#D3E2E4",
       "tooltip": {
        "pointFormatter": function(){
          return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
        }
      }   
      
    },
   {
      "index": 1,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
        }
      }
    },
    {
      "index": 2,
      color: "#ECE1D0",
      visible: false,
       "tooltip": {
        "pointFormatter": function(){
          return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
        }
      }   
      
    },
   {
      "index": 3,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
        }
      }
    },
    {
      "index": 4,
      color: "#A8C3CA",
       "tooltip": {
        "pointFormatter": function(){
          return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
        }
      }   
    },
    {
      "index": 5,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
        },
      }
    },
        {
      "index": 6,
      color: "#C4AB91",
      visible: false,
       "tooltip": {
        "pointFormatter": function(){
          return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
        }
      }   
      
    },
   {
      "index": 7,
      "type": "errorbar",
      "tooltip": {
        "pointFormatter": function(){
          return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
        }
      }
    },
    
      {
        "index": 8,
        color: "#689199",
         "tooltip": {
          "pointFormatter": function(){
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 9,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 10,
        color: "#9E7C59",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 11,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 12,
        color: "#246370",
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 13,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 14,
        color: "#67401E",
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 15,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 16,
        color: "#083038",
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 17,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 18,
        color: "#3A2012",
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 19,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      }
      
],  
"xAxis": {
  "type": "category"    
},
"yAxis": {
  /*tickAmount: 6, */
  "labels": {
      "formatter": function(){
          return Highcharts.numberFormat((this.value),0)+'%';                
      },
  },
  tickDistance: 10, 
},    
 "legend": {
  "enabled": true,
   itemDistance: 0,
   width: 500,
   itemWidth: 230,
  "layout": "horizontal",
  "verticalAlign": "top",
  "align": "left",
  "itemStyle": {
    "fontWeight": "normal",
    textOverflow: "none"
  }
},
"chart": {    
  "marginBottom": 65,
  "type": "column",
  //"inverted": true
}, 
subtitle: {
  useHTML: true
}, 
exporting: {
  allowHTML: true,
},
};
}());











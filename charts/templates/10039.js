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
    },
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
      color: "#C4AB91",
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
      color: "#9E7C59",
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
      color: "#689199",
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
        color: "#FF8028",
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
        color: "#DC330E",
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
        color: "#B375AB",
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
        color: "#923F8D",
        visible: false,
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
        color: "#FABD24",
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
        color: "#CD9C00",
        visible: false,
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
      },
      {
        "index": 20,
        color: "#73B97C",
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 21,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 22,
        color: "#68AB2B",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 23,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 24,
        color: "#68AB2B",
        
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 25,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 26,
        color: "#68AB2B",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 27,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 28,
        color: "#68AB2B",
       
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 29,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 30,
        color: "#68AB2B",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 31,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 32,
        color: "#68AB2B",
     
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 33,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 34,
        color: "#68AB2B",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
      {
         "index": 35,
         "type": "errorbar",
         "tooltip": {
           "pointFormatter": function(){
             return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
           }
         }
       },
       {
         "index": 36,
         color: "#68AB2B",
      
          "tooltip": {
           "pointFormatter": function(){
             return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
           }
         }   
         
       },
      {
         "index": 37,
         "type": "errorbar",
         "tooltip": {
           "pointFormatter": function(){
             return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
           }
         }
       },
       {
        "index": 38,
        color: "#68AB2B",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 39,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      },
      {
        "index": 40,
        color: "#68AB2B",
        
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 41,
        "type": "errorbar",
        "tooltip": {
          "pointFormatter": function(){
            return ' (95%-Konfidenzintervall: <b>' + Highcharts.numberFormat((this.low),1) + '%</b> - <b>'+ Highcharts.numberFormat((this.high),1) + '%</b>)';
          }
        }
      }
      {
        "index": 42,
        color: "#68AB2B",
        visible: false,
         "tooltip": {
          "pointFormatter": function(){
            return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),1) + '%</b>';
          }
        }   
        
      },
     {
        "index": 43,
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











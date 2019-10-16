(function(){
  return {
    "plotOptions": {
      series: {
          stickyTracking: false
       }
    },
    "yAxis": {
      "min": 0,
      title: {
          text: null,
          "color": "#000000",
          "fontSize": null
      },
      "labels": {
        "format": "{value:,.0f}",
         style:{
            color: "black",
         },
      },

    },
    "xAxis": {
     "tickInterval": 1,
      "labels": {
            step: 1,
              "rotation": -90,
              "formatter": function() {
                return this.value.replace("BS", "<b>BS<br/>");
        }
        }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
     // itemWidth: 140,
      "itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal", 
        textOverflow: 'nowrap',
        whiteSpace: "nowrap"
      }
    },
    "series": [
      { 
        color: "#008AC3",
        "index": 0,
        "type": "column",
        pointWidth: 10, 
        borderWidth: 0,
        legendIndex: 1,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
         }
      },
      {
        "legendColor": "#B00000",
        "color": "#B00000",
        "index": 1,
        "type": "line",
         "marker": {
          "enabled": false
        },
        legendIndex: 2,
        "tooltip": {
          snap: 0,
          "headerFormat": '',
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
      },
      ],
      
      
      
     "tooltip": {
          //"shared": true
         },
    "chart": {
      "alignTicks": false
    }
  };
}());



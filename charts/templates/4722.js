(function(){
    return {
  "plotOptions": {
    "series": {
      "stacking": "normal",
      /*"pointWidth": 35,*/
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": [
    {
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      "title": {
          "style": {
              "color": "#000000",
              "fontSize": null
          },
          "text": null
      },
      "labels": {
          "style": {
          "color": "#000000"
          },
          "format": "{value:,.0f}",
      },
      "reversedStacks": true
    },
    {
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      "min": 0,
      "title": {
          "style": {
              "color": "#000000",
              "fontSize": null
          },
          "text": null
      },      
      "labels": {
        "format": "{value:,0f}",
        "style": {
          "color": "#000000"
        }              
      },
      "opposite": true
    }
  ],
  "tooltip": {    
    "shared": true, 
    //"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    //"footerFormat": 'Total: <b>{point.total:,.0f}</b>',
  },  
  "legend": { 
     //y: 35,
     itemMarginBottom: 5,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",

    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    
  },
},
  "series": [
    {
      "color": "#008AC3",
      "type": "column", 
      tooltip: {
        valueDecimals: 0
      }, 
      marker: {
        enabled: false
      },
      "legendIndex": 2
    },
    {
      "color": "#9F7C5A",
      "type": "line",
      Index: 3,
      tooltip: {
        valueDecimals: 1
      }, 
      marker: {
        enabled: false
      },
      "yAxis": 1,
      "stacking": null, 
      "legendIndex": 0,
    }    
  ],
  "chart": {
    "marginBottom": 65,
    "type": "column"
  }
	}
}());

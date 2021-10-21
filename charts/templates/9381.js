(function () {
    return {
      "plotOptions": {
        "series": {
          borderWidth: 0,
          "dataLabels": {
            "style": {
              "fontSize": "10px"
            }
          },
          "stacking": "normal"
        }
      },
      "xAxis": {
        "type": "category",
        "tickInterval": 1,
        "labels":{
          rotation: 0
        }
      },
      "yAxis": {
        tickInterval: 20000,
        "labels": {
          "format": "{value:,.0f}"
        },
        plotLines: [{
          value: 0,
          color: '#B9CFD7',
          width: 2
        }]
      },
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
        itemDistance: 0,
        itemWidth: 210,
        width: 450,
        "itemStyle": {
          "fontWeight": "normal"
        }
      },
      "series": [
        { "color": "#83038", legendIndex: 4}, 
        { "color": "#689199", legendIndex: 2}, 
        { "color": "#A8C3CA", legendIndex: 0}, 
        { "color": "#0A3B19", legendIndex: 5}, 
        { "color": "#007A2F", legendIndex: 3}, 
        { "color": "#68AB2B", legendIndex: 1}, 
        {
          "color": "#000000",  legendIndex: 6,
          //"index": 1,
          "type": "line",
          "marker": {
            "enabled": false
          },
      
        },
      ],
      "chart": {
        "renderTo": 'container-I.01.1.0016',
        //"marginBottom": 75,
        //"marginTop": 75,
        "type": "column",
        "inverted": false
      },
      "tooltip": {
        "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
        //"footerFormat": 'Total: <b>{point.total:,.0f}</b>',
        "shared": true,
      },
    };
  }());
  
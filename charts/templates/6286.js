(function(){
  return {
    "plotOptions": {
      series: {
          pointPadding: 0,
          borderWidth: 0,
        
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
      type: "category",
      "labels": {
              "rotation": 0,
        }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal", 
      }
    },
    "series": [
      { 
        linkedTo: 'fake',
        "colorByPoint": true,
        "index": 0,
        "type": "column",
        pointWidth: 14.5, 
        pointPlacement: 0.15,
        //borderWidth: 0,
        legendIndex: 1
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
      },
      {
        name: 'Ressourcenindex nach Kanton',
        id: 'fake',
        color: '#A8C3CA',
        type: 'column'
      }
      ],
      
      "colors": [
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#689199",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",        
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA", 
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA"
      ],
      
         "chart": {     
          "type": "column",
          "inverted": false,
          "spacingTop": 5,
          width: 665,
        }
      };
      
}());



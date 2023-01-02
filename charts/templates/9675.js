(function () {
  return {
    "chart": {
      "type": "column",
    },
    "plotOptions": {
      series: {
        //pointWidth: 5, 
      },
      "column": {
        "colorByPoint": true
      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": -90
      },
      plotLines: [{
        value: 1.5,
        dashStyle: 'ShortDash',
        color: "#999999",
        width: 1.5,
        label:{
          text: "Zielwert: Rang 2",
          rotation: 0,
          y: 12,
          style: {
            color: "#999999",
          }
        }
      }]
    },
    "yAxis": {
      "max": 100,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "x": 35,
      //"y": 35,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y:,.1f}</b><br/>',
      "shared": false
    },
    series: [{
      name: 'Kanton'
    }],

    /*"series": [
             function() {
             var col;
          if(this.series.data[0]=="BS"){
         col="#0066FF";
          }else {
          col="#0066EE";
        }
              }, 
    {"color": "col", "visible": true}, 
    ],*/

    "colors": [
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
      "#A8C3CA",
      "#A8C3CA",
      "#A8C3CA",
    ],

  }
}());
(function () {
  return {
    "plotOptions": {
      series: {
        minPointLength: 1,
        pointPadding: 0
        //pointWidth: 5, 
      },
      "column": {

      }
    },
    "xAxis": {
      "type": "category",
      "labels": {
        "rotation": -90,
        "formatter": function () {
          return this.value.replace("BS", "<b>BS<br/>");
        }
      }
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },

    series: [
      {

        "color": '#A0BEC8'
      },
      {

        "color": '#008AC3'
      },
      {

        "color": '#2B0099'
      },
    ],

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
    "legend": {
      "enabled": true,
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
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y:,.2f}</b><br/>',
      "shared": false
    },
    "chart": {
      "type": "column",
      "inverted": false,
      "spacingBottom": 40
    }
  }
}());
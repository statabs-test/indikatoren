(function(){
  return {
    title: {
      useHTML: true
    },
    "plotOptions": {
      "series": {
        "borderWidth": 0,
        /*"pointWidth": 30,*/
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        },
        "stacking": "percent"
      }
    },
    "xAxis": {
      "type": "category",
  	//"tickInterval": 1	
    },  
    "yAxis": [{
    	title: {
          text: null
      },
      "labels": {
        "format": "{value:,.0f}%",
         "style": {
         "color": "black"
          },
      },
      "min": 0
    },
   /* {
      title: {
          text: null
      },
      "labels": {
        "format": "{value:,.0f}%",
         "style": {
         "color": "black"
          },
      },
      "min": 0,
      "opposite": true
    }*/
    ],
    "series": [
      {
  	  "index": 1,
  	  "color": "#661200",
        "legendIndex": 1,
        "type": "column",
        /*"tooltip": {
      		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)</b><br/>',
          shared: true
         }*/
      },
      {
        "index": 2,
        "color": "#DC440E",
          "legendIndex": 2,
          "type": "column",
          /*"tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)</b><br/>',
            shared: true
           }*/
      },

      {
        "index": 3,
        "color": "#083038",
          "legendIndex": 3,
          "type": "column",
          /*"tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)</b><br/>',
            shared: true
           }*/
      },
      {
        "index": 4,
        "color": "#689199",
          "legendIndex": 4,
          "type": "column",
          /*"tooltip": {
            "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
            shared: true
           }*/
      }
    ],
    tooltip: {
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:,.1f}%)<br/>',
      footerFormat: 'Total: <b>{point.total:,.0f}</b>',
      shared: true,
      //useHTML: false
    },

    "legend": {
      //useHTML: false,
      "enabled": true,
      //"y": 35,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
       "fontWeight": "normal"
      }
    },
    "chart": {    
      //"marginBottom": 75,
      //"marginTop": 75,
      "type": "column"
    }
  };
}());



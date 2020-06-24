(function(){
  return {
    "yAxis": [{
    	//min: -100,
     // max: 200,
     tickInterval: 5,
      tickAmount: 6,
      alignTicks: true,
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
    {
    	//"min": 95,
       //max: 115,
      tickInterval: 5,
      tickAmount: 6,
      alignTicks: true,
      "title": {
          "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "format": "{value:,.0f}",
         style:{
         		color: "black",
         },
      },
      "opposite": true
    }
    ],
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      itemWidth: 200,
  	  "itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal", 
        textOverflow: 'nowrap',
        whiteSpace: "nowrap"
      }
    },
    "series": [
        {
            "color": "#FFBB58", // 2015 kummuliert
            "index": 0,
            "type": "line",
            "yAxis": 1,
            visible: true,
               "marker": {
              "enabled": false
            },
            legendIndex: 1,
            "tooltip": {
                "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
             },
          },
          {
            "color": "#FFBB58", // 2015 wöchentlich
            "index": 1,
            "type": "column",
            visible: true,
            pointPadding: 0,
            borderWidth: 0,
            legendIndex: 0,
              "tooltip": {
                "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
                 },
          },
            {
        "color":  "#A8C3CA", // 2016 kumuliert
        "index": 1,
        "type": "line",
        "yAxis": 1,
        visible: false,
        "legendIndex": 4,
        "tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
  	   },
        "marker": {
          "enabled": false
        },
      },
      {
        "color":  "#A8C3CA", // 2016 wöchentlich
        "index": 0,
        "type": "column",
        visible: false,
        pointPadding: 0,
        borderWidth: 0,
        //"pointWidth": "8",
        legendIndex: 3,
  	  "tooltip": {
    			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },  
      },
      {
        "color": "#B00000", // 2017 kumuliert
        "index": 1,
        "type": "line",
        "yAxis": 1,
        visible: false,
         "marker": {
          "enabled": false
        },
        legendIndex: 6,
  	  "tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
  	   },
      },
      {
        "color": "#B00000", // 2017 wöchentlich
        "index": 0,
        "type": "column",
        visible: false,
        pointPadding: 0,
        borderWidth: 0,
        legendIndex: 5,
      	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  		   },
      },
      {
        "color":  "#246370", // 2018 kumuliert
        "index": 1,
        "type": "line",
        "yAxis": 1,
        visible: false,
        "legendIndex": 8,
        "tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
  	   },
        "marker": {
          "enabled": false
        },
      },
      {
        "color":  "#246370", // 2018 wöchentlich
        "index": 0,
        "type": "column",
        visible: false,
        pointPadding: 0,
        borderWidth: 0,
        //"pointWidth": "8",
        legendIndex: 7,
  	  "tooltip": {
    			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
  
      },     
      {
        "color": "#923f8d", // 2019 kumuliert
        "index": 1,
        "type": "line",
        "yAxis": 1,
        visible: true,
         "marker": {
          "enabled": false
        },
        legendIndex: 10,
  	  "tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
  	   },
      },
      {
        "color": "#923f8d", // 2019 wöchentlich
        "index": 0,
        "type": "column",
        visible: true,
        pointPadding: 0,
        borderWidth: 0,
        legendIndex: 9,
      	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  		   },
      },
      {
        "color":  "#FF8028", // 2020 kumuliert
        "index": 1,
        "type": "line",
        "yAxis": 1,
        visible: false,
        "legendIndex": 12,
        "tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
  	   },
        "marker": {
          "enabled": false
        },
      },
      {
        "color":  "#FF8028", // 2020 wöchentlich
        "index": 0,
        "type": "column",
        visible: false,
        pointPadding: 0,
        borderWidth: 0,
        //"pointWidth": "8",
        legendIndex: 11,
  	  "tooltip": {
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
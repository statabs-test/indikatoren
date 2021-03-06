(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
             groupPadding: 0,
        }
  },
  "yAxis": {
  	tickPositions: [0, 12500, 25000, 37500, 50000],
  	//tickInterval: 10500,
  	//tickAmount: 4,
    "labels": {
      "format": "{value:,.0f}",
        //padding: 0,
        //y: 8,
    }
  },
  "xAxis": {
  	"type": "category",
    "tickInterval": 1,
      "labels": {
        style:{
          fontSize: "9px"
        },
      	//align: "left",
      	step: 1,
        "rotation": -90,
         overflow: 'justify',
         //x: -80
         formatter: function(){
           return this.value.split(" ").reverse().join(" ");
         },
       }  
  },
 "legend": {
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#b475ab",
      "index": 3,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 3
    },
    {
      "color": "#a8c4cb",
      "index": 2,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 2
    },
    {
      "color": "#fabd24",
      "index": 1,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#68AB2B",
      "index": 0,
      "type": "column",
      //"pointWidth": "15",
      legendIndex: 0
    },    
  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  },
  "chart": {
  	  //marginLeft: 95,
  	  spacingBottom: 5,
     "inverted": false,
     //width: 600, 
     //spacing: [1,1,3,1]
  }
};
}());


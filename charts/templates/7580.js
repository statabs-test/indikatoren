(function(){
    return {
   "chart": {
    "type": "area",
   },
  plotOptions: {
        /*series: {
        	"stacking": "normal",
			pointPadding: 0,
            borderWidth: 0,
            pointWidth: 10, 

        }*/
         area: {
            stacking: 'normal',
            //lineColor: '#666666',
            lineWidth: 0,

        }
  },
  "yAxis": [
    {
    "labels": {
      "format": "{value:,.0f}",
      },
      title: {
        style: {
            color: "#000000",
            fontSize: null
        },
        text: null
    },
    },
    {
      opposite: true,
      min: 0,
      max: 240000,
      gridLineColor: '#B9CFD7', 
      gridLineWidth: 0.5,
      //lineColor: '#B9CFD7', 
      title: {
          style: {
              color: "#000000",
              fontSize: null
          },
          text: null
      },
      labels: {
        formatter: function(){
          return Highcharts.numberFormat(this.value, 0);
        },
          style: {
              color: "#000000"
          }, 

      }
    }
  ],
  "xAxis": {
  	"type": "linear",
  	tickInterval: 1,
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      color: '#E7CEE2',
      index: 1,
      legendIndex: 1
    },
    {
      yAxis: 1,
      color: '#CD9C00',
      index: 2,
      type: "line",
      pointWidth: "10",
      legendIndex: 2,
      marker: {
        enabled: false
      },
    },
    {
      color: '#923F8D',
      index: 0,
      legendIndex: 0
    }
  
  ],  
  "tooltip": {
    "shared": true
  },
};
}());
(function(){
    return {
      "plotOptions": {
          column: {
              stacking: 'normal'
          },
        "series": {      
          "dataLabels": {
            "style": {
              "fontSize": "10px"
            }
          }
        },
      },
      xAxis: {
          type: 'linear',
        tickInterval: 1, 
        labels: {
          step: 1,
          formatter: function(){
            //show first, last, and every 10th year
            var xData = this.chart.series[0].xData;
            if (xData[0] == this.value || xData[xData.length-1] == this.value || (this.value - xData[0]) % 10 == 0){
              return this.value;
            }
          }
        }
      },
      "yAxis": {
          reversedStacks: false, 
          tickAmount: 7
      },
      "series": [
        {
            color: 'rgb(220, 68, 14)'
        },
        {
            color: 'rgb(168, 196, 203)'
        }
      ],
      "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
		"y": 15,    
        "itemStyle": {
          "fontWeight": "normal"
        }, 
        labelFormatter: function(){
            //only return last word
            return this.name.split(" ").slice(-1);
        },
      },
      "chart": {      
        "type": "column"
      }
	};
}());

(function(){
    return {
  plotOptions: {
        series: {
        	//stacking: "normal",
          pointPadding: 0,
          groupPadding: 0.5, // exaclty overlaps columns
          borderWidth: 0
        }
  },
  
  yAxis: [
      {
        max: 1000,
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
        	format: "{value:,.0f}",
            style: {
            color: "#000000"
            }
        }
      },
      {
        opposite: true,
        min: 0,
        max: 0.015,
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
        	formatter: function(){
            return Highcharts.numberFormat(this.value*100, 1) + "%";
          },
            style: {
                color: "#000000"
            }, 
        }
      }
    ],
  
  xAxis: {
   tickInterval: 1,
   
  },
  legend: {
    itemHiddenStyle: {
      color: "#6F6F6F",
      },
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
  	itemMarginBottom: 5,
  	itemDistance: 2,
    padding: 1, 
    alignColumns: false,
  	//symbolPadding: 5,
    itemStyle: {
      fontWeight: "normal"
    }
  },
  data: {
    seriesMapping: [
      {
        x: 1, y: 2
      },
      {
        x: 1, y: 3
      }		      
    ]
},
  series: [
    {
      colorByPoint: true,
      colors: ["#6F6F6F", "#6F6F6F", "#6F6F6F", "#DC440E", "#DC440E", "#DC440E", "#DC440E", "#DC440E"],
      //color: "#6F6F6F",
      index: 0,
      type: "column",
      pointWidth: "15",
      legendIndex: 0
    },
	{   
      yAxis: 1,
      colorByPoint: true,
      colors: ["#6F6F6F", "#6F6F6F", "#6F6F6F", "#DC440E", "#DC440E", "#DC440E", "#DC440E", "#DC440E"],
      //color: "#FABD24",
      index: 1,
      type: "scatter",
      marker: {
        enabled: true,
        symbol: "triangle"
      }, 
      legendIndex: 1,
      tooltip: {
        headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
        pointFormatter: function(){ 
            return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 1, ",", " ") + '%</b><br/>';
        }
      }
  },
  ],  
  tooltip: {
    shared: true
  },
};
}());
/*
    global Highcharts
*/

(function(){
    return {
    series: [
        {
            color: "rgb(231, 207, 226)",
        },
        {
            color: "rgb(180, 117, 171)",
        },
        {
            color: "rgb(220, 68, 14)",
            type: 'scatter',
            marker: {
                symbol: 'diamond', 
                radius: 8
            },
            pointPlacement : -0.15
        },
        {
            color: "rgb(139, 34, 35)",
            type: 'scatter',
            marker: {
                symbol: 'diamond', 
                radius: 8
            },
            pointPlacement : 0.15
        }        
  ],
  xAxis: {
      type: "category"
  },
  yAxis: [
      {
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
            style: {
            color: "#000000"
            }
        }
      },
      {
        opposite: true,
        min: 0,
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
            style: {
                color: "#000000"
            }, 
            formatter: function() {
               return 100 * this.value + "%";
            }
        }
      }
    ],
  plotOptions: {
    series: {
        stacking: null
    }, 
    scatter: {
        yAxis: 1,
        tooltip: {
          headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
          pointFormatter: function(){ 
              return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 0, ",", " ") + '%</b><br/>';
          }
        }
    }
  },
  legend: {
    y: 25,
    layout: "horizontal",
    verticalAlign: "top",
    itemMarginBottom: 5,     
    align: "left",
    useHTML: false,
    itemStyle: {
        fontWeight: "normal"
    },
    symbolRadius: 0,
    labelFormatter: function(){
        //remove text before year on each item with odd index
        return (this.index % 2 != 0) ? this.name.slice(-4) : this.name;
    }
  },
  data: {
      switchRowsAndColumns: true
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  chart: {
      type: 'column',
 }
	};
}());

 
/*
    global Highcharts
*/

(function(){
    return {
    series: [
        {
            color: "rgb(255, 218, 128)",
            dataLabels: {
            enabled: true,
            y: 20,
            style: {
                inside: true,
                fontSize: "9px", 
                color: 'black', 
                fontWeight: 'normal',
                textOutline: undefined
            }
        },
        },
        {
            color: "rgb(186, 168, 90)",
             dataLabels: {
            enabled: true,
            y: 20,
            style: {
                fontSize: "9px", 
                color: 'black', 
                fontWeight: 'normal',
                textOutline: undefined
            }
        },
        },
        {
            color: "rgb(220, 68, 14)",
            type: 'scatter',
            marker: {
                enabled: true,
                symbol: 'diamond', 
                radius: 7
            },
            pointPlacement : -0.15
        },
        {
            color: "rgb(139, 34, 35)",
            type: 'scatter',
            marker: {
                enabled: true,
                symbol: 'diamond', 
                radius: 7
            },
            pointPlacement : 0.15
        }        
  ],
  xAxis: {
      type: "category",
      labels:{
     fontSize: '9px'
      }
  },
  yAxis: [
      {
        tickAmount: 6,
        max: 2000,
        tickInterval: 400,
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
                fontSize: '9px',
            color: "#000000"
            }
        }
      },
      {
        tickAmount: 6,
        max: 0.75,
        tickInterval: 0.15,
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
                fontSize: '9px',
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
        stacking: null,
        pointPadding: 0,
        borderWidth: 0,
        //pointWidth: 10, 

    }, 
    scatter: {
        yAxis: 1,
        tooltip: {
          headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
          pointFormatter: function(){ 
              return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 1, ",", " ") + '%</b><br/>';
          }
        }
    }
  },
  legend: {
    enabled: true,
    //useHTML: true,
   // y: -40,
    layout: "horizontal",
    verticalAlign: "top",
    itemMarginTop: 5,
    itemMarginBottom: 5,
    itemDistance: 5,
    align: "left",
        itemStyle: {
        height: 2,
        fontWeight: "normal",
        fontSize: '9px'
      //width: 40        
    },
    //width: 200,
    //itemWidth: 70,    
    symbolRadius: 0,
    symbolHeight: 8,
    symbolPadding: 0,
    labelFormatter: function(){
        //remove text before year on each item with odd index
       // return (this.index % 2 != 0) ? this.name.slice(-4) : this.name + ':';
       
        return  (this.index % 2 != 0) ? this.name.slice(-4) : this.name;
        //return this.name.slice(-4);
        
    }, 
   /* title: {
    	text: 'Angebotene Zimmer: Nettozimmerauslastung (rechte Skala):', 
    	style: {
    	  fontWeight: 'normal'
    	}
    },*/

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
        width: 663,
       // spacingTop: 50,
        /*events: {
          load: function(){
            this.credits.element.onclick = function() {};
              
            //for top-left legends with no x defined: move legend to x position of first yAxis
            if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
              this.update(
                {
                  legend: {
                    x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                  }
                }
              );
            }
            //move legend title
            var title = this.legend.title;
            title.translate(-215, 40);
          }
        }   */           
 }
	};
}());

 
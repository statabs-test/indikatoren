/*
    global Highcharts
*/

(function(){
    return {
    series: [
        {
            color: "rgb(191, 215, 236)",
            dataLabels: {
            enabled: false,
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
             color: "rgb(159, 196, 227)",
             dataLabels: {
            enabled: false,
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
            color: "rgb(255, 102, 0)",
            type: 'scatter',
            marker: {
                enabled: true,
                symbol: 'diamond', 
                radius: 4.8
            },
            pointPlacement : -0.15,
            pointRange: 1
        },
        {
            color: "rgb(201, 62, 13)",
            type: 'scatter',
            marker: {
                enabled: true,
                symbol: 'diamond', 
                radius: 4.8
            },
            pointPlacement : 0.15,
            pointRange: 1
        }        
  ],
  xAxis: {
      type: "category",
      labels:{
          "formatter": function() {
            return this.value.replace("Schweiz", "CH")
            .replace("Deutschland", "DE")
            .replace("Vereinigte Staaten", "US")
            .replace("Vereinigtes Königreich", "GB")
            .replace("Frankreich", "FR")
            .replace("Italien", "IT")
            .replace("Spanien", "ES")
            .replace("Niederlande", "NL")
            .replace("Indien", "IN")
            .replace("China, Hongkong", "CN")
            .replace("Übrige Länder", "Übrige<br/>Länder");
            
        },
          rotation: 0,
          style:{
        fontSize: '9px'
          } 
      }
  },
  yAxis: [
      {
        tickAmount: 6,
        max: 400000,
        tickInterval: 80000,
        gridLineColor: '#B6CFD7', 
        gridLineWidth: 0.8,
        lineColor: '#B6CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
            y: 2.5,
            x: -8,
        	format: "{value:,.0f}",
            style: {
                fontSize: '9px',
            color: "#000000"
            }
        }
      },
      {
        tickAmount: 6,
        allowDecimals: false,
        max: 0.60,
       tickInterval: 0.12,
        opposite: true,
        min: 0,
        gridLineColor: '#B6CFD7', 
        gridLineWidth: 0.35,
        lineColor: '#B6CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
            y: 5,
            x: 12,
            style: {
               
                fontSize: '9px',
                color: "#000000"
            }, 
            formatter: function() {
               
              return Highcharts.numberFormat((this.value*100), 0)+'%';
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
    enabled: false,
    //useHTML: true,
   // y: -40,
    layout: "horizontal",
    verticalAlign: "top",
    itemMarginTop: 0,
    itemMarginBottom: 0,
    itemDistance: 5,
    align: "left",
        itemStyle: {
        height: 2,
        fontWeight: "normal",
        fontSize: '16px'
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
         if(this.index == 0) { return 'Verfügbare Zimmer: ' + this.name.slice(-4);}
        else if (this.index == 1) {return this.name.slice(-4)}
        else if (this.index == 2) {return 'Nettozimmerauslastung (rechte Skala): ' + this.name.slice(-4)}
        else if (this.index == 3) {return this.name.slice(-4)}
      //  return  (this.index % 2 != 0) ? this.name.slice(-4) : this.name.slice(-4);
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
    height: 415.7480315,
    width: 831.49606299,
    spacingTop: 60,
    spacingBottom: 0,
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

 
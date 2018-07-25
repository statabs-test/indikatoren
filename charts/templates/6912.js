/*
    global Highcharts
*/

(function(){
    return {
    series: [
    	//data: [{x: "Grenzgänger aus Frankreich", color: 'ECE1D0'}], 
        {
             //colors: ["#FABD24","#FABD24","#FABD24","#FABD24","#FABD24","#FABD24","#FABD24","#FABD24"],  
             color: "#FABD24",

        },
        {
            color: "#7F5F1A",
        },
        {
            color: "#FF8028",
            type: 'scatter',
            marker: {
                symbol: 'circle', 
                radius: 3
            },
            pointPlacement : -0.15
        },
        {
            color: "#68AB2B",
            type: 'scatter',
            marker: {
                symbol: 'circle', 
                radius: 3
            },
            pointPlacement : 0.15
        }        
  ],
  xAxis: {
      type: "category",
  "labels": {
          	step: 1,
              "rotation":-45,
        }  

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
        	format: "{value:,.0f}",
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
        	format: "{value:,.0f}",
            style: {
                color: "#000000"
            }, 

        }
      }
    ],
  plotOptions: {
    series: {
        stacking: null,
        pointPadding: 0,
        borderWidth: 0,
    "column": {
        "colorByPoint": true
    }        
    //pointWidth: 10, 

    }, 
    scatter: {
        yAxis: 1,
        tooltip: {
          headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
          pointFormatter: function(){ 
              return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 0, ",", " ") + '</b><br/>';
          }
        }
    }
  },
 "legend": { 
    "enabled": true,
    "layout": "horizontal",
   "itemWidth": 1000,
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
    "fontWeight": "normal"
    
  },


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

 
/*global $*/
(function(){
    
  return {
    
    plotOptions: {
      pie: {
        size: 250,
      }, 
      series: {
          allowPointSelect: false,
          point: {
              events: {
                  legendItemClick: function (event) {
                      event.preventDefault();

                  }
              }
          }
      }
  },
  data: {
    seriesMapping: 
    [
      {
        x: 6, y: 3
      },
      {
        //2nd series: use y values from column 3
        y: 4
      },
      {
        y: 5
      }
    ]
  },
  legend:{
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    itemDistance: 2,
    style: {
      fontSize: "12px"
    }
  },
  series: 
  [
    {
      showInLegend: false,
      type: 'pie',
      innerSize: '100%',
      borderWidth: 0,
      colors: 
      [
        '#661200',
        '#B00000',
        '#DC440E',
        '#A8C3CA',
        '#689199',
        '#246370'
      ],
      dataLabels: {
        enabled: true,
        //format: '{point.name}',
        formatter: function(){
          return this.point.name.replace("4 Zimmer ", "4 Zimmer<br/>").replace(".", ",");
  
        },
        distance: 15,
        connectorWidth: 1,
        style: {
          color: 'black',
          textOutline: "0px black", 
          fontWeight: "normal", 
          fontSize: "12px"
        }
      }
    }, 
    {
      showInLegend: false,
      type: 'pie',
      innerSize: '40%',
      borderWidth: 0,
      colors: [
        '#661200',
        '#B00000',
        '#DC440E',
        '#A8C3CA',
        '#689199',
        '#246370'
      ]/*,
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.0f}%',
        distance: -15,
        style: {
          color: 'contrast',
          textOutline: "0px black", 
          fontWeight: "normal", 
          fontSize: "12px"
        }
    }*/
  }], 
  tooltip: {
    headerFormat: '',//'<span style="font-size: 10px"> {point.key}</span><br/>',
    pointFormatter: function(){ 
        return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 0, ",", " ") + '%</b><br/>';
    }
  }
};
}());

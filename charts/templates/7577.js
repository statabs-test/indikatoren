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
        formatter: function(){
          return this.point.name.replace(".", ",");
  
        },
        distance: 15,
        connectorWidth: 2,
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
      ],
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
    }
  }],
      
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.1f}%)<br/><br/>',
    "shared": false
  }   
};
}());

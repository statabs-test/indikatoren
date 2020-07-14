/*global $*/
(function(){
    
  return {
    
    plotOptions: {
  
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
      
    legend:{
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemDistance: 2,
      style: {
  fontSize: "12px"
  }
    },
    "series": [{
          showInLegend: false,
          type: 'pie',
          innerSize: '100%',
        borderWidth: 2,
          colors: [
            '#D7E8D2', 
            '#F2F2F2',
            '#C9D6DB',
         ],
         dataLabels: {
          enabled: true,
                format: '{point.name}',
                distance: 0,
                connectorWidth: 0,
                style: {
                    color: 'black',
                    textOutline: "0px black", 
                    fontWeight: "normal", 
                    fontSize: "10px"
                }
      }
         
    }, {
          showInLegend: false,
          type: 'pie',
          innerSize: '40%',

        borderWidth: 2,
           colors: [
            '#D7E8D2', 
            '#F2F2F2',
            '#C9D6DB',
          ],
          dataLabels: {
            enabled: true,
                  format: '{point.percentage:.0f}%',
                  distance: -20,
                  style: {
                      color: 'black',
                      textOutline: "0px black", 
                      fontWeight: "normal", 
                      fontSize: "10px"
                  }
        }
      }],
      
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.1f}%)<br/><br/>',
      "shared": false
    }   
  };
}());

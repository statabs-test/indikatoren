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
        data: {
              series: [/*
            {ParentId: '1',
        },{
            ParentId: '2',
        },{
            ParentId: '3',
        }*/]},
          showInLegend: false,
          type: 'pie',
          size: '100%',
          innerSize: '100%',
          center: [180,120],
        borderWidth: 2,
          colors: [
            '#D7E8D2', 
            '#F2F2F2',
            '#C9D6DB',
         ],
         dataLabels: {
          enabled: true,
                format: '{point.name}',
                distance: 15,
                connectorWidth: 0,
                style: {
                    color: 'black',
                    textOutline: "0px black", 
                    fontWeight: "normal", 
                    fontSize: "12px"
                }
      }
         
    }, {
          data: {
              series: [/*
            {id: '1',
        },{
            id: '2',
        },{
            id: '3',
        }*/]},
          showInLegend: false,
          type: 'pie',
          innerSize: '40%',
          center: [180,120],
        borderWidth: 2,
           colors: [
            '#D7E8D2', 
            '#F2F2F2',
            '#C9D6DB',
          ],
          dataLabels: {
            enabled: true,
                  format: '{point.percentage:.1f}%',
                  distance: -35,
                  style: {
                      color: 'black',
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

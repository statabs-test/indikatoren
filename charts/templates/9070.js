/*global $*/
(function(){
    
  return {
    plotOptions: {
      pie: {
        size: 180,
        center: ["50%", "53%"]
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
      },
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
      fontSize: "10px"
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
          //return this.point.name.replace(".", ",").replace(" (", "<br/>(").replace("Zimmer", "Zi");
          return this.point.name.replace("Zimmer", "Zi.<br>");
        },
        distance: 15,
        connectorWidth: 1,
        style: {
          color: 'black',
          textOutline: "0px black", 
          fontWeight: "normal", 
          fontSize: "10px"
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
        distance: -10,
        style: {
          color: 'contrast',
          textOutline: "0px black", 
          fontWeight: "normal", 
          fontSize: "10px"
        },
        positioner: function(labelWidth, labelHeight, point) {
          var position = point.labelPos;
          
          // Adjust position for series 5 and 6 (index 4 and 5)
          if (point.index === 4 || point.index === 5) {
            // Move these labels slightly to avoid overlap
            return {
              x: position[0] - labelWidth/2,
              y: position[1] - labelHeight + 55 // Move up 5 pixels
            };
          }
          
          // Default position for other labels
          return {
            x: position[0] - labelWidth/2,
            y: position[1] - labelHeight
          };
        }
      




      }
    }],
        
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.1f}%)<br/><br/>',
      "shared": false
    }
  };
  }());




        


        

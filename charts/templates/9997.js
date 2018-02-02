(function(){
    return {
      series: [
        {
        }
      ], 
      data: {
		    seriesMapping: [
		        {x: 1, y: 2, z: 3, name: 0, color: 4}
        ],  
        parsed: function(columns){
          //define colors by entry in first column
          var colors = columns[0].map(function(val, i, arr){
            //column name
            val = (i == 0) ? 'color' : 
              //column value
              (val == 'Schweiz') ? 'red': 'blue';
            return val;
          });
          columns.push(colors);
        }
      }, 
      xAxis:{
        //make sure dataLabels are not cut off
        maxPadding: 0.2, 
        labels: {
          format: '{value}%'
        }
      },
      chart: {
        events: {
          load: function(e){
            //remove credits link
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
          }
        }
      }
    };
}());


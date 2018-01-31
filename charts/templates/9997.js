(function(){
    return {
      "series": [
        {
        }
      ], 
      "data": {
		    "seriesMapping": [
		        {x: 1, y: 2, z: 3, name: 0}
	        ] 
      }, 
      chart: {
        events: {
          load: function(e){
            //set color based on country
            e.target.series[0].setData(
              e.target.series[0].data.map(function(val, i, arr){
                val.color = (val.name == 'Schweiz') ? 'red': 'blue';
                return val;
              })
            );
            
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


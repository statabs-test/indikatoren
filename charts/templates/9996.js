(function(){
    return {
      series: [
        {
            //pointPlacement: 'on',
        }
      ], 
      data: {
		    seriesMapping: [
		        {x: 5, y: 8}
        ],  
        /*        
        _parsed: function(columns){
            console.log(columns);
            //find index of all occurances of the current Wohnviertel
            var wvcol = columns[6];
            
            var indexesToRemove = 
                wvcol
                .map(function(v, i, a){return (v != 1 ? i-1 : undefined)})
                .filter(function(v, i, a){return v >= 0})
                .reverse();
            
            console.log(indexesToRemove);
            columns.forEach(function(row, i, a){
                //console.log(row);
                for (var j=0; j<row.length; row++){
                    row.splice(indexesToRemove[i], 1);
                }
            });
            
            console.log(columns);
        }
        */
      }, 
    };
}());


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
            
            /*
          //define colors by entry in first column
          var colors = columns[0].map(function(val, i, arr){
            //column name
            val = (i == 0) ? 'color' : 
              //column value
              (val == 'Schweiz') ? 'red': 'blue';
            return val;
          });
          columns.push(colors);
          */
          
          
            // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
            if (!Array.prototype.findIndex) {
              Object.defineProperty(Array.prototype, 'findIndex', {
                value: function(predicate) {
                 // 1. Let O be ? ToObject(this value).
                  if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                  }
            
                  var o = Object(this);
            
                  // 2. Let len be ? ToLength(? Get(O, "length")).
                  var len = o.length >>> 0;
            
                  // 3. If IsCallable(predicate) is false, throw a TypeError exception.
                  if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                  }
            
                  // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
                  var thisArg = arguments[1];
            
                  // 5. Let k be 0.
                  var k = 0;
            
                  // 6. Repeat, while k < len
                  while (k < len) {
                    // a. Let Pk be ! ToString(k).
                    // b. Let kValue be ? Get(O, Pk).
                    // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                    // d. If testResult is true, return k.
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                      return k;
                    }
                    // e. Increase k by 1.
                    k++;
                  }
            
                  // 7. Return -1.
                  return -1;
                }
              });
            }
            
        }
      }, 
    };
}());


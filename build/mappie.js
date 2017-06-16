//define new chart type
// source: https://www.highcharts.com/blog/data-journalism/effectively-visualizing-us-election-results/, 
//  which displays  http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/maps/demo/map-pies/

    
// New map-pie series type that also allows lat/lon as center option.
// Also adds a sizeFormatter option to the series, to allow dynamic sizing
// of the pies.
Highcharts.seriesType('mappie', 'pie', {}, {});


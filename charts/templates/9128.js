/*  global rheinData
	global Highcharts
	global geojson_wohnviertel
*/
(function(){
    return {
		colorAxis: {
			minColor: "#D3E2E4",
			maxColor: "#083038",
			labels: {
				formatte: function () {
					return Highcharts.numberFormat((this.value),0); 
				},
				style: {
					whiteSpace: "nowrap"
				}
			}
		},		
        data: {
		    seriesMapping: [
		      {
		      	x: 0, y: 1
		      }	      
		    ]
		},
		legend: {
			align: 'right'
		},
		series: [
			{
				name: "Wohnviertel", 
				animation: true,
				mapData: geojson_PLZ_EPSG_2056,
				borderColor: "#fbfbfb",		
				joinBy: ['PLZ', 'PLZ'],
				keys: ['PLZ', 'value'],
				states: {
					hover: {
						enabled: false,
						borderColor: '#BADA55',
						brightness: 0
					}
				}
			}, 
			{
				visible: false,
				showInLegend: false,
    			colorAxis: false
			}	
		]
	};
}());
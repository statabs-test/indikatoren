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
					return Highcharts.numberFormat((this.value),3); 
				},
				style: {
					whiteSpace: "nowrap"
				}
			}
		},		
        data: {
		    seriesMapping: [
		      {
		      	x: 2, y: 5
		      }	      
		    ]
		},
		legend: {
			align: 'right'
		},
		series: [
			{
				name: "Gemeinde", 
				animation: true,
				mapData: geojson_GemeindenBSBL_EPSG_2056,
				borderColor: "#fbfbfb",		
				joinBy: ['GD_NR', 'g1g13.GMDNR'],
				keys: ['GD_NAME', 'value'],
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
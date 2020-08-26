/*  global rheinData
	global Highcharts
	global geojson_wohnviertel
*/
(function(){
    return {
		"colorAxis": {
			"minColor": "#f4ebf3",
			"maxColor": "#5b2659",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),0); 
				}
			}
		},		
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 1
		      },
		      {
		      	//2nd series: use x values from column 2
		      	x: 2
		      }		      
		    ]
		},
		legend: {
			align: 'right'
		},
		"series": [
			{
				"name": "Wohnviertel", 
				"animation": true,
				"mapData": geojson_PLZ_EPSG_2056,
				"borderColor": "#fbfbfb",		
				"joinBy": ['PLZ', 'PLZ'],
				"keys": ['PLZ', 'value'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
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
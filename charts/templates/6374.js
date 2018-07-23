/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
    return {
		"colorAxis": {
			"minColor": "#E7CEE2",
			"maxColor": "#2E1435",
			min: 0,
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value/1000),0); 
				}
			}
		},
		"legend": {
			"title": {
				"text": "Median pro Veranlagung <br/> in 1 000 Fr.",
					style: {'fontWeight':' bold'} 
			}
		},
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 2
		      }		      
		    ]
        },
		"series": [
			{
				"name": "Wohnviertel", 
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056,
				"borderColor": "#fbfbfb",		
				"joinBy": ['TXT', 'Wohnviertel Id'],
				"keys": ['Wohnviertel Id', 'value'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}
			}	
		], 
	};
}());
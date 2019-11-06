/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
    return {
		"colorAxis": {
			min: 0,
			max: 100000,
			tickInterval: 25000,
			"minColor": "#E7CEE2",
			"maxColor": "#2E1435",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),0); 
				}
			}
		},
		"legend": {
			"title": {
				"text": "Bevölkerungsdichte",
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
				"name": "Gemeinde", 
				"animation": true,
				"mapData": geojson_Trinational_Gemeinden,
				"borderColor": "#fbfbfb",		
				"joinBy": ['CODGEO', 'Codegeo'],
				"keys": ['Codegeo', 'BevDichte'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}
			}	
		], 
	chart: {
			events: {
	            load: function (e) {
	            	this.credits.element.onclick = function() {};
	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
	                fn.addLegendRectangle(chart, 260, 280, 220, 80, '#fbfbfb');
	            }
			}
		}
	};
}());
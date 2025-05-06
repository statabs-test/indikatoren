/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
    return {
		"colorAxis": {
            stops: [
                [0, "#662673"],
                [0.4999999999, "#E7CEE2"],
                [0.5, "#ffffff"],
                [0.5000000001, "#D3E2E4"],
                [1, "#246370"]
                  ],
            min: -2,
            max: 2,
            "labels": {
                "formatter": function () {
                    return Highcharts.numberFormat((this.value), 0);
                }
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
					},
				},
				tooltip: {
					pointFormatter: function () {
						//console.log(this);
						return this.properties.LIBGEO + ': <b>' + Highcharts.numberFormat((this.value), 0) + '</b><br/>';
					}
				},
			},
			
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
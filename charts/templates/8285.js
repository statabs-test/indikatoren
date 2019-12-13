/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
   return {
		"legend": {
    		useHTML: false,
			"title": {
			"text": "Anteil 5-17-jährige",
				style: {'fontWeight':' bold'} 
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -60,
			"y": -20,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
         colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
               	from: 0.0,
                to:33.9,
                color: '#D3E2E4',
                name:  "<span style='color: rgba(0,0,0,0)'>00,0 </span> < 34,0"
            }, {
                from: 34.0,
                to: 63.9,
                color: '#A8C3CA',
                name: "34,0 − 63,9"
            }, {
                from: 64.0,
                to: 79.9,
                 color: '#689199',
                 name: "64,0 − 79,9"
            },{
                from: 80.0,
                to: 89.9,
                 color: '#246370',
                 name: "80,0 − 89,9"
            },{
                from: 90,
                color: '#083038',
                name:  "<span style='color: rgba(0,0,0,0)'>00,0 </span> ≥ 90,0"
            }], 
		},
        "data": {
		    "seriesMapping": [
		      {
		      	x: 0, y: 3
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
	chart: {
			events: {
	            load: function (e) {
	            	this.credits.element.onclick = function() {};
	                var chart = this;
	                var fn = this.options.customFunctions;
	                //define new Highcharts template "mappie"
	                fn.addLegendRectangle(chart, 260, 220, 160, 120, '#fbfbfb');
	            }
			}
		}		
	};
}());



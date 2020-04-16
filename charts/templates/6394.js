/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
   return {
		"legend": {
    		useHTML: false,
			"title": {
			"text": "Median pro Veranlagung <br/> in Fr.",
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
				from: 0,
				to: 40999,
				color: '#D3E2E4',
				name: "<span style='color: rgba(0,0,0,0)'>000,0</span> < 41,0"
			}, {
				from: 41000,
				to: 46999,
				color: '#A8C3CA',
				name: "<span style='color: rgba(0,0,0,0)'>0</span>41,0 − 46,9"
			}, {
				from: 47000,
				to: 52999,
				color: '#689199',
				name: "<span style='color: rgba(0,0,0,0)'>0</span>47,0 − 52,9"
			}, {
				from: 53000,
				to: 58999,
				color: '#246370',
				name: "<span style='color: rgba(0,0,0,0)'>0</span>53,0 − 58,9"
			}, {
				from: 59000,
				color: '#083038',
				name: "<span style='color: rgba(0,0,0,0)'>000,0</span> ≥ 59,0"
			}],
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



/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
   return {
		"legend": {
    		useHTML: true,
			"title": {
			"text": "Mittelwert pro Veranlagung <br/> in Fr.",
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
                to:99999,
                color: '#E7CEE2',
                name:  "<span style='color: rgba(0,0,0,0)'>000 000</span> < 100 000"
            }, {
                from: 100000,
                to: 299999,
                color: '#B375AB',
                name: "100 000 − 299 999"
            }, {
                from: 300000,
                to: 499999,
                 color: '#923F8D',
                 name: "300 000 − 499 999"
            },{
                from: 500000,
                to:699999,
                 color: '#662673',
                 name: "500 000 − 699 999"
            },{
                from: 700000,
                color: '#2E1435',
                name:  "<span style='color: rgba(0,0,0,0)'>000 000</span> ≥ 700 000"
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
	};
}());



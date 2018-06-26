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
                to:49999,
                color: '#D3E2E4',
                name:  "<span style='color: rgba(0,0,0,0)'>00 000</span> < 50 000"
            }, {
                from: 50000,
                to: 54999,
                color: '#A8C3CA',
                name: "50 000 − 54 000"
            }, {
                from: 55000,
                to: 69999,
                 color: '#689199',
                 name: "55 000 − 69 999"
            },{
                from: 70000,
                to: 94999,
                 color: '#246370',
                 name: "70 000 − 94 999"
            },{
                from: 95000,
                color: '#083038',
                name:  "<span style='color: rgba(0,0,0,0)'>00 000</span> ≥ 95 000"
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



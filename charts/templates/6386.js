/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
   return {
		"legend": {
    		useHTML: true,
			"title": {
			"text": "Mittelwert pro Veranlagung <br> in Fr.",
				style: {'fontWeight':' normal'}
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": 0,
			"y": -30,
			itemMarginBottom: 2, 
			symbolRadius: 0,
			itemStyle: {
				fontWeight: 'normal'
				}
		},
         colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
                to:13.00,
                color: '#D7E8D2',
                name:  "&nbsp;<&nbsp;13,0"
            }, {
                from: 13.0,
                to: 14.9,
                color: '#73B97C',
                name: "13,0 − 14,9"
            }, {
                from: 15.0,
                to: 16.9,
                 color: '#68AB2B',
                 name: "15,0 − 16,9"
            },{
                from: 17.0,
                to: 19.9,
                 color: '#007A2F',
                 name: "17,0 − 19,9"
            },{
                from: 20.0,
                color: '#0A3B19',
                name:  "&nbsp;≥&nbsp;20.0"
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

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
                color: '#D7E8D2',
                name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<&nbsp;100 000"
            }, {
                from: 100000,
                to: 299999,
                color: '#73B97C',
                name: "100 000 − 299 999"
            }, {
                from: 300000,
                to: 499999,
                 color: '#68AB2B',
                 name: "300 000 − 499 999"
            },{
                from: 500000,
                to:699999,
                 color: '#007A2F',
                 name: "500 000 − 699 999"
            },{
                from: 700000,
                color: '#0A3B19',
                name:  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;≥&nbsp;700 000"
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

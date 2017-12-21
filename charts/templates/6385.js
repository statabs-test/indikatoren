/*
global Highcharts
global geojson_wohnviertelEPSG2056
*/
(function(){
   return {
		"legend": {
    		useHTML: true,
			"title": {
			"text": "Seit mindestens 10 Jahren an der gleichen <br> Adresse lebende Personen in %",
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": 30,
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
                to:26.99,
                color: '#D7E8D2',
                name:  "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<\u00a027,0"
            }, {
                from: 27.0,
                to: 29.9,
                color: '#73B97C',
                name: "27,0 − 29,9"
            }, {
                from: 30.0,
                to: 32.9,
                 color: '#68AB2B',
                 name: "30,0 − 32,9"
            },{
                from: 33.0,
                to: 35.9,
                 color: '#007A2F',
                 name: "33,0 − 35,9"
            },{
                from: 36.0,
                color: '#0A3B19',
                name:  "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0≥\u00a036,0" 
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

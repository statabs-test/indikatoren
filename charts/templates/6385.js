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
                color: '#ECE1D0',
                name:  "<span style='color: rgba(0,0,0,0)'>27,0</span> < 27,0"
            }, {
                from: 27.0,
                to: 29.9,
                color: '#C4AB91',
                name: "27,0 − 29,9"
            }, {
                from: 30.0,
                to: 32.9,
                 color: '#9E7C59',
                 name: "30,0 − 32,9"
            },{
                from: 33.0,
                to: 35.9,
                 color: '#67401E',
                 name: "33,0 − 35,9"
            },{
                from: 36.0,
                color: '#3A2012',
                name:  "<span style='color: rgba(0,0,0,0)'>36,0</span> ≥ 36,0" 
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

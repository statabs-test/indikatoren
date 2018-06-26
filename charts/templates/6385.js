/*
global Highcharts
global geojson_wohnviertelEPSG2056
*/
(function(){
   return {
		"legend": {
    		useHTML: true,
			"title": {
			"text": "Seit mindestens 10 Jahren an der <br> gleichen Adresse lebende Personen <br> in %",
			style: {'fontWeight':' bold'} 
			},
			"layout": "vertical",
			//"verticalAlign": "middle",
			"align": "right",
			"x": -5,
			"y": -10,
			itemMarginBottom: 2,
			symbolRadius: 0,
		},
         colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
                to:29.99,
                color: '#ECE1D0',
                name:  "<span style='color: rgba(0,0,0,0)'>30,0</span> < 30,0"
            }, {
                from: 30.0,
                to: 31.9999,
                color: '#C4AB91',
                name: "30,0 − 31,9"
            }, {
                from: 32.0,
                to: 34.9,
                 color: '#9E7C59',
                 name: "32,0 − 34,9"
            },{
                from: 35.0,
                to: 39.9,
                 color: '#67401E',
                 name: "35,0 − 39,9"
            },{
                from: 40.0,
                color: '#3A2012',
                name:  "<span style='color: rgba(0,0,0,0)'>40,0</span> ≥ 40,0" 
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

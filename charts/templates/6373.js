/* 
global Highcharts
global geojson_wohnviertelEPSG2056 
*/
(function(){
    return {
		"colorAxis": {
			"minColor": "#f4ebf3",
			"maxColor": "#5b2659",
			"labels": {
				"formatter": function () {
					return Highcharts.numberFormat((this.value),0); 
				}
			}
		},
		"legend": {
			"title": {
				"text": "Seit mindestens 10 Jahren an der gleichen <br> Adresse lebende Personen in %"
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
					}
				}
			}	
		], 
        exporting: {
            buttons: {
                customButton: {
                    text: 'Kategorische Legende',
                      onclick: function () {
                        onclick=window.open("https://stata-test-richtplan-larafaelivrin.c9users.io//chart-details.html?id=6385&indikatorensetView=true&suppressNumberInTitle=true");
                    }
                    /*onclick: function () {
                        alert('You pressed the button!');
                    }*/
                }
            }
        }
	};
}());
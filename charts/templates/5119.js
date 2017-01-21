/*  global rheinData
	global Highcharts
	global geojson_wohnviertel
*/
(function(){
    return {
	"tooltip": {
		"pointFormatter": function(){
			if (this.series.data[this.x].name === undefined) {
				return '<span style="color:{series.color}"></span>';
			}
			else {
				return '<span style="color:{series.color}">' + this.series.data[this.x].name + '</span>: <b>'+Highcharts.numberFormat((this.value*100),2)+'%</b><br/>Rang <b>' + parseInt(this.x + 1, 10) + '</b>';
			}
		}
	},
	"colorAxis": {
		"minColor": "#eff6e9",
		"maxColor": "#4b7b1f",
		"labels": {
			"formatter": function () {
				return Highcharts.numberFormat((this.value*100),0)+'%'; 
			}
		}
	},			
	"series": [
		{
			"name": "Wohnviertel", 
			"animation": true,
			"mapData": geojson_wohnviertel,
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
	/* series with fixed data that should be added to the series object after merging with csv data */
	"afterSeries": [
		{
			"name": "Rhein",
			"animation": true,
			"data": rheinData, 
			"color": "#008AC3",    
			"borderColor": "#fbfbfb"
		}
	]
	}
}());
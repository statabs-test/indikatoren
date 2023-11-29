(function () {
	return {
		"tooltip": {
		    "formatter": function(args){
				if (! this.point["lat"]) {
				    //Rhein
					return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
				}
		        else {
		            return '<span style="font-size: 0.85em;"> ' +  this.point.name + '</span><br/>' + 
								'<b>'+ this.point.z +'</b> Plätze';
		        }
		    }
		},
		"data": {
      "seriesMapping": [
        //default tsv: first column = GeoID, second = choroplethe, 3rd = bubble
        {
          lat: 0,
          lon: 1,
          name: 2,
					z: 3
        },
      ]
    },
		legend: {
			enabled: false
		},
		beforeSeries: [
			{
				"name": "Wohnviertel",
				"animation": true,
				"mapData": geojson_wohnviertelEPSG2056,
				"borderColor": "#fbfbfb",
				"joinBy": ['TXT', 'Wohnviertel_Id'],
				"keys": ['Wohnviertel_Id', 'value'],
				"states": {
					"hover": {
						"enabled": false,
					}
				},
				nullColor: '#cccccc',
		}
		],

		"series": [
			{
        type: 'mapbubble',
        id: 'points',
        name: 'Pflegeheime',
				minSize: 7,
        maxSize: '6%',
				marker: {
					//radius: this.point.value
					fillColor: '#a1c436',
					fillOpacity: 0.6,
					lineColor: '#ffffff'
				},
				dataLabels: {
					enabled: false
				},
			}
		]
	};
}());
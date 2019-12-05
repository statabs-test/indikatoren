/* 
global Highcharts
global geojson_UA_Gemeinden_100
global rheinData
*/
(function(){
    return {
        "tooltip": {
            "formatter": function(args){
				var this_point_index = this.series.data.indexOf(this.point);
				return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
					this.point.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.point.value),0) + ' Einwohner pro km<sup>2</sup></b></b>';
			},
			useHTML: true,
			enabled: false
        },   	
		"legend": {
			"title": {
				/*"text": "in Einwohner pro km<sup>2</sup>"*/
			},
			useHTML: true,
			align: 'left',
			y: -350,
			symbolRadius: 0,
		},
		colorAxis: {
            dataClassColor: 'category',
                   dataClasses: [{
                from: 1,
                to:1,
                color: '#FFBB58',
                name:  "Kernstadt"
            }, {
                from: 2,
                to: 2,
                color: '#FF8028',
                name: "Übrige Agglomerationsgemeinden Schweiz"
            }, {
                from: 3,
                to: 3,
                 color: '#DC440E',
                 name: "Agglomerationsgemeinden Deutschland"
            },{
                from: 4,
                to: 4,
                 color: '#B00000',
                 name: "Agglomerationsgemeinden Frankreich"
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
				"name": "Bevölkerungsdichte", 
				"animation": true,
				"mapData": geojson_gemeinden,
				"borderColor": "#fbfbfb",		
				"keys": ['gemeindecode', 'value'],
				"joinBy": ['CODGEO', 'gemeindecode'],
				"states": {
					"hover": {
						"enabled": false,
						"borderColor": '#BADA55',
						"brightness": 0
					}
				}
			}, 
			{
				visible: false,
				showInLegend: false,
    			colorAxis: false
			}
		]
	};
}());
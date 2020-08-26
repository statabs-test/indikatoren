//Simple PLZ Choropleth Map without ranks and with simple tooltip

/* 
    global Highcharts
    global rheinDataEPSG2056
    global scalebarDataEPSG2056
    global geojson_wohnviertelEPSG2056
*/

(function(){
    return {
        "chart": {		
            events:{
                load: function() {                
                    this.credits.element.onclick = function() {};
                }
            },
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 485,
            "height": 415,
            "spacingBottom": 45,
            "style": {
                "fontFamily": "Arial"
            },
            "type": "map",
    		"inverted": false
        },
        "title": {
            "style": {
                "fontSize": "14px",
                "fontWeight": "bold",
                "fontFamily": "Arial",
                "color": "#000000"
            },        
            "align": "left"
        },
        "subtitle": {
            "style": {
                "fontSize": "12px",
                "fontWeight": "normal",
                "fontFamily": "Arial",
                "color": "#000000"
            },
            "text": "",
            "align": "left"
        },
        "credits": {
            "enabled": true,
            "style": {
                "color": "#000000",
                "fontSize": "10px",
                "cursor": "default"
            },
            "position": {
                "align": "left",
                "verticalAlign": "bottom",
                "x": 10
            }
        },
        "colorAxis": {
    		"min": 0,
    		"gridLineColor": "#fbfbfb",	
            "gridLineWidth": 1,
            "labels": {	
    		    "style": {"color": "black", "cursor": "default", "fontSize": "11px", "textOverflow": "none"}
    		},
    		"marker": {
                    "color": "black"
            }
    	},    
        "mapNavigation": {
            "enabled": true,
            "buttonOptions": {
                "align": "left",
                "verticalAlign": 'bottom'
            }
        },
        "legend": {
			useHTML: false,
    		"enabled": true, 
            "align": "right",
            "floating": true,
           itemStyle: {
				fontWeight: 'normal'
			},
            "title": {
                "style": {
                    "fontWeight": "normal", 
                    "fontSize": "12px"
                }
            }
    	},
    	/* series with fixed data that should be added to the series object before merging with csv data */
    	beforeSeries: [
            {      
                //Outline PLZ if all choropleth shapes have been deselected through classed colorAxis, see https://forum.highcharts.com/highmaps-usage-f14/outline-shapes-hidden-by-click-onto-classed-coloraxis-t40837/
				name: "PLZOutline",
              	enableMouseTracking: false,
                color: '#ededed',
                borderWidth: 1,
                borderColor: '#fbfbfb',
				"animation": true,
				"mapData": geojson_PLZ_EPSG_2056,
				"joinBy": ['PLZ', 'PLZ'],
				"keys": ['PLZ', 'value'],
                "states": {
                  "hover": {
                    "enabled": false,
                    "borderColor": "#BADA55",
                    "brightness": 0
                  }
                },
                "data": [
                  [4051,-999],
                  [4052,-999],
                  [4053,-999],
                  [4054,-999],
                  [4055,-999],
                  [4056,-999],
                  [4057,-999],
                  [4058,-999],
                  [4059,-999],
                  [4125,-999],
                  [4126,-999]
                ],    	            
			}
	    ],
		/* series with fixed data that should be added to the series object after merging with csv data */
		"afterSeries": [
			{
				"name": "Rhein",
				"animation": true,
				"data": rheinDataEPSG2056, 
				"color": "#008AC3",    
				"borderColor": "#fbfbfb"
			},
			{
				name: 'Massstab', 
				animation: true,
				type: 'mapline',
				data: scalebarDataEPSG2056,
				color: 'black', 
				tooltip: {
					pointFormatter: function(){
						return '<br/>';
					}
				}, 
				dataLabels: {
					enabled: true, 
					formatter: function(){
						return '1 km';
					}, 
					style: {fontSize: "12px", fontWeight: "normal", color: 'black'},
					y: -10 
				}
    		}
		],
        "tooltip": {
            formatter: function(args){
        		if (! this.point["PLZ"]) {
        		    //Rhein
        			return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
        		}
                else {
                    //Wohnviertel
                    return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                        this.point.properties.LIBGEO +': <b>' + Highcharts.numberFormat((this.point.value),0) + '</b><br/>';
                }
            }
        },
        
        customFunctions: {
            addLegendRectangle: function(chart, x, y, width, height, fill, cssClass){
            	return chart.renderer.rect(x, y, width, height).attr({
    	            'stroke-width':0,
    	            fill: fill,
    	            zIndex: 6,
    	            class: cssClass
            	}).add();
            },
        }

    };
    }()
);

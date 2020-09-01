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
                "style": 
                {
                    color: "black", 
                    cursor: "default", 
                    fontSize: "11px", 
                    textOverflow: "none"
                }
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
				name: "GemeindenOutline",
              	enableMouseTracking: false,
                color: '#ededed',
                borderWidth: 1,
                borderColor: '#fbfbfb',
				"animation": true,
				"mapData": geojson_GemeindenBSBL_EPSG_2056,
				"joinBy": ['GD_NR', 'g1g13.GMDNR'],
				"keys": ['GD_NAME', 'value'],
                "states": {
                  "hover": {
                    "enabled": false,
                    "borderColor": "#BADA55",
                    "brightness": 0
                  }
                },
                "data": [
                    [2701, -999],
                    [2702, -999],
                    [2703, -999],
                    [2761, -999],
                    [2762, -999],
                    [2763, -999],
                    [2764, -999],
                    [2765, -999],
                    [2766, -999],
                    [2767, -999],
                    [2768, -999],
                    [2769, -999],
                    [2770, -999],
                    [2771, -999],
                    [2772, -999],
                    [2773, -999],
                    [2774, -999],
                    [2775, -999],
                    [2781, -999],
                    [2782, -999],
                    [2783, -999],
                    [2784, -999],
                    [2785, -999],
                    [2786, -999],
                    [2787, -999],
                    [2788, -999],
                    [2789, -999],
                    [2790, -999],
                    [2791, -999],
                    [2792, -999],
                    [2793, -999],
                    [2821, -999],
                    [2822, -999],
                    [2823, -999],
                    [2824, -999],
                    [2825, -999],
                    [2826, -999],
                    [2827, -999],
                    [2828, -999],
                    [2829, -999],
                    [2830, -999],
                    [2831, -999],
                    [2832, -999],
                    [2833, -999],
                    [2834, -999],
                    [2841, -999],
                    [2842, -999],
                    [2843, -999],
                    [2844, -999],
                    [2845, -999],
                    [2846, -999],
                    [2847, -999],
                    [2848, -999],
                    [2849, -999],
                    [2850, -999],
                    [2851, -999],
                    [2852, -999],
                    [2853, -999],
                    [2854, -999],
                    [2855, -999],
                    [2856, -999],
                    [2857, -999],
                    [2858, -999],
                    [2859, -999],
                    [2860, -999],
                    [2861, -999],
                    [2862, -999],
                    [2863, -999],
                    [2864, -999],
                    [2865, -999],
                    [2866, -999],
                    [2867, -999],
                    [2868, -999],
                    [2869, -999],
                    [2881, -999],
                    [2882, -999],
                    [2883, -999],
                    [2884, -999],
                    [2885, -999],
                    [2886, -999],
                    [2887, -999],
                    [2888, -999],
                    [2889, -999],
                    [2890, -999],
                    [2891, -999],
                    [2892, -999],
                    [2893, -999],
                    [2894, -999],
                    [2895, -999]
                ]    	            
			}
	    ],
		/* series with fixed data that should be added to the series object after merging with csv data */
		/*"afterSeries": [
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
		],*/
        "tooltip": {
            formatter: function(args){
        		if (! this.point["GD_NR"]) {
        		    //Rhein
        			return '<span style="color:' + this.color + ';">\u25CF </span><span>' + this.series.name + '</span>';
        		}
                else {
                    //Gemeinde
                    return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                    this.point.properties.GD_NAME +': <b>' + Highcharts.numberFormat((this.point.value),2) + '</b><br/>';
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

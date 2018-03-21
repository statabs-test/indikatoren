(function(){ 
    return {
        "chart": {		
            "events":{
                "load": function() {
                    this.credits.element.onclick = function() {};
                    //draw spider backgrounds
                    var top = -Math.PI/2;
                    var startPurple = top;
                    var endPurple = top + 2*Math.PI/18*8;
                    var startGreen = endPurple;
                    var endGreen = endPurple + 2*Math.PI/18*5;
                    var startBlue = endGreen;
                    var endBlue = top;
                    var centerX = 242.5;
                    var centerY = 212.5;
                    var radius = 136;
                    this.renderer.arc(centerX, centerY, radius, 0, startPurple, endPurple).attr({
                        fill: '#923F8D',
                        stroke: '#923F8D',
                        'stroke-width': 0,
                        'fill-opacity': 0.5
                    }).add();
                    this.renderer.arc(centerX, centerY, radius, 0, startGreen, endGreen).attr({
                        fill: '#68AB2B',
                        stroke: '#68AB2B',
                        'stroke-width': 0,
                        'fill-opacity': 0.5
                    }).add();
                    this.renderer.arc(centerX, centerY, radius, 0, startBlue, endBlue).attr({
                        fill: '#689199',
                        stroke: '#689199',
                        'stroke-width': 0, 
                        'fill-opacity': 0.5
                    }).add();
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
            "zoomType": "xy",
            type: "area",
            polar: true,
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
        "plotOptions": {
            area: {
                lineColor: 'white',
            },
            "series": {
                lineWidth: 1,
                color: 'grey',
                marker: {
                    enabled: false
                },
                "dataLabels": {
                    "x": 5,
                    "align": "left",
                    "verticalAlign": "middle",
                    "enabled": false,
                    "style": {
                        "fontSize": "10px"
                    },
                }
            }
        },
        "yAxis": {
            //gridLineColor: '#white', 
            //gridLineWidth: 0.5, 
            lineColor: '#B9CFD7',
            "title": {
                "style": {
                    "color": "#000000",
                    "fontSize": null
                },
                "text": null
            },
            "labels": {
                y: 10,
                overflow: 'justified',
                "style": {
                    "color": "white", 
                    textOverflow: 'none'
                }
            }, 
            min: 1, 
            max: 21, 
            tickInterval: 7, 
            showFirstLabel: false,
            showLastLabel: true
        },
        "xAxis": {
            //gridLineColor: '#white', 
            //gridLineWidth: 0.5, 
            "title": {
                "style": {
                    "color": "#000000"
                }
            },
            "labels": {
                "style": {
                    "color": "#000000",
                    "fontSize": "10px"
                }
            },
            "tickLength": 0,
            tickmarkPlacement: 'on',
            lineWidth: 0.5,
            
            //"tickInterval": 1,
            //"type": "category",
            //"uniqueNames": true        
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
        "legend": {
    		"enabled": false,
            "symbolRadius": 0
    	},
        "tooltip": {
            shared: true
        }
    };
}());

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199
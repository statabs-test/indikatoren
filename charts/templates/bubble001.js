(function(){ 
    return {
        "chart": {		
            "events":{
                "load": function() {
                  this.credits.element.onclick = function() {};
                  //for top-left legends with no x defined: move legend to x position of first yAxis
                  if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
                    this.update(
                      {
                        legend: {
                          x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                        }
                      }
                    );
                  }              
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
            "type": "bubble"
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
        "yAxis": {
            gridLineColor: '#B9CFD7', 
            gridLineWidth: 0.5, 
            lineColor: '#B9CFD7',
            "title": {
                "style": {
                    "color": "#000000",
                    "fontSize": null
                },
                "text": null
            },
            "labels": {
                "style": {
                    "color": "#000000"
                }
            }, 
            "min": 0
        },
        "xAxis": {
            lineColor: '#B9CFD7',
            lineWidth: 0.5,
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
    	}
    };
}());

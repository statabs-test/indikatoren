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
        "spacingBottom": 30,
        "style": {
			"fontFamily": "Arial"
        },
        "zoomType": "xy",
        "type": "column"
    },    
    "title": {
        "style": {
			"fontSize": "14px",
			"fontWeight": "bold",
			"color": "#000000"
        },        
        "align": "left"
    },
    "subtitle": {
        "style": {
			"fontSize": "12px",
			"color": "#000000"                      
        },
        "align": "left"
    },
    "navigation": {
        "menuItemStyle": {
            "fontFamily": Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
            "padding": '2px 10px'
        }
    },
    "plotOptions": {
        "series": {
            "dataLabels": {
                "style": {
                    "fontSize": "10px"
                }
            },
            "stacking": "percent"
        }
    },
    "yAxis": {
        "tickInterval":10,
        "title": {
            "style": {
            "color": "#000000",
            "fontSize": null
            },
            "text": null
        },
        "labels": {
            "format": "{value}%",
            "style": {
            "color": "#000000"
            }
        }
    },
    "xAxis": {    
        "type": "category",
        "uniqueNames": true,
        "tickColor": "#FFFFFF",
        "title": {
            "style": {
				"color": "#000000"
            }
        },
        "labels": {
            "rotation": 0,
            "style": {
                "color": "#000000",
                "width": 1, 
                "textOverflow": "none"
            },
            "formatter": function() {
            	return this.value.replace(" ", "<br/>");
            }
        }
    },
    "tooltip": {
        "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        "shared": false
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
        "layout": "vertical",
        "verticalAlign": "middle",
        "itemMarginBottom": 5,     
        "align": "right",
        "useHTML": false,
        "itemStyle": {
            "fontWeight": "normal"
        },
        "symbolRadius": 0,
        "labelFormatter": function () {
            return this.name.replace('/ ', '/<br/>');
        }
    }    
	}
}());
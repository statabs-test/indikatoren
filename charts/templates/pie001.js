(function(){
    return {
	    "chart": {		
        "events":{
              load: function() {
                  this.credits.element.onclick = function() {}
              }
          },
    		"borderColor": "#fbfbfb",
    		"backgroundColor": "#fbfbfb",
    		"zoomType": "xy",
    		"width": 485,
        "height": 415,
        "spacingBottom": 45,    
    		"style": {
    		  "fontFamily": "Arial"
    		},
    		"type": "pie"    
    	},
    	"plotOptions": {
    		"pie": {
    			"allowPointSelect": true,
    			"cursor": true,
    			"showInLegend": true,
    			"dataLabels": {
    				"enabled": false
    			}
    		}
    	},    	
      "title": {
        "style": {
          "fontSize": '14px',
          "fontWeight": "bold",
          "color": "#000000"
        },
        "align": "left"
      },
      "subtitle": {
        "style": {
          "fontSize": '12px',
          "fontWeight": "normal",
          "fontFamily": "Arial",
          "color": "#000000"
        },
        "text": "",
        "align": "left"
      },
      "tooltip": {
        "shared": false
      },
      "xAxis": {
        "labels": {
          "style": {
            "color": "#000000"
          }
        },
        "type": "category"
      },
      "credits": {
        "href": "http://www.statistik.bs.ch",
        "enabled": true,
        "style": {
          "color": "#000000",
          "fontSize": '10px',
          "cursor": "default"
        },
        "position": {
          "align": "left",
          "verticalAlign": "bottom",
          "x": 10
        }
      },
      "legend": {
        "enabled": true,
        "layout": "vertical",
        "verticalAlign": "middle",
        "align": "right",
        "symbolRadius": 0
      }
	}
}());
(function(){
    return {
  "plotOptions": {
    "column": {
        "colorByPoint": true
    }
  },
 "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -90 
    } 
  },
  "yAxis": {
	"max": 100,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },

  /*"series": [
           function() {
           var col;
				if(this.series.data[0]=="BS"){
		   col="#0066FF";
				}else {
    		col="#0066EE";
			}
            }, 
  {"color": "col", "visible": true}, 
  ],*/

    "colors": [
    "#69929B",
    "#B00000",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",        
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B", 
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 40
  }
}
}());
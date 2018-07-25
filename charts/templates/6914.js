(function(){
    return {
  "plotOptions": {
  	   series: {
          //pointWidth: 5, 
        },
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
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  
  series: [{
    name: 'Kanton'
  }],

 
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
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#ECE1D0",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",        
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A", 
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
    "#7F5F1A",
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	//"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 40
  }
}
}());
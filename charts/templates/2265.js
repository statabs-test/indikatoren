(function(){
    return {

  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": 0, 
    "max": 200000,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
    {"color": "#b00000", "index": 1}, /* rot*/
    {"color": "#4f81bd", "index": 2}, /* blau*/
    {"color": "#000000", "index": 3}  /* schwarz*/
  ],
  "legend": {
    "enabled": false,
    "x": 20,
    "y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }, 
    },
     "series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last  = this.series.data[this.series.data.length - 1];
            if (this.point.category === last.category  && this.point.y === last.y) {
              return this.series.name;
            }
            return "";
          }
      }
    }
  }
}
}());


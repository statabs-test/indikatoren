(function(){
    return {
  "xAxis": {
    "tickInterval": 3
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
  	
    {"color": "#ff8028",
      "marker": {
        "enabled": true
      },
        "dataLabels": {
          useHTML: false,
          style: {"fontSize": "10px", "fontWeight": "normal"}, 
          "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var first = this.series.data[0];
            var last  = this.series.data[this.series.data.length - 1];
            if (this.point.y === first.y || this.point.y === last.y ) {
              return this.point.x + ":<br/><span style='color: " + this.point.color + "'> " + Highcharts.numberFormat(this.point.y, 1, ",", " ") + "</span>";
            }
            return "";
          }
      }
    }, /* orange */
	{"color": "#4f81bd",
      "marker": {
        "enabled": true
      },
        "dataLabels": {          
          useHTML: false,
          style: {"fontSize": "10px", "fontWeight": "normal"}, 
          "enabled": true,
          verticalAlign: 'top',
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var first = this.series.data[0];
            var last  = this.series.data[this.series.data.length - 1];
            if (this.point.y === first.y || this.point.y === last.y ) {
              return "<span style='color: " + this.point.color + "'> " + Highcharts.numberFormat(this.point.y, 1, ",", " ") + "</span>";
            }
            return "";
          }
      }
    }, /* blau */
  ],
  "legend": {
    "enabled": true,
    "x": 25,
    "itemWidth": 1000,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 
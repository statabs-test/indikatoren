(function(){
    return {
    "yAxis": {
	  "min": 0,
    "labels": {
      "format": "{value:,.0f} m²",
    }
  },
  "xAxis": {
    "tickInterval": 5,
    "endOnTick": true
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },     
      "color": "#b00000"
    }
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} m²</b><br/>',
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
          y: -10,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last = this.series.data[this.series.data.length - 1];
            var first = this.series.data[0];
            if (this.point.category === first.category && this.point.y === first.y || this.point.category === last.category && this.point.y === last.y ) {
              return this.point.y +" m²";
            }
            return "";
          }
      }
    }
  }
}
}());
 

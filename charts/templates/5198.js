(function(){
    return {
   title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
  "xAxis": {
    "type": "category",
    "labels": {
     // "rotation": -90 
    } 
  },
  "yAxis": {
	//"max": 100,
	labels:{
		style: { 
			textOverflow: 'none' // prevents ellipsis
		}
	}
  },
  "series": [
  {"color": "#83522E", "visible": true}, /* dunkelbraun*/
  //{"color": "#007A2F", "visible": true} /* ... */
  ],
  "legend": {
    "enabled": false,
  },
   /*tooltip: {
    "headerFormat": '{point.x}:<br/>',
    "pointFormat": '<b>{point.y}</b> m<sup>2</sup> pro Einwohner<br/>',
    //"shared": false,
    useHTML: true
  },*/
        "tooltip": {
            "formatter": function(args){
                var this_point_index = this.series.data.indexOf(this.point);
                var other_series_index = this.series.index == 0 ? 1 : 0; // assuming 2 series
                var other_series = args.chart.series[other_series_index];
                var other_point = other_series.data[this_point_index];
                return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                    this.point.name +': <b>' + Highcharts.numberFormat((this.y*100),1) + '%</b><br/>' + 
                    'Rang <b>' + other_point.y + '</b>';
            },        
            shared: true
        },
  "chart": { 
  	marginRight: 18,
    "type": "scatter",
    "inverted": true,
    "spacingBottom": 40
  }
};
}());
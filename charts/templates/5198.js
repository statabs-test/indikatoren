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
   tooltip: {
    "headerFormat": '{point.x}:<br/>',
    "pointFormat": '<b>{point.y}</b> m<sup>2</sup> pro Einwohner<br/>',
    //"shared": false,
    useHTML: true
  },
  "chart": { 
  	marginRight: 18,
    "type": "scatter",
    "inverted": true,
    "spacingBottom": 40
  }
};
}());
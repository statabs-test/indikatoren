(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
			itemWidth: 10, 

        }
   },
  "xAxis": {
    "type": "linear",
    tickInterval: 1,
    labels: {
      rotation: 0,
      step: 2,
    } 
  },
  "yAxis": {
	//"max": 100,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#CD9C00", "visible": true} /* hellbraun*/
 ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	//"y": 25,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
    tooltip: {
    "shared": false, 
    headerFormat: '<span style="font-size: 10px">Alter der Mutter: {point.key}</span><br/>',
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "chart": { 
    "type": "column",
    "inverted": false,
    //"spacingTop": 100
  }
}
}());
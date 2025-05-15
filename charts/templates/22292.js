(function(){
    return {
   title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
   plotOptions: {
        series: {
          pointPadding: 0,
          borderWidth: 0,
        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -45 
    } 
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
 "series": [
  {"color": "#FFDA80 "}, /* gelb */
	{"color": "#A0BEC8"}/* blau  */
	  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  itemDistance: 3,
	  symbolPadding: 3,
	  padding: 0,
    "itemStyle": {
      "fontWeight": "normal"
    },
    labelFormatter: function () {
      return this.name.split(' mit')[0];
    }
  },
   tooltip: {
    useHTML: true,
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    /*"footerFormat": 'Total: <b>{point.total:,.0f}</b>',*/
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 50
  }
}
}());
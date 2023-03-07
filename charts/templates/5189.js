(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
			itemWidth: 10, 

        }
   },
/*  "xAxis": {
    "type": "linear",
    tickInterval: 1,
    labels: {
      rotation: -45,
      step: 2,
    } 
  },*/
  xAxis: {
    type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
    tickPositioner: function () {
      var maxlabels = 10,
        ext = this.getExtremes(),
        i = Math.round(ext.max),
        interval = Math.round((i - ext.min)/maxlabels),
        pos = [i];
      while (i >= ext.min) pos.unshift(i = i - interval);
      return pos;
    },
    labels: {
      rotation: -45,
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
	"y": 25,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },
  "chart": { 
    "type": "column",
    "inverted": false,
    //"spacingTop": 100
  }
}
}());
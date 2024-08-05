(function(){
  return {
    "xAxis": {
      type: "category", /* ausprobieren, ob "category" oder nicht - hat Auswirkung auf den Abstand der letzten Jahreszahl zu rechten Rand */
      tickPositioner: function () {
        var maxlabels = 10,
          ext = this.getExtremes(),
          i = Math.round(ext.max),
          interval = Math.round((i - ext.min)/maxlabels),
          pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;
      }
    },
"yAxis": {
"labels": {
  "format": "{value:,.0f}"
}
},	
"tooltip": {
  "shared": false, 
"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}</b><br/>'
},
"series": [
  {
    "color": "#cd9c00"
  },
  {
    "color": "#689199"
  },
  {
    "color": "#662673"
  },
  {
    "color": "#999"
  },
  {
    "color": "#b375ab",
    visible: true,
  },
],
"legend": {
  "enabled": true,
  "layout": "horizontal",
  "verticalAlign": "top",
  "itemMarginBottom": 5,
  "align": "left",
  "itemStyle": {
    "fontWeight": "normal",
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

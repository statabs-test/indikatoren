(function(){
    return {
   "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  //"tickInterval": 5,
  tickPositioner: function () {
    var interval = 10,
        ext = this.getExtremes(),
        i = ext.dataMax,
        pos = [i];
    while (i >= ext.dataMin) pos.unshift(i = i - interval);
    return pos;
}
  },
  "series": [{
      "color": "#8b2223"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    "shared": false
  }

}
}());


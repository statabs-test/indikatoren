(function(){
    return {
   "chart": {
    "type": "area",
    marginRight: 25
   },
  plotOptions: {
        /*series: {
        	"stacking": "normal",
			pointPadding: 0,
            borderWidth: 0,
            pointWidth: 10, 

        }*/
         area: {
            stacking: 'normal',
            //lineColor: '#666666',
            lineWidth: 0,
          
        }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  xAxis: {
    tickPositioner: function () {
      var interval = 2,
        ext = this.getExtremes(),
        i = ext.dataMax,
        pos = [i];
      while (i >= ext.dataMin) pos.unshift(i = i - interval);
      return pos;
    }
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	//"y": 40,
 	itemWidth: 120,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
   {"color":"#cd9c00", "index": 0, "marker": {"enabled": false}, legendIndex: 1}, //rot
   {"color":"#b00000", "index": 1, "marker": {"enabled": false}, legendIndex: 0}, //orange

  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
};
}());
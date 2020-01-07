(function(){
    return {
   "yAxis": {
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  "xAxis": {
	"tickInterval": 1,
  },




  data: {
    seriesMapping: [
      {
        name: 'Range',
        x: 0, y: 2, y:3
      },
      {
        //2nd series: use y values from column 3
        name: 'Average',
        y: 1
      }
    ]
    },

  series: [{
    name: 'Average',
    //data: averages,
    zIndex: 1,
    marker: {
        fillColor: 'white',
        lineWidth: 2,
        lineColor: Highcharts.getOptions().colors[0]
    }
}, {
    name: 'Range',
    //data: ranges,
    type: 'arearange',
    lineWidth: 0,
    linkedTo: ':previous',
    color: Highcharts.getOptions().colors[0],
    fillOpacity: 0.3,
    zIndex: 0,
    marker: {
        enabled: false
    }
}],





  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    "shared": false
  },
};
}());


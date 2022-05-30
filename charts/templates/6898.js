(function(){
    return {
   "chart": {
    "type": "column",
   },
  plotOptions: {
    column: {
      "stacking": "normal",
        pointPadding: 0,
        groupPadding: 0.2,
        borderWidth: 0,
        pointWidth: 2, 

    }, 

  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	tickInterval: 10,
  	"type": "linear",
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //itemWidth: 210,
    itemDistance: 0,
    //itemMarginBottom: 2,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {"color":"#73ba7c", "index": 3,legendIndex: 0,  "marker": {"enabled": false}, stacking: true}, //
    {"color":"#FABD24", "index": 2,legendIndex: 1,  "marker": {"enabled": false}, stacking: true}, //
    {"color":"#923F8D", "index": 1,legendIndex: 2, "marker": {"enabled": false}, stacking: true}, //
    {"color":"#999999", "index": 0,legendIndex: 3, "marker": {"enabled": false}, id: "separate", stacking: false}, //
    
  ],  
  "tooltip": {
   // "shared": true,
    formatter() {
      if (this.series.userOptions.id !== "separate") {
        const chart = this.series.chart;
        const series = chart.series;
        let tooltip = ""
        let s = 0
        series.forEach(series => {
          if (series.userOptions.id !== "separate") {
          	series.setState('hover');
            series.points.forEach(point => {
              if (point.x === this.x) {
                tooltip += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}:</span> <b> ${point.y} </b><br>`;
                s += point.y;
              }
            })
          }
        },
        )
        return tooltip + "Total Veranlagungen: <b>" + s + "</b>";
      
      } else {
        return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat( this.y, 0, ",", " ") + '</b><br/>';
      }
    }
  },

};
}());








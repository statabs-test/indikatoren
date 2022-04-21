(function(){
    return {
      xAxis: {
        tickPositioner: function () {
          var interval = 10,
            ext = this.getExtremes(),
            i = ext.dataMax,
            pos = [i];
          while (i >= ext.dataMin) pos.unshift(i = i - interval);
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
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    {"color": "#dc440e"
    }, 
    {"color": "#008ac3",
    }, 
    {"color": "#3c3c3c",
  }, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
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
  },
  chart:{
      marginRight: 20,
  }
  }
  }());
  
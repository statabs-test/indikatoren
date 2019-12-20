(function(){
    return {
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%"
    },
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {
    "color": "#0070C0"
    }
  ],
  "tooltip": {
    "shared": false,
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
  "chart": {
    "type": "column"
  }
	}
}());
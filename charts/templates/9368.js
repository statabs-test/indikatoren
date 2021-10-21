(function(){
    return {
"plotOptions": {
    "series": {
       borderWidth: 0,
       pointPadding: 0,
       groupPadding: 0.1,
      //"pointWidth": 30,
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1,
    "labels": {
      rotation: 0
    }
  },  
  "yAxis": {
      "labels": {
      "format": "{value:,.0f}",
    },
	"max": undefined
  },
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    width: 150,
    "itemStyle": {
      textOverflow: null,
      "fontWeight": "normal"
    },
    labelFormatter: function(){
      return this.name.replace("Unterhaltungseinrichtungen", "Unterhaltungs-einrichtungen")
    }
  },
  "series": [
 
  {"color": "#007A2F"}, 
  {"color": "#68AB2B"},
  {"color": "#D7E8D2"}, 
  {"color": "#2B0099"}, 
  {"color": "#008AC3"}, 
  {"color": "#689199"}, 
  {"color": "#D3E2E4"}, 
  ],
  "chart": {
    //"renderTo": 'container-I.01.1.0016', 
    //"marginBottom": 75,
    //"marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
}
}());

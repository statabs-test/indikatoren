(function(){
    return {
  "xAxis": {
      type: "category",
    //"tickInterval": 5,
    labels:{
    "formatter": function() {
        return this.value.replace("25. Feb", "<b>25. Feb")
        .replace("16. Mrz", "<b>16. Mrz")}}
  },
  "yAxis": [{
    "min": 0, 
    tickInterval: 500,
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    lineColor: '#B9CFD7', 
    title: {
        style: {
            color: "#000000",
            fontSize: null
        },
        text: null
    },
    labels: {
        format: "{value:,.0f}",
        style: {
        color: "#000000"
        }
    }
  },
  {
      tickInterval:0.25,
      min:-1,
    opposite: true,
    gridLineColor: '#B9CFD7', 
    gridLineWidth: 0.5,
    lineColor: '#B9CFD7', 
    title: {
        style: {
            color: "#000000",
            fontSize: null
        },
        text: null
    },
    labels: {
        style: {
            color: "#000000"
        }, 
        formatter: function() {
           return  Highcharts.Number.Fomat(this.value*100) + "%";
        }
    }
  }],	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    //{"color": "#68AB2B"}, 
    {"color": "#68AB2B"}, 
    {"color": "#007A2F"},
	  {"color": "#DC440E"}, 
  	
    {"color": "#B00000"}
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
        "radius": 3
      }
    }
  }, chart:{
     // width: 600
  }
};
}());
 
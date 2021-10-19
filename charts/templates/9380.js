(function(){
    return {
 "series": [
 
  {"color": "rgb(180,117,171)",index: 1, legendIndex:1},
  {"color": "rgb(103,39,115)", index: 2, legendIndex:0}, 
  {"color": "rgb(250,189,36)", index: 0, legendIndex:2, visible: false},
 
  //{"color": "rgb(231,207,226)", index: 0, legendIndex:2}, 
],
  "chart": {
      type: "column",
    "inverted": true,
    marginRight: 25,
    marginLeft: 210,
  }, 
  subtitle: {
    useHTML: true,
  },
  legend: {
    itemDistance: 5,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 45,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },  
  xAxis: {
    labels: {
      //useHTML: false,
      formatter: function () {
        //add sum of observations of visible series to the axis label
        var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
            return val.visible;
        });
        var indexOfCurrentValue = this.axis.names.indexOf(this.value);
        var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
            return accumulator + series.yData[indexOfCurrentValue];
        }, 0);
        //use N if all series are visible, otherwise use n
        var nString =  'n=';
          if (this.value.match(/Total/)) nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';

        //delete everything before ":", including ":"
        this.value = this.value.replace(/[^:]*:/, "");

        //check for value that contains only spaces
        if (sum != 0) return this.value;
        //else, if sum = 0, then it is assumed to be an intermediate title. return it bold
        return "<b>" + this.value + "</b>";
    }
    }
  },
  yAxis: {
    //tickAmount: 7
  },
    "tooltip": {
        "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
         "shared": true
    },
  plotOptions:{
     column: {
      borderWidth: 0,
      groupPadding: 0.1,
         stacking: 'normal',
  }
}
};
}());



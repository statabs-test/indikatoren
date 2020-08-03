(function(){
  return {
 chart: {
  type: "area"
 },
  plotOptions: {
       area: {
          stacking: 'normal',
          lineWidth: 0,

      }
  },
  yAxis: {
    labels: {
      format: "{value:,.0f}",
    }
  },
  xAxis: {
    type: "category",
  },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
    alignColumns: false,
    itemDistance: 10
  },
  series: [
    {
      color: '#D3E2E4', index: 5, legendIndex:1,
    },
    {
      color: '#B00000', index: 4,legendIndex:2,
    },
    {
      color: '#689199', index: 3,legendIndex:3,
    },
    {
      color: '#DC440E', index: 2,legendIndex:4,
    },
     {
      color: '#083038', index: 1,legendIndex:5,
    }
  ],  
  tooltip: {
     pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} ({point.percentage:.1f}%)</b><br/>'
  }
};
}());


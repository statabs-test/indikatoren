(function(){
  return {
    chart: {
      type: "column",
      //type: "area",
    },
    plotOptions: {
      //area: {
        column: {
        stacking: 'normal',
        //lineWidth: 0,
      },
      line: {
        lineWidth: 3,
      }
    },
  series: [
    { 
      "color": "#007a2f",
      legendIndex: 3,
    },
    {
      "color": "#68ab2b",
      legendIndex: 2,
    },
    {
      "color": "#ffbb58",
      legendIndex: 1,
    },
    {
      type: 'line',
      color: '#246370',
      visible: true,
      lineWidth: 3,
      legendIndex: 4,
    }
  ],
  xAxis: {
      type: "category"
  },
  yAxis: {
      reversedStacks: false,
  },
  legend: {
//    itemWidth: 150,
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    itemMarginBottom: 4,
    align: "left",
    itemStyle: {
      textOverflow: "none",
      whiteSpace: "nowrap"
    },
    reversed: false,
  }
};
}());

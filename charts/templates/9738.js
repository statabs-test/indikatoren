(function () {
  return {
    chart: {
      height: 415,
    },
    "series": [
      { "color": "#71A3B5" },
      { "color": "#FFBB58" },
      { "color": "#C8C8C8" },
      { "color": "#6F6F6F" }, // grau
      // reversedStacks: true,       
    ],
    "xAxis": {
      "type": "category"
    },
    yAxis: {
      reversedStacks: false,
    },
    legend: {
      reversed: false,
      "itemMarginBottom": 10,
    }
  }
}());
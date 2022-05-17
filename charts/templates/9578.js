(function () {
  return {
    chart: {
      marginRight: 20
    },
    data: {
      switchRowsAndColumns: true
    },
    xAxis: {
      //type: "category", /* muss "category" sein, sonst funktioniert es nicht richtig */
      tickPositioner: function () {
        var maxlabels = 10, 
          ext = this.getExtremes(), 
          i = Math.round(ext.max),
          interval = Math.round((i - ext.min) / maxlabels), 
          pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;
      }
    },
    series: [
      { color: "#b00000", legendIndex: 0 }, /*Barfi*/
      { color: "#672773", legendIndex: 3 }, /*Marktplatz*/
      { color: "#007a2f", legendIndex: 5 }, /*Münsterplatz*/
      { color: "#fabd24", legendIndex: 2 }, /*Oberer Rheinweg*/
      { color: "#b475ab", legendIndex: 4 }, /*Unterer Rheinweg*/
      { color: "#b9cfd7", legendIndex: 6 }, /*Kaserne*/
    ],
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemWidth: 210,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      itemMarginBottom: 5
    }
  }
}());
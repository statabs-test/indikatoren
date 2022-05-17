(function () {
  return {
    chart: {
      marginRight: 20,
      events: {
        load: function () {
          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text: ""//"Kontingente"
            })
            .translate(250, -10); //move -140 to the left and 8 down
        }
      }
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
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      x: 20,
      itemWidth: 210,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      //itemMarginBottom: 5,
      title: {
        text: ' ', //muss gesetzt werden, wird via chart.events.load bearbeitet
        style: {
          fontWeight: 'normal',
          lineHeight: 18
        }
      },
      labelFormatter: function () {
        if (this.name.includes("Kontingent")) return this.name.split(" ").slice(0, 1).toString();
        else return this.name;
      },
    },
    series: [
      { color: "#b00000", legendIndex: 0 }, /*Barfi*/
      { color: "#672773", legendIndex: 3 }, /*Marktplatz*/
      { color: "#007a2f", legendIndex: 5 }, /*Münsterplatz*/
      { color: "#fabd24", legendIndex: 2 }, /*Oberer Rheinweg*/
      { color: "#b475ab", legendIndex: 4 }, /*Unterer Rheinweg*/
      { color: "#b9cfd7", legendIndex: 6 }, /*Kaserne*/
      { color: "#b00000", legendIndex: 0, dashStyle: "ShortDot", visible: false}, /*Barfi*/
      { color: "#672773", legendIndex: 3, dashStyle: "ShortDot", visible: false }, /*Marktplatz*/
      { color: "#007a2f", legendIndex: 5, dashStyle: "ShortDot", visible: false }, /*Münsterplatz*/
      { color: "#fabd24", legendIndex: 2, dashStyle: "ShortDot", visible: false }, /*Oberer Rheinweg*/
      { color: "#b475ab", legendIndex: 4, dashStyle: "ShortDot", visible: false }, /*Unterer Rheinweg*/
      { color: "#b9cfd7", legendIndex: 6, dashStyle: "ShortDot", visible: false }, /*Kaserne*/
    ] 
  }
}());
(function () {
  return {
    subtitle: {
      useHTML: true
    },
    "chart": {
      "type": "column",
      events: {
        load: function () {
          //set xAxis min in navigator
          this.xAxis[0].update({
            min: 5
          });

          this.credits.element.onclick = function () { };

          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
                  this.series[1].name.split(" ").slice(0, 1).toString() //Wohnen
                + ':<br><br>'
                + this.series[7].name.split(" ").slice(0, 1).toString() //Arbeiten
                + ':<br>'
            })
            .translate(-65,55); //move -x to the left and +y down
        }
      }
    },
    "xAxis": {
      type: "category"
      //"tickInterval": 1
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "shared": false,
      useHTML: true,
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f} m<sup>2</sup></b><br/>'
    },
    "series": [
      {  //Wohnen Pestalozzi
        "color": "#9E7C59",
        //legendIndex: 1
      },
      { // Wohnen Kannenfeld
        "color": "#FF8028",
       // index: 2,
        //legendIndex: 2
      },
      { // Wohnen Landskron
        "color": "#923F8D",
        //index: 1,
        //legendIndex: 3
      },
      {  //Wohnen Lysbüchel
        "color": "#689199",
        //legendIndex: 4
      },
      {  //Wohnen Friedmatt
        "color": "#FABD24",
        //legendIndex: 5
      },
      { // Wohnen Basel
        "color": "#999999",
       // index: 1,
       // legendIndex: 6,
        visible: false
      },
      {  //Arbeiten Pestalozzi
        "color": "#67401E",
       // legendIndex: 7
      },
      { // Arbeiten Kannenfeld
        "color": "#B00000",
        //index: 1,
        //legendIndex: 8
      },
      {  //Arbeiten Landskron
        "color": "#662673",
        //legendIndex: 9
      },
      { // Arbeiten Lysbüchel
        "color": "#246370",
        //index: 1,
        //legendIndex: 10
      },
      {  //Arbeiten Friedmatt
        "color": "#7F5F1A",
        //legendIndex: 11
      },
      { // Arbeiten Basel
        "color": "#6F6F6F",
       // index: 1,
        //legendIndex: 12,
        visible: false
      },
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 4,
      "align": "left",
      x: 120,
      y: -60,
      //itemWidth: 100,
      //itemDistance: 4,
      //width: 300,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      title: {
        text: '-<br><br>-', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
        style: {
          fontWeight: 'normal',
          lineHeight: 17
        }
      },
      labelFormatter: function () {
        return this.name.split(" ").slice(-1).toString();  //holt z.B. 'Freiraumfäche' aus 'Freiraumfäche Friedmatt'
      },
    },
    "plotOptions": {
      "series": {
        pointPadding: 0,
        groupPadding: 0.15,
        borderWidth: 0,
        showInNavigator: true
      },
        },
    navigator: {
      enabled: true,
      top: 330,
      series: {
        type: 'column',
        pointRange: null
      },
      xAxis: {
        //max: "2022",
         tickInterval: 1,
       /* tickPositioner: function () {
          //use only every nth tick, starting with startingPoint
          const startingPoint = 1,
            step = 2,
            positions = [];
          for (let i = startingPoint; i < this.max; i += step) {
            positions.push(i)
          }
          return positions
        },*/
        labels: {
          step: 1,
          rotation: 0,
          align: 'center',
          y: 15,
          style: {
            color: "#000000"
          },
          formatter: function () {
            // get year from chart axis label names
            return this.chart.xAxis[0].names[this.value].slice(0, 4);
          }
        },
      }
    },
  }
}());
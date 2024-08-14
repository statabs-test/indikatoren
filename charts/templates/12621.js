(function () {
  return {
    "xAxis": {
      tickInterval: 1
    },
    "yAxis": {
      tickInterval: 20000,
      "labels": {
        "format": "{value:,.0f}"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f} Fr.</b><br/>'
    },
    "series": [
      {
        "color": "#cd9c00" /* Mittelwert Friedmatt */
      },
      {
        "color": "#7f5f1a", /* Median Friedmatt */
        dashStyle: "Dash",
      },
      {
        "color": "#b375ab" /* Mittelwert Kannenfeld */
      },
      {
        "color": "#923f8d", /* Median Kannenfeld */
        dashStyle: "Dash",
      },
      {
        "color": "#923f8d" /* Mittelwert Landskron */
      },
      {
        "color": "#cd9c00", /* Median Landskron */
        dashStyle: "Dash",
      },
      {
        "color": "#7f5f1a", /* Mittelwert Lysbüchel */
      },
      {
        "color": "#b375ab", /* Median Lysbüchel */
        dashStyle: "Dash",
      },
      {
        "color": "#923f8d" /* Mittelwert Pestalozzi */
      },
      {
        "color": "#923f8d", /* Median Pestalozzi */
        dashStyle: "Dash",
      },
    ],
    chart: {
      events: {
        load: function () {
          var chart = this;
          // Extract common words from series names
          var leftTitle = chart.series[0].name.split(" ").slice(0, 1).toString();
          var rightTitle = chart.series[1].name.split(" ").slice(0, 1).toString();

          // Add and move legend titles
          chart.renderer.text(leftTitle + ':', chart.legend.group.translateX +0, chart.legend.group.translateY +5)
             // .css({ fontWeight: 'bold' })
              .add();
          chart.renderer.text(rightTitle + ':', chart.legend.group.translateX + 200, chart.legend.group.translateY +5)
              //.css({ fontWeight: 'bold' })
              .add();
      }


        /*load: function () {
          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
                this.series[0].name.split(" ").slice(0, 1).toString() //holt 'Wöchentlich' aus '2015 Wöchentlich'
                + ':'
                + this.series[1].name.split(" ").slice(0, 1).toString() //holt 'Kumuliert' aus '2020 Kumuliert'
                + ':'
            })
            /*.translate(-140, 8); //move -140 to the left and 8 down*/
        //}
      }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      x:50,
      "align": "left",
      itemWidth: 180,
      itemStyle: {
        width: "50%",
        textOverflow: "none"
      },
      title: {
        text: '<br>', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
        style: {
          fontWeight: 'normal',
          lineHeight: 18
        }
      },
      labelFormatter: function() {
        return `<div style="width: ${this.index % 2 === 0 ? '100%' : '0'}; float: ${this.index % 2 === 0 ? 'left' : 'right'};">${this.name.split(" ").slice(-1).toString()}</div>`;
    }
    },
    "plotOptions": {
      "line": {
        "marker": {
          "enabled": false,
          "symbol": "circle",
        }
      }
    }
  }
}());

(function () {
  return {
    "chart": {
      "type": "line",
       events: {
        load: function () {
          //add and move legend title (get it from series names)
          this.legend.title
            .attr({
              text:
                this.series[0].name.split(" ").slice(-1).toString() //holt 'Friedmatt' aus 'Freiraumfäche Friedmatt'
                + ':<br>'
                + this.series[2].name.split(" ").slice(-1).toString() //Kannenfeld
                + ':<br>'
                + this.series[4].name.split(" ").slice(-1).toString() //Landskron
                + ':<br>'
                + this.series[6].name.split(" ").slice(-1).toString() //Lysbüchel
                + ':<br>'
                + this.series[8].name.split(" ").slice(-1).toString() //Pestalozzi
                + ':'
            })
            .translate(-65, 94); //move -x to the left and +y down
        }
      }
    },
    "plotOptions": {
      "series": {
        borderWidth: 0,
      },
      column: {
        minPointLength: 3
      }
    },
    subtitle: {
      useHTML: true
    },
    "yAxis": [
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          enabled: false
        },
        "labels": {
          useHTML: true,
          "format": "{value:,.0f} m<sup>2</sup>",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0
      },
      {
        gridLineColor: '#B9CFD7',
        gridLineWidth: 0.5,
        "title": {
          enabled: false
        },
        "labels": {
          "format": "{value:,.0f}%",
          "style": {
            "color": "#000000"
          }
        },
        "min": 0,
        "opposite": true
      }
    ],
    "xAxis": {
      "tickInterval": 1
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemMarginBottom": 4,
      x: 125,
      y: -100,
      itemWidth: 110,
      width: 260,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      title: {
        text: '-<br><br><br><br>-', //pro <br> in chart.events.load ein <br> hier als Platzhalter, sonst springt die Legende beim anklicken
        style: {
          fontWeight: 'normal',
          lineHeight: 18
        }
      },
      labelFormatter: function () {
        return this.name.split(" ").slice(0, 1).toString();  //holt z.B. 'Freiraumfäche' aus 'Freiraumfäche Friedmatt'
      },
    },
    "series": [
      {
        "color": "#cd9c00",
        //"index": 0,
        //legendIndex: 0,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#7f5f1a",
        //"index": 5,
        //legendIndex: 1,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#b375ab",
        //"index": 1,
        //legendIndex: 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#923f8d",
        //"index": 6,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#b375ab",
         //"index": 2,
        //legendIndex: 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#923f8d",
         //"index": 7,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#b375ab",
        //"index": 3,
        //legendIndex: 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#923f8d",
        //"index": 8,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      },
      {
        "color": "#b375ab",
        //"index": 4,
        //legendIndex: 2,
        "type": "column",
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: ,.0f}</b><br/>' }
      },
      {
        "color": "#923f8d",
        //"index": 9,
        //legendIndex: 3,
        "type": "line",
        "yAxis": 1,
        tooltip: { "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .1f}%</b><br/>' }
      }
    ]
  }
}());

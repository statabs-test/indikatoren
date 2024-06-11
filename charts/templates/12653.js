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
                this.series[0].name.split(" ").slice(-1).toString() //holt 'Wöchentlich' aus '2015 Wöchentlich'
                + ':<br>'
                + this.series[2].name.split(" ").slice(-1).toString() //holt 'Kumuliert' aus '2020 Kumuliert'
                + ':<br>'
                + this.series[4].name.split(" ").slice(-1).toString() //holt 'Kumuliert' aus '2020 Kumuliert'
                + ':<br>'
                + this.series[6].name.split(" ").slice(-1).toString() //holt 'Kumuliert' aus '2020 Kumuliert'
                + ':<br>'
                + this.series[8].name.split(" ").slice(-1).toString() //holt 'Kumuliert' aus '2020 Kumuliert'
            })
            .translate(-63, 22); //move -140 to the left and 8 down
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
      //itemWidth: 200,
      x: 125,
      y: -25,
      itemWidth: 110,
      width: 260,
      itemStyle: {
        textOverflow: "none",
        whiteSpace: "nowrap"
      },
      title: {
        text: 'bla ', //muss gesetzt werden, wird via chart.events.load bearbeitet
        style: {
          fontWeight: 'normal',
          lineHeight: 18
        }
      },
      labelFormatter: function () {
        return this.name.split(" ").slice(0, 1).toString();  //holt z.B. '2015' aus '2015 Wöchentlich'
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

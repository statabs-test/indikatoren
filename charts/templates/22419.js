(function () {
  return {
    "chart": {
      "type": "column",
      marginBottom: 80
    },
    plotOptions: {
      "series": {
        "borderWidth": 0,
        "stacking": "absolute",
        "groupPadding": 0
      }
    },
    "xAxis": {
      "type": "category",
      "tickInterval": 1,
      labels: {
        step: 1,
        rotation: -90,
      }
    },
    "yAxis": {
      "min": 0,
      "labels": {
        formatter: function () {
          return Highcharts.numberFormat(this.value / 1000000, 0) + ' km²';
        }
      }
    },
    "tooltip": {
      "shared": false,
      //"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f} ha</b> ({point.percentage:.1f}%)<br/>',
      formatter: function () {
        const total = this.series.data.reduce((sum, point) => sum + point.y, 0); // Calculate the total sum of all data points
        const percentage = ((this.y / total) * 100);
        return `${this.key}<br><span style="color:${this.point.color}">\u25CF</span> ${this.series.name}: <b>` + Highcharts.numberFormat(percentage, 1) + `%</b> (` + Highcharts.numberFormat(this.y / 1000000, 2) + ` km²)`;
      }
    },
    "series": [
      {
        "color": "#68ab2b",
        visible: false,
        legendIndex: 3,
        index: 3
      },
      {
        "color": "#67401E",
        legendIndex: 1,
        index: 1
      }, 
      {
        "color": "#933F8D",
        visible: false,
        legendIndex: 2,
        index: 2
      }, 
      {
        "color": "#008AC3",
        visible: false,
        legendIndex: 4,
        index: 4
      }, 
      {
        "color": "#474747",
        visible: false,
        legendIndex: 5,
        index: 5
      }, 
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "align": "left",
      "verticalAlign": "top",
      "itemMarginBottom": 2,
    }
  }
}());
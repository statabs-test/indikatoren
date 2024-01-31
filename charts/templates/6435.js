/* (function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
  "series": [
    {"color": "#008AC3 "}, /* blau */
	/*  {"color": "#B00000"}, /* rot */ /*
  ],
  "legend": {
    "enabled": true,
    //"x": 30,
    //"y": 35,
    "itemWidth": 100,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 */

(function () {
  return {
    "data": {
      "seriesMapping": [
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
        {
          "x": 0
        },
          ]
    },
    "xAxis": {
      type: "category",
    },
    "yAxis": {
      "labels": {
        "format": "{value:,.0f}",
        "formatter": function () {
          return Highcharts.numberFormat((this.value), 0);
        },
      }
    },
    "series": [
      { index:0,
        "color": "#008AC3",
        "tooltip": {
          "pointFormatter": function () {
            return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
          }
        }}, /*Männer*/
        {
          "index": 1,
          "type": "errorbar",
          "tooltip": {
            "pointFormatter": function () {
              return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
            },
          }
        },
        { index:2,
          "color": "#DC440E",
          "tooltip": {
            "pointFormatter": function () {
              return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
            }
          }}, /*Frauen*/
          {
            "index": 3,
            "type": "errorbar",
            "tooltip": {
              "pointFormatter": function () {
                return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '%</b> - <b>' + Highcharts.numberFormat((this.high), 1) + '%</b>)';
              },
            }
          },
         
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "plotOptions": {
      series: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
    chart: {
      "type": "column",
    }
  }
}());
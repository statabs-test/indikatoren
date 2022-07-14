
    (function () {
        return {
            "xAxis": {
                tickInterval: 1,
                type: "category"
            },
            "yAxis": {
                "labels": {
                    "format": "{value:,.0f}"
                }
            },
            "tooltip": {
                "shared": false,
                "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
    series: [{
        upColor: "#68AB2B",
        color: "#B00000",
        data: [{
          name: '2012',
          y: 7210548,
          color: "#B00000"
        }, {
          name: '13/12',
          y: -380864
        }, {
          name: '14/13',
          y: -847594
        }, {
          name: '15/14',
          y: +351748
        }, {
          name: '16/15',
          y: -437335
        }, {
          name: '17/16',
          y: -106349
        },  {
          name: '18/17',
          y: -1092173
        }, {
          name: '19/18',
          y: +1367253
        }, {
          name: '20/19',
          y: -938454
        }, {
          name: '21/20',
          y: +280486
        }, {
          name: '2021',
          isSum: true,
          color: "#B00000"
        }],
    }],

            "legend": {
                "enabled": false,
                "layout": "horizontal",
                "verticalAlign": "top",
                "itemMarginBottom": 5,
                "align": "left",
                "itemStyle": {
                    "fontWeight": "normal"
                }
            },
            "plotOptions": {
            },
            chart: {
                type: 'waterfall'
            },
        }
    }());
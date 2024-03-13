(function () {
  return {
    "plotOptions": {
      "series": {
        pointPadding: -0.9,
        groupPadding: 0.2,
        borderWidth: 0,
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        }
      },
      "column": {
        "colorByPoint": true
      }
    },
    "xAxis": {
      "type": "category",
      labels: {
        style: {
          textOverflow: 'none',
          whiteSpace: "nowrap"
        },
        x: -10,
        rotation: 0,
        "formatter": function () {
          return this.value.replace("BS/BL/JU (rechte Skala)", "<span style='color: rgba(0,0,0,0)'>Aaabstl</span>BS/BL/JU <br/><span style='color: rgba(0,0,0,0)'>Aaabstaaandllllllllll</span>(rechte Skala)")
            .replace("Schweiz (rechte Skala)", "<span style='color: rgba(0,0,0,0)'>Aaabsllll</span>Schweiz ")
           // .replace("Jura", "JU")
            .replace("Basel-Landschaft", "Basel-<br/>Landschaft")
            //.replace("Basel-Stadt", "BS");
            .replace("BS/BL/JU (échelle droite)", "<span style='color: rgba(0,0,0,0)'>Aaabstl</span>BS/BL/JU <br/><span style='color: rgba(0,0,0,0)'>Aaabstaaandllllllllll</span>(échelle droite)")
            .replace("Suisse (échelle droite)", "<span style='color: rgba(0,0,0,0)'>Aaabsllll</span>Suisse ")
           // .replace("Jura", "JU")
        }
      }
    },
    "yAxis": [{
      offset:-6,
      tickInterval: 10000,
      tickAmount: 5,
      "labels": {
        "format": "{value:,.f}",
        "style": {
          "color": "#000000",
        }
      },
      "min": 0,
      "max": undefined,
      "title": "",
    },
    {
      offset:-6,
      tickInterval: 100000,
      tickAmount: 5,
      "title": {
        "style": {
          "color": "#000000",
          "fontSize": null
        },
        "text": null
      },
      "labels": {
        "format": "{value:,.f}",
        "style": {
          "color": "#000000",
          textOverflow: 'none',
          whiteSpace: "nowrap"
        }
      },
      "min": 0,
      "max": undefined,
      "gridLineWidth": 0,
      "opposite": true
    }
    ],
    "series": [{
      index: 1
    },
    {
      index: 2
    },
    {
      index: 3,
      yAxis: 1
    }
    ],
    "colors": [
      "#474747",
      "#FF8028",
      "#FABD24",
      "#B375AB",
      "#990300"
    ],

    "legend": {
      "enabled": false,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      //"y": 35,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "tooltip": {
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      "shared": false
    },
    "chart": {
     margin: [45,45,35,45],
     spacing: [0,0,0,0],
      "type": "column",
    }
  }
}());

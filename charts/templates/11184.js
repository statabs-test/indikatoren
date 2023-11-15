(function () {
  return {
    plotOptions: {
      series: {
        allowPointSelect: false,
        point: {
          events: {
            legendItemClick: function (event) {
              event.preventDefault();
            }
          }
        }
      }
    },
    legend: {
      enabled: false,
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemDistance: 10,
      style: {
        fontSize: "12px"
      }
    },
    series: [{
      data: {
        series: [
          {
            ParentId: '1',
          },
          {
            ParentId: '2',
          }
        ]
      },
      dataLabels: {
        enabled: true,
        formatter: function () {
          // Überprüft, ob "Donutstück" grösser als 5% ist und wenn nicht, soll Prozentwert nicht angezeigt werden
          return Math.abs(this.y) > (0.05 * Math.abs(this.total)) ? Highcharts.numberFormat(this.percentage, 1) + '%' : null;
        },
        distance: -65,
        style: {
          color: 'black',
          textOutline: "0px black",
          fontWeight: "normal",
          fontSize: "12px"
        }
      },
      showInLegend: false,
      type: 'pie',
      size: '100%',
      innerSize: '40%',
      center: [180, 120],
      borderWidth: 2,
      colors: [
        "#fdbf6f",
        "#FFFFD4",
        "#DB9378",
        '#F1B6DA',
        '#F6E8C3',
        '#C2A5CF'
      ],
    }, {
      data: {
        series: [
          {
            id: '2',
          },
          {
            id: '3',
          }
        ]
      },
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f}%',
        distance: -20,
        style: {
          color: 'black',
          textOutline: "0px black",
          fontWeight: "normal",
          fontSize: "12px"
        }
      },
      showInLegend: true,
      type: 'pie',
      innerSize: '70%',
      center: [180, 120],
      borderWidth: 2,
      colors: [
        "#ff8028",
        "#ffbb58",
        "#b00000",
        '#fca984',
        '#cd9c00',
        '#762A83'
      ],
    }],
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} </b> ({point.percentage:.1f}%)<br/><br/>',
      "shared": false,
      useHTML: false
    },
    labels: {
      items: [{
        html: 'Aussen: Anzahl Fälle<br/>Innen: &nbsp;&nbsp;&nbsp;Case-Mix',
        style: {
          left: '300px',
          top: '250px'
        }
      }]
    },
  };
}());

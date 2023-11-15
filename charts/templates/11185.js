(function () {
  // Funktion zum Erstellen eines Arrays von Jahren aus dem Datensatz
  function getUniqueYears(points) {
    const years = [];
    points.forEach(point => {
      const year = point.year; // Jahre aus Datensatz nehmen
      if (!years.includes(year)) {
        years.push(year);
      }
    });
    return years.sort(); // Jahre aufsteigend sortieren
  }

  return {
    chart: {
      type: "scatter",
      zoomType: 'xy',
      events: {
        load: function () {
          const chart = this;
          const dropdownDiv = document.createElement('div');
          dropdownDiv.id = 'yearDropdown';
          dropdownDiv.style.position = 'absolute';
          dropdownDiv.style.top = (chart.plotTop + chart.plotHeight - 125) + 'px'; // Unterste Ecke der Grafik
          dropdownDiv.style.left = (chart.plotLeft + chart.plotWidth - 371) + 'px'; // Rechte Seite der Grafik
          dropdownDiv.style.padding = '5px';
          dropdownDiv.style.border = '1px solid #ccc';
          dropdownDiv.style.background = '#fff';

          const uniqueYears = getUniqueYears(this.series[0].points);
          const defaultYear = uniqueYears.length > 0 ? uniqueYears[uniqueYears.length - 1] : null;

          const select = document.createElement('select');

          uniqueYears.forEach(year => {
            select.appendChild(new Option(year, year));
          });

          select.value = defaultYear;

          select.addEventListener('change', function () {
            const selectedYear = select.value;
            chart.series[0].points.forEach(point => {
              point.setVisible(selectedYear === 'all' || point.year === parseInt(selectedYear), false);
            });
          });

          dropdownDiv.appendChild(select);
          document.body.appendChild(dropdownDiv);

          // Standardmäßig das letzte Jahr auswählen
          select.dispatchEvent(new Event('change'));
        }
      }
    },
    yAxis: [
      {
        tickAmount: 7,
        labels: {
          formatter: function () {
            return Highcharts.numberFormat((this.value), 1);
          }
        },
        min: 0,
        title: {
          text: "CMI"
        },
        style: {
          color: "black"
        },
      }
    ],
    xAxis: {
      title: {
        text: "PCCL"
      },
      labels: {
        formatter: function () {
          return Highcharts.numberFormat((this.value), 1);
        }
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      gridLineWidth: 1,
      tickAmount: 6,
      min: 0,
      style: {
        color: "black",
      }
    },
    legend: {
      enabled: false,
    },
    data: {
      seriesMapping: [
        { year: 0, name: 1, name_short: 2, x: 4, y: 3, color: 5 }
      ],
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        return '<b>' + this.point.name + '</b> <br/><br/> CMI: ' + Highcharts.numberFormat(this.y, 2) + '<br/> PCCL: ' + Highcharts.numberFormat(this.x, 2);
      }
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 6,
          enabled: true,
          symbol: 'circle',
          states: {
            hover: {
              enabled: true
            }
          }
        },
      },
      series: {
        dataLabels: {
          enabled: true,
          align: 'left',
          verticalAlign: 'top',
          allowOverlap: true,
          crop: false,
          format: '{point.name_short}',
          style: {
            fontWeight: 'normal',
            fontSize: '7pt',
            color: '#555',
            textOverflow: 'clip',
            textOutline: 'none',
          }
        }
      },
    },
  };
})();

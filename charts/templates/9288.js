(function () {
    return {
      chart: {
        marginRight: 16,
        //width: 665,
        events: {
          load: function () {
            var chart = this;
            chart.series.forEach(function (series) {
              series.points.forEach(function (point) {
                var x = 0, y = 0;
                switch (point.name) {
                  case 'Schweiz': case 'Schweiz': x = 0; y = -3; break; //ent-kommentieren falls gewünscht
                  case 'DE': case 'Deutschland': x = 0; y = -3; break;
                  case 'US': case 'USA': x = 30; y = 50; break;
                  case 'GB': case 'UK': x = 25; y = 35; break;
                  case 'FR': case 'Frankreich': x = 15; y = -3; break;
                  case 'IT': case 'Italien': x = 25; y = 10; break;
                  case 'ES': case 'Spanien': x = -30; y = 15; break;
                  case 'NL': case 'Niederlande': x = -15; y = -10; break;
                  case 'IN': case 'Indien': x = -15; y = -5; break;
                  case 'CN': case 'VR China': x = 0; y = 35; break;
  
                }
                point.dataLabel.translate(point.dataLabel.x + x, point.dataLabel.y + y);
              });
            });
          }
        }
      },
      series: [
        {
        }
      ],
      
      tooltip: {
        useHTML: false,
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.name}</span><br/>' +
          '<span>Anzahl Verkehrsunfälle:<b>  {point.z}</b></span>'
      },
      data: {
        seriesMapping: [
          //bubble series
          { x: 1, y: 2, z: 3, name: 0, color: 4 }
        ],
        parsed: function (columns) {
          //define colors by entry in first column
          var colors = columns[0].map(function (val, i, arr) {
            //column name
            if (i == 0) {
              val = 'color';
            }
            //column value
            else {
              switch (val) {
                case 'PKW':  val = 'rgb(176, 0, 0)'; break;
                case 'Motorrad': val = 'rgb(43, 0, 153)'; break;
                case 'Velo': case 'USA': val = 'rgb(8, 161, 217)'; break;
                case 'Fussgänger': case 'UK': val = 'rgb(250, 189, 36)'; break;
                
  
                /*case 'CH': val = 'rgb(176, 0, 0)'; break;
                case 'DE': val = 'rgb(255, 128, 40)'; break;
                case 'US': val = 'rgb(115, 186, 124)'; break;
                case 'GB': val = 'rgb(180, 117, 171)'; break;
                case 'FR': val = 'rgb(8, 161, 217)'; break;
                case 'IT': val = 'rgb(131, 82, 46)'; break;
                case 'ES': val = 'rgb(255, 232, 70)'; break;
                case 'NL': val = 'rgb(60, 60, 60)'; break;
                case 'CN': val = 'rgb(103, 39, 115)'; break;
                case 'IN': val = 'rgb(0, 122, 47)'; break;*/
  
  
                //default: val = 'black';
              }
            }
            return val;
          });
          columns.push(colors);
        }
      },
      xAxis: {
        categories: ['nicht angezeigt','PKW', 'Motorrad', 'Velo','Passanten'],
        gridLineWidth: 0,
        lineWidth: 0,
       // max: 55,
        //min: -5,
        labels: {
         
        },
        plotLines: [{
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 1,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 2,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 3,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 4,
        },
    ],
    
      },
      yAxis: {     
        categories: ['','Anderer Ort','Nebenstrasse','Hauptstrasse','Autobahn',''],
        useHTML: true,
        gridLineWidth: 0,
        //max: 50,
       // min: -150,
        labels: {
          format: '{value}'
        },
        plotLines: [{
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 1,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 2,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 3,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 4,
        },
    ],
        
      },
      plotOptions: {

        bubble: {
          dataLabels: {              
            //	x:-20,
            y: 0,  
            format: '{point.z}',
            allowOverlap: true,
            inside: true,
            //padding: 50,
            //borderRadius:100,
            //overflow: "none",
            //crop: false,
            style: {
              fontSize: '10px',
              color: 'black',
              fontWeight: 'normal',
              textShadow: 'none',
            },
          },
        },
      },
    };
  }());
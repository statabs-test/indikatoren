(function(){
    return {
      series: [
        {
        }
      ], 
      tooltip: {
      	useHTML: false,
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.name}</span><br/>' +
            'Veränderung 2017 gegenüber dem Mittelwert 2008-2017:<b> {point.x}%</b><br/>' +
            'Logiernächte 2017 in Tausend:<b> {point.y}</b><br/>' +
            'Marktanteil 2017:<b> {point.z}%</b>'
      },
      data: {
		    seriesMapping: [
		    		//bubble series
		        {x: 1, y: 2, z: 3, name: 0, color: 4}
        ],  
        parsed: function(columns){
          //define colors by entry in first column
          var colors = columns[0].map(function(val, i, arr){
          	//column name
          	if (i == 0){
          		val = 'color';
          	}
          	//column value
          	else {
              switch (val){
              	case 'Schweiz': val = 'rgb(176, 0, 0)'; break;
              	case 'Deutschland': val = 'rgb(250, 189, 36)'; break;
              	case 'Vereinigte Staaten': val = 'rgb(250, 189, 36)'; break;
              	case 'Vereinigtes Königreich': val = 'rgb(115, 186, 124)'; break;
              	case 'Frankreich': val = 'rgb(180, 117, 171)'; break;
              	case 'Italien': val = 'rgb(8, 161, 217)'; break;
              	case 'Spanien': val = 'rgb(131, 82, 46)'; break;
              	case 'Niederlande': val = 'rgb(143, 176, 140)'; break;
              	case 'China, Hongkong, Taiwan': val = 'rgb(255, 232, 70)'; break;
              	//default: val = 'black';
          		}
          	}
            return val;
          });
          columns.push(colors);
        }
      }, 
      xAxis:{
        min: 0,
        labels: {
          format: '{value}%'
        },
        title: {
        	text: 'Veränderung 2017 gegenüber dem Mittelwert 2008-2017'
        }
      },
      yAxis: {
      	title: {
      		text: 'Logiernächte 2017 in Tausend'
      	}
      }
    };
}());


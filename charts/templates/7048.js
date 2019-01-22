(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0.1,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category",
    "labels": {
      useHTML: true,
      rotation: -90,
      y: 7,
      x: -10,
           "formatter": function() {
            return this.value
            .replace("Industrie (exkl. Chemie, Pharma)", "Industrie (exkl. <br/>Chemie,\u00A0Pharma)")
            .replace("Chemie, Pharma", "<br/>Chemie, Pharma<br/> ")
            .replace("Baugewerbe", "<br/>Baugewerbe<br/>")
            .replace("Handel, Reparatur", "<br/>Handel, Reparatur<br/>")
            .replace("Verkehr, Lagerei, Kommunikation", "Verkehr, Lagerei,<br/>Kommunikation")
            .replace("Gastgewerbe", "<br/>Gastgewerbe<br/>")
            .replace("Finanz-, Versicherungs-DL", "Finanz-,<br/>Versicherungs-DL")
            .replace("Beratung, Planung, Forschung, Immobilien, IT, Personalvermittlung, andere DL", "Beratung, Planung, <br/>Forschung, Immob.,<br/>IT, sonst. DL")
            .replace("Gebäudebetreuung, Sicherheit, sonst. wirtsch. DL", "Gebäudebetreuung, <br/>Sicherheit, sonst. <br/>wirtsch. DL")
            .replace("Öffentliche Verwaltung, Sozialversicherungen", "Öffentliche <br/>Verwaltung, <br/>Sozialversicherungen")
            .replace("Erziehung, Unterricht", "<br/>Erziehung, Unterricht<br/>")
            .replace("Kultur, Unterhaltung, pers. DL", "Kultur, Unterhaltung, <br/>pers. DL")
            .replace("Gesundheits-, Sozialwesen", "Gesundheits-, <br/>Sozialwesen")
            .replace("Total", "<br/>Total<br/>")
            ;
    },
    style: { 
          "textAlign": "center",
          fontSize: "9px",
          width: "100px",
          wordWrap: 'break-word',
		} 
    },
  },
  "yAxis": {
    tickAmount: 6,
    "labels": {
      "format": "{value}%" ,
        style: { 
          fontSize: "9px",
		//	textOverflow: 'none' // prevents ellipsis
		},
    "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      }, 
    }    
  },
  "series": [
  {"color": "#C9D6DB"},
  {"color": "#71A3B5"}, 
  {"color": "#008AC3"}, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    margin: 8,
    itemDistance: 3,
    "itemStyle": {
      "fontSize": "9px",
      "fontWeight": "normal"
    },
  },
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '% </b><br/><b>' 
    },
  },   
  "chart": {  
  	"type": "column",
    "inverted": false,
  	width: 662, 
  	height: 208,
	  spacingTop: 5,
	  spacingBottom: 5
  }
}
}());

 
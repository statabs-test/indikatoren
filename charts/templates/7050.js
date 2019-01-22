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
            .replace("Industrie (inkl. Pharma, exkl. Energie, Wasser)", "Industrie<br/>(inkl. Pharma, exkl. <br/>Energie, Wasser)")
            .replace("Pharma", "<br/>Pharma<br/>")
            .replace("inkl. <br/>Pharma<br/>", "inkl. Pharma")
            .replace("Baugewerbe", "<br/>Baugewerbe<br/>")
            .replace("Handel, Reparatur", "<br/>Handel, Reparatur<br/>")
            .replace("Verkehr, Lagerei", "<br/>Verkehr, Lagerei<br/>")
            .replace("Gastgewerbe", "<br/>Gastgewerbe<br/>")
            .replace("Information, Kommunikation", "Information, <br/>Kommunikation")
            .replace("Finanz- und Versicherungs-DL", "Finanz- und <br/> Versicherungs-DL")
            .replace("Beratung, Planung, Forschung", "Beratung, Planung, <br/>Forschung")
            .replace("Gebäudebetreuung, Sicherheit, sonst. wirtsch. DL", "Gebäudebetreuung, <br/>Sicherheit, sonst. <br/>wirtsch. DL")
            .replace("Personalvermittlung, -überlassung", "Personalvermittlung,<br/>-überlassung")
            .replace("Öffentliche Verwaltung", "Öffentliche <br/>Verwaltung")
            .replace("Erziehung, Unterricht", "<br/>Erziehung, Unterricht<br/>")
            .replace("Kunst und Unterhaltung", "Kunst und<br/>Unterhaltung")
            .replace("Gesundheits-, Sozialwesen", "Gesundheits-, <br/>Sozialwesen")
            .replace("Total", "<br/>Total<br/>")
            ;
    },
    style: { 
          "textAlign": "center",
          fontSize: "9px",
         // width: "100px",
          //wordWrap: 'break-word',
		} 
    },
  },
  "yAxis": {
    tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}" ,
        style: { 
          fontSize: "9px",
		//	textOverflow: 'none' // prevents ellipsis
		} 
    }    
  },
  "series": [
  {"color": "#ECE1D0"},
  {"color": "#9E7C59"}, 
  {"color": "#3A2012"}, 
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
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    shared: false
  },  
  "chart": {  
  	"type": "column",
    "inverted": false,
  	width: 662, 
  	hight: 208,
	  spacingTop: 5,
	  spacingBottom: 5
  }
};
}());

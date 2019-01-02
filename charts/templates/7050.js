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
      rotation: -90,
      y: 10,
      x: -10,
           "align": "right",
           "formatter": function() {
            return this.value
            .replace("Finanz- und Versicherungs-DL", "Finanz- und<br/>Versicherungs-DL")
            .replace("Personalvermittlung, -überlassung", "Personalvermittlung,<br/>-überlassung")
            .replace("Öffentliche Verwaltung, Sozialversicherungen", "Öffentliche <br/>Verwaltung, <br/>Sozialversicherungen")
            .replace("Kultur, Unterhaltung, pers. DL", "Kultur, Unterhaltung, <br/>pers. DL")
            .replace("Gebäudebetreuung, Sicherheit, sonst. wirtsch. DL", "Gebäudebetreuung, <br/>Sicherheit, sonst. <br/>wirtsch. DL")
            .replace("Gesundheits-, Sozialwesen", "Gesundheits-, <br/>Sozialwesen")
            .replace("Information, Kommunikation", "Information, <br/>Kommunikation")
            .replace("Beratung, Planung, Forschung", "Beratung, Planung, <br/>Forschung")
            .replace("Kunst und Unterhaltung", "Kunst und <br/>Unterhaltung");
        },
        style: { 
          fontSize: "9px",
          width: "100px",
          wordWrap: 'break-word',
		//	textOverflow: 'none' // prevents ellipsis
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

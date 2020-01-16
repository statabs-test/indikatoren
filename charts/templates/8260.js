(function(){
    return {
        "series": [
            {
                "color": "#007A2F",
                "index": 0,
                "legendIndex": 5 
            },
            {
                "color": "#73BA7C",
                "index": 1,
                "legendIndex": 4 
            },
            {
                "color": "#FFBB58",
                "index": 2,
                "legendIndex": 3 
            },
            {
                "color": "#FF8028",
                "index": 3,
                "legendIndex": 2
            },
            {
                "color": "#C8C8C8",
                "index": 4,
                "legendIndex": 1
            }  ,
            {
                "color": "#6F6F6F",
                "index": 5,
                "legendIndex": 0
            }          
    ],
    xAxis: {
        "type": "category",
        "labels": {
           align: "left",
            x: -120,
            useHTML: true,
            style: {
                whiteSpace: 'nowrap'
            },
            "formatter": function() {
                return this.value.replace("Männlich", "&nbsp; &nbsp; &nbsp; Männlich")
                                .replace("Weiblich", "&nbsp; &nbsp; &nbsp; Weiblich")
                                .replace("<3000 Fr.", "&nbsp; &nbsp; &nbsp; <3000 Fr.")
                                .replace("3000-7499 Fr.", "&nbsp; &nbsp; &nbsp; 3000-7499 Fr.")
                                .replace(">7499 Fr.", "&nbsp; &nbsp; &nbsp; >7499 Fr.")
                                .replace("Grossbasel Ost", "&nbsp; &nbsp; &nbsp; Grossbasel Ost")
                                .replace("Grossbasel West", "&nbsp; &nbsp; &nbsp; Grossbasel West")
                                .replace("Kleinbasel", "&nbsp; &nbsp; &nbsp; Kleinbasel")
                                .replace("Riehen, Bettingen", "&nbsp; &nbsp; &nbsp; Riehen, Bettingen")
                                .replace("Single-HH", "&nbsp; &nbsp; &nbsp; Single-HH")
                                .replace("Übrige HH o. K.", "&nbsp; &nbsp; &nbsp; Übrige HH o. K.")
                                .replace("HH m. mind. 1 K.", "&nbsp; &nbsp; &nbsp; HH m. mind. 1 K.")
                                .replace("18-29 Jahre", "&nbsp; &nbsp; &nbsp; 18-29 Jahre")
                                .replace("30-39 Jahre", "&nbsp; &nbsp; &nbsp; 30-39 Jahre")
                                .replace("40-49 Jahre", "&nbsp; &nbsp; &nbsp; 40-49 Jahre")
                                .replace("50-59 Jahre", "&nbsp; &nbsp; &nbsp; 50-59 Jahre")
                                .replace("60-69 Jahre", "&nbsp; &nbsp; &nbsp; 60-69 Jahre")
                                .replace(">69 Jahre", "&nbsp; &nbsp; &nbsp; >69 Jahre")
                                .replace("Schweiz", "&nbsp; &nbsp; &nbsp; Schweiz")
                                .replace("Ausland", "&nbsp; &nbsp; &nbsp; Ausland")
                                .replace("2003", "&nbsp; &nbsp; &nbsp; 2003")
                                .replace("2005", "&nbsp; &nbsp; &nbsp; 2005")
                                .replace("2007", "&nbsp; &nbsp; &nbsp; 2007")
                                .replace("2011", "&nbsp; &nbsp; &nbsp; 2011")
                                .replace("2015", "&nbsp; &nbsp; &nbsp; 2015")
                                .replace("2019", "&nbsp; &nbsp; &nbsp; 2019")
                ;
            },
            
            
        } 
  },
   
    yAxis:{
        tickInterval: 20,
        max: 100,
        labels:{
            "type": "category",
            rotation: 0,
        }
    },
    "chart": {     
        marginLeft: 130,
        "inverted": true,
        "height": 600,
     }
	}
}());

 
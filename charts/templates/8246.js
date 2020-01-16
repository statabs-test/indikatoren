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
                return this.value.replace("Einelternfamilie", "&nbsp; &nbsp; &nbsp; Einelternfamilie")
                .replace("Zweielternfamilie", "&nbsp; &nbsp; &nbsp; Zweielternfamilie")
                .replace("1 Kind", "&nbsp; &nbsp; &nbsp; 1 Kind")
                .replace("2 Kinder", "&nbsp; &nbsp; &nbsp; 2 Kinder")
                .replace("3 Kinder u.m.", "&nbsp; &nbsp; &nbsp; 3 Kinder u.m.")
                .replace("0-4 Jahre", "&nbsp; &nbsp; &nbsp; 0-4 Jahre")
                .replace("5-8 Jahre", "&nbsp; &nbsp; &nbsp; 5-8 Jahre")
                .replace("9-12 Jahre", "&nbsp; &nbsp; &nbsp; 9-12 Jahre")
                .replace("13-17 Jahre", "&nbsp; &nbsp; &nbsp; 13-17 Jahre")
                .replace("Obligat. Schule", "&nbsp; &nbsp; &nbsp; Obligat. Schule")
                .replace("Sekundarstufe II", "&nbsp; &nbsp; &nbsp; Sekundarstufe II")
                .replace("Tertiärstufe", "&nbsp; &nbsp; &nbsp; Tertiärstufe")
                .replace("ch/dt", "&nbsp; &nbsp; &nbsp; ch/dt")
                //.replace("ch/dt und andere", "&nbsp; &nbsp; &nbsp; ch/dt und andere")
                .replace("nur andere", "&nbsp; &nbsp; &nbsp; nur andere")
                .replace("<3 000 Fr.", "&nbsp; &nbsp; &nbsp; <3 000 Fr.")
                .replace("3 000-7 499 Fr.", "&nbsp; &nbsp; &nbsp; 3 000-7 499 Fr.")
                .replace(">7 499 Fr.", "&nbsp; &nbsp; &nbsp; >7 499 Fr.")
                .replace("Grossbasel Ost", "&nbsp; &nbsp; &nbsp; Grossbasel Ost")
                .replace("Grossbasel West", "&nbsp; &nbsp; &nbsp; Grossbasel West")
                .replace("Kleinbasel", "&nbsp; &nbsp; &nbsp; Kleinbasel")
                .replace("Riehen, Bettingen", "&nbsp; &nbsp; &nbsp; Riehen, Bettingen")
                .replace("2009", "&nbsp; &nbsp; &nbsp; 2009")
                .replace("2013", "&nbsp; &nbsp; &nbsp; 2013")
                .replace("2017", "&nbsp; &nbsp; &nbsp; 2017")     
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

 
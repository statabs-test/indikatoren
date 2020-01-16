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
                return this.value.replace("Einpersonen-HH", "&nbsp; &nbsp; &nbsp; Einpersonen-HH")
                .replace("Mehrpersonen-HH", "&nbsp; &nbsp; &nbsp; Mehrpersonen-HH")
                .replace("Männlich", "&nbsp; &nbsp; &nbsp; Männlich")
                .replace("Weiblich", "&nbsp; &nbsp; &nbsp; Weiblich")
                .replace("55-64 Jahre", "&nbsp; &nbsp; &nbsp; 55-64 Jahre")
                .replace("65-74 Jahre", "&nbsp; &nbsp; &nbsp; 65-74 Jahre")
                .replace(">74 Jahre", "&nbsp; &nbsp; &nbsp; >74 Jahre")
                .replace("Schweiz", "&nbsp; &nbsp; &nbsp; Schweiz")
                .replace("Ausland", "&nbsp; &nbsp; &nbsp; Ausland")
                .replace("<5 000 Fr.", "&nbsp; &nbsp; &nbsp; <5 000 Fr.")
                .replace("5 000-7 499 Fr.", "&nbsp; &nbsp; &nbsp; 5 000-7 499 Fr.")
                .replace(">7 499 Fr.", "&nbsp; &nbsp; &nbsp; >7 499 Fr.")
                .replace("Grossbasel Ost", "&nbsp; &nbsp; &nbsp; Grossbasel Ost")
                .replace("Grossbasel West", "&nbsp; &nbsp; &nbsp; Grossbasel West")
                .replace("Kleinbasel", "&nbsp; &nbsp; &nbsp; Kleinbasel")
                .replace("Riehen, Bettingen", "&nbsp; &nbsp; &nbsp; Riehen, Bettingen")
                .replace("2011", "&nbsp; &nbsp; &nbsp; 2011")
                .replace("2015", "&nbsp; &nbsp; &nbsp; 2015")
                
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

 
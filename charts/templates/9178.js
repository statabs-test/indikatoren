(function(){
    return {
    "xAxis": {     
        reversed: false,
        "type": "category", 
        "labels": {
            align: 'left',
            reserveSpace: true,
            x: -12,
            formatter: undefined,
            style: {
                fontSize: "10px",
                color: "#000000",
                width: 1,
                whiteSpace: 'nowrap',
                textOverflow: "none"
            },
        }
    },
    "yAxis": {
        "tickInterval": 20,
        "reversedStacks": false,
       
       // ItemMarginTop:5,
        labels: {
            y:10,
            rotation: 0
            },
    },   
    "series": [
        { "color": "#007A2F"}, // dunkelgrün
        { "color": "#73B97C"}, // grün
        { "color": "#FABD24"}, // gelb
        { "color": "#B00000"}, // rot
        { "color": "#C8C8C8"}, // hellgrau
        { "color": "#6F6F6F"}, // grau      
    ], 
    legend: {
        margin: 9,
        "layout": "horizontal",
        "verticalAlign": "top",
        "itemMarginBottom": 0,
        x: -18,
        itemWidth: 142,
        width: 300,
        itemStyle: {
          textOverflow: "none",
          whiteSpace: "nowrap",

        }
      },  
    "chart":
    {
        "inverted": true, 
        marginRight: 8,
        height: 330
        }
	}
}());


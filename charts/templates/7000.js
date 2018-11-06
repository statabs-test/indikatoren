(function(){
    return {
  "plotOptions": {
    "series": {
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  yAxis: {
    maxPadding: 0,
    reversedStacks: false
  },
  legend: {
    enabled: true,
    reversed: true,
    layout: "vertical",
    verticalAlign: "middle",
    align: "right",
    labelFormatter: function(){
      return this.name.replace("Sozialmedizinische ", "Sozialmedizinische<br/>");
    },
  },
  "series": [
   
    {
      "color": "#2E1435",
    },
    {
      "color": "#662673",
    },
    {
      "color": "#923F8D",
    },
     {
      "color": "#B375AB",
    },
     {
      "color": "#E7CEE2",
    },
     {
      "color": "#689199",
    },
     {
      "color": "#246370",
    },
     {
      "color": "#083038",
    },
  ],
  "chart": {    
    "type": "column"
  }
	};
}());

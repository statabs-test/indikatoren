(function(){
    return {
 "plotOptions": {
  "series": {
      "stacking": "percent"
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
      "color": "#246370",
    },
    {
      "color": "#689199",
    },
    {
      "color": "#A8C3CA",
    },
     {
      "color": "#FABD24",
    },
     {
      "color": "#CD9C00",
    },
     {
      "color": "#7F5F1A",
    },
     {
      "color": "#FF8028",
    },
     {
      "color": "#DC440E",
    },
  ],
  "chart": {    
    "type": "column"
  }
	};
}());

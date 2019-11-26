(function(){
    return {
  "xAxis": {
    tickPositioner: function() 
    {
      var positions = [],
      ext = this.getExtremes(),
      xMax = Math.round(ext.max),
      xMin = Math.round(ext.min)+1;
      var xMin_even=Math.round(ext.min);
      if(xMax % 2 == 1) 
      {
        for (var i = xMin; i < xMax; i++) 
        {
        if (i % 2 == 1) 
        {
          positions.push(i);
        }
      }
      positions.push(xMax);
      return positions;
    } 
    else if (xMax % 2 == 0)
    {
      for (var i = xMin_even; i < xMax; i++) 
      {
        if (i % 2 == 0) 
        {
          positions.push(i);
        }
      }
      positions.push(xMax);
      return positions;
    }
  },
    tickInterval: 1,
    labels: { 
      //step: 2,
  		style: { 
  		  //	textOverflow: 'none' // prevents ellipsis
  	  }, 
    } 
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  series: [
    {
      color: "#B00000",
    }, 
    {
      color: "#B00000",
      linkedTo: ":previous",
      marker: {
        enabled: true,
        radius: 2
      }    
    },
  	{
  	  color: "#4f81bd",
    }, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
};
}());
 
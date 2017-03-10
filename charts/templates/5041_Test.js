(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 15,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
	 {"color": "#8B2223", "index": 14}, /*dunkelrot */
	 {"color": "#DC440E", "index": 13}, /*hellrot */
	 {"color": "#FF8028", "index": 12}, /*dunkelorange */
	 {"color": "#FFBB58", "index": 11}, /*dunkelgelb */
	 {"color": "#FFDA80", "index": 10}, /*hellgelb */
	 {"color": "#007A2F", "index": 9}, /*dunkelgrün */
	 {"color": "#D7E8D2", "index": 8}, /*hellgrün1 */
	 {"color": "#73BA7C", "index": 7}, /*hellgrün2 */
	 {"color": "#2B0099", "index": 6}, /*dunkelblau1 */
	 {"color": "#008AC3", "index": 5}, /*dunkelblau2 */
	 {"color": "#B9CFD7", "index": 4}, /*hellblau */
	 {"color": "#672773", "index": 3},  /*dunkelpink */
	 {"color": "#E7CEE2", "index": 2},  /*hellpink */
	 {"color": "#3A2012", "index": 1},  /*schwarz */
	 {"color": "#C8C8C8", "index": 0}  /*grau */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
}
}());

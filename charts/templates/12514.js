(function(){
    return {
      xAxis: {
        "type": "category"
      },
      yAxis: {
        reversedStacks: true,
      },
      legend: {
        reversed: false
      },
      tooltip: {
        valueDecimals: 0
      },
      series: [
        {"color": "#6F6F6F", index:0}, /*grau dunkel2*/
        {"color": "#C8C8C8", index:1}, /*grau mittel*/
        {"color": "#007a2f", index:2}, /*grün dunkel2*/
        {"color": "#44ab2b", index:3}, /*grün mittel*/
        {"color": "#73ba7c", index:4}, /*grün dunkel1*/
        {"color": "#d7e9d2", index:5}, /*grün hell*/
        {"color": "#b9cfd7", index:6}, /*blau hell */
        {"color": "#71a3b5", index:7}, /*blau dunkel */
        {"color": "#ffbb58", index:8}, /*orange hell */
        {"color": "#ff8028", index:9}, /*orange dunkel */
        {"color": "#dc440e", index:10}, /*rot hell */
        {"color": "#b00000", index:11} /*rot dunkel */
      ]
    };
}());

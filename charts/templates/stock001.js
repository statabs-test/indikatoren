/*Extension of RangeSelector*/
(function (H) {
    H.wrap(H.RangeSelector.prototype, 'clickButton', function (proceed, i, redraw) {
  
      //if (typeof this.buttonOptions[i].dateMin != 'undefined' || typeof this.buttonOptions[i].dateMax != 'undefined') {
      if (this.buttonOptions[i].dateMin !== undefined || this.buttonOptions[i].dateMax !== undefined) {
  
        var rangeSelector = this,
          chart = rangeSelector.chart,
          rangeOptions = rangeSelector.buttonOptions[i],
          baseAxis = chart.xAxis[0],
          unionExtremes = (chart.scroller && chart.scroller.getUnionExtremes()) || baseAxis || {},
          dataMin = unionExtremes.dataMin,
          dataMax = unionExtremes.dataMax,
          newMin,
          newMax = baseAxis && Math.round(Math.min(baseAxis.max, H.pick(dataMax, baseAxis.max))), // #1568
          type = rangeOptions.type,
          baseXAxisOptions,
          range = rangeOptions._range,
          rangeMax,
          rangeMin,
          maxSetting,
          minSetting,
          rangeSetting,
          ctx,
          ytdExtremes,
          dataGrouping = rangeOptions.dataGrouping;
  
        //console.log(newMin, newMax, dataMin, dataMax);
  
        newMin = rangeSelector.buttonOptions[i].dateMin;
        newMax = rangeSelector.buttonOptions[i].dateMax;
  
        console.log(newMin, newMax);
  
  
        if (dataMin === null || dataMax === null) { // chart has no data, base series is removeddebugger;
          return;
        }
  
        // Set the fixed range before range is altered
        chart.fixedRange = range;
  
        // Apply dataGrouping associated to button
        if (dataGrouping) {
          this.forcedDataGrouping = true;
          Axis.prototype.setDataGrouping.call(baseAxis || {
            chart: this.chart
          }, dataGrouping, false);
        }
        /*
              // Apply range
              if (type === 'month' || type === 'year') {
                if (!baseAxis) {
                  // This is set to the user options and picked up later when the axis is instantiated
                  // so that we know the min and max.
                  range = rangeOptions;
                } else {
                  ctx = {
                    range: rangeOptions,
                    max: newMax,
                    dataMin: dataMin,
                    dataMax: dataMax
                  };
        
                  //newMin = baseAxis.minFromRange.call(ctx);
                  //if (H.isNumber(ctx.newMax)) {
                  //  newMax = ctx.newMax;
                  //}
                  var rangeSelector = this,
                  newMin = rangeSelector.buttonOptions[i].dateMin;
                  newMax = newMin + range;
                  
                }
                // Fixed times like minutes, hours, days
              } else if (range) {
                //newMin = Math.max(newMax - range, dataMin);
                //newMax = Math.min(newMin + range, dataMax);
                var rangeSelector = this,
                newMin = rangeSelector.buttonOptions[i].dateMin;
                newMax = newMin + range;
        
              } else if (type === 'ytd') {
        
                // On user clicks on the buttons, or a delayed action running from the beforeRender
                // event (below), the baseAxis is defined.
                if (baseAxis) {
                  // When "ytd" is the pre-selected button for the initial view, its calculation
                  // is delayed and rerun in the beforeRender event (below). When the series
                  // are initialized, but before the chart is rendered, we have access to the xData
                  // array (#942).
                  if (dataMax === undefined) {
                    dataMin = Number.MAX_VALUE;
                    dataMax = Number.MIN_VALUE;
                    each(chart.series, function (series) {
                      var xData = series.xData; // reassign it to the last item
                      dataMin = Math.min(xData[0], dataMin);
                      dataMax = Math.max(xData[xData.length - 1], dataMax);
                    });
                    redraw = false;
                  }
                  ytdExtremes = rangeSelector.getYTDExtremes(dataMax, dataMin, H.useUTC);
                  newMin = rangeMin = ytdExtremes.min;
                  newMax = ytdExtremes.max;
        
                  // "ytd" is pre-selected. We don't yet have access to processed point and extremes data
                  // (things like pointStart and pointInterval are missing), so we delay the process (#942)
                } else {
                  addEvent(chart, 'beforeRender', function () {
                    rangeSelector.clickButton(i);
                  });
                  return;
                }
              } else if (type === 'all' && baseAxis) {
                newMin = dataMin;
                newMax = dataMax;
              }
        */
        rangeSelector.setSelected(i);
  
  
        // Update the chart
        if (!baseAxis) {
          // Axis not yet instanciated. Temporarily set min and range
          // options and remove them on chart load (#4317).
          baseXAxisOptions = H.splat(chart.options.xAxis)[0];
          rangeSetting = baseXAxisOptions.range;
          baseXAxisOptions.range = range;
          minSetting = baseXAxisOptions.min;
          maxSetting = baseXAxisOptions.max;
          baseXAxisOptions.min = rangeMin;
          baseXAxisOptions.max = rangeMax;

          H.addEvent(chart, 'load', function resetMinAndRange() {
            baseXAxisOptions.range = rangeSetting;
            baseXAxisOptions.min = minSetting;
            baseXAxisOptions.max = maxSetting;
          });
    }
        else {
            
          // Existing axis object. Set extremes after render time.
          if (this.buttonOptions[i].dateMin !== undefined || this.buttonOptions[i].dateMax !== undefined) {
          baseAxis.setExtremes(
            newMin,
            newMax,
            H.pick(redraw, 1),
            null, // auto animation
            {
              trigger: 'rangeSelectorButton',
              rangeSelectorButton: rangeOptions
            }
          );}
          else{baseAxis.setExtremes(
            DataMin,
            DataMax,
            H.pick(redraw, 1),
            null, // auto animation
            {
              trigger: 'rangeSelectorButton',
              rangeSelectorButton: rangeOptions
            }
          );}
        } 
      } else {
        // Now apply the original function with the original arguments,
        // which are sliced off this function's arguments
        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
      }
    });
  }(Highcharts));
/* global Highcharts */
(function(){
    return {
        "isStock": true,
        "chart": {
            "borderColor": "#fbfbfb",
            "backgroundColor": "#fbfbfb",
            "width": 485,
            "height": 415,        
            "spacingBottom": 30,
            "style": {
                "fontFamily": "Arial"
            },
            "events":{
                "load": function() {
                  this.credits.element.onclick = function() {};
                  //for top-left legends with no x defined: move legend to x position of first yAxis
                  if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
                    this.update(
                      {
                        legend: {
                          x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                        }
                      }
                    );
                  }              
                }
            },
        },    
        "plotOptions": {
            "series": {
                "dataLabels": {
                    "style": {
                    "fontSize": "10px"
                    }
                }
            }
        },
        "title": {
            "style": {
            "fontSize": "14px",
            "fontWeight": "bold",
            "color": "#000000"
            },
            "align": "left"
        },
        "subtitle": {
            "style": {
            "fontSize": "12px",
            "fontWeight": "normal",
            "fontFamily": "Arial",
            "color": "#000000"
            },
            "text": "",
            "align": "left"
        },
        "xAxis": {
            minRange: 3600 * 1000,
            lineColor: '#B9CFD7', 
            lineWidth: 0.5,
            //"uniqueNames": true,
            "ordinal": false,
            "title": {
                "style": {
                    "color": "#000000"
                }
            },
            "labels": {
                "style": {
                    "color": "#000000"
                }
            },
            "tickLength": 0,
        }, 
        "yAxis": {
            gridLineColor: '#B9CFD7', 
            gridLineWidth: 0.5,
            lineColor: '#B9CFD7', 
            "title": {
                "style": {
                    "color": "#000000",
                    "fontSize": null
                },
                "text": null
            },
            "labels": {
                //"y": 3,
                "style": {
                    "color": "#000000"
                }
            }
        },    
    	"navigation": {
    		"menuItemStyle": {
    			"fontFamily": Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
    			"padding": '2px 10px'
    		}
    	},
        "credits": {
            "enabled": true,
            "style": {
                "color": "#000000",
                "fontSize": "10px",
                "cursor": "default"
            },
            "position": {
                "align": "left",
                "verticalAlign": "bottom",
                "x": 10
            }
        },
        "legend": {
            symbolRadius: 0, 
            itemStyle: {
                fontWeight: "normal",
            },
        }, 
        "rangeSelector": {
            verticalAlign: 'bottom',
            buttonPosition: {
                //x: -27,
                //y: 312
                
            }
        },
        navigator: {
            margin: 10, 
            height: 30,
            series: {
                includeInCSVExport: false
            },
            outlineColor: '#B9CFD7'
        }, 
        tooltip: {
            dateTimeLabelFormats: {
                day:"%A, %e. %b. %Y"
            }
        },
        exporting: {
            csv: {
                dateFormat: '%d.%m.%Y'
            }
        }
	};
}());
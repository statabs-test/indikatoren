(function(H) {
  H.wrap(H.RangeSelector.prototype, 'clickButton', function(proceed, i, redraw) {
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
      rangeMin,
      minSetting,
      rangeSetting,
      ctx,
      ytdExtremes,
      dataGrouping = rangeOptions.dataGrouping;

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

        newMin = dataMin;
        newMax = newMin + range;
      }
      // Fixed times like minutes, hours, days
    } else if (range) {
      //newMin = Math.max(newMax - range, dataMin);
      //newMax = Math.min(newMin + range, dataMax);

      newMin = dataMin;
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
          each(chart.series, function(series) {
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
        addEvent(chart, 'beforeRender', function() {
          rangeSelector.clickButton(i);
        });
        return;
      }
    } else if (type === 'all' && baseAxis) {
      newMin = dataMin;
      newMax = dataMax;
    }
    rangeSelector.setSelected(i);

    // Update the chart
    if (!baseAxis) {
      // Axis not yet instanciated. Temporarily set min and range
      // options and remove them on chart load (#4317).
      baseXAxisOptions = H.splat(chart.options.xAxis)[0];
      rangeSetting = baseXAxisOptions.range;
      baseXAxisOptions.range = range;
      minSetting = baseXAxisOptions.min;
      baseXAxisOptions.min = rangeMin;
      H.addEvent(chart, 'load', function resetMinAndRange() {
        baseXAxisOptions.range = rangeSetting;
        baseXAxisOptions.min = minSetting;
      });
    } else {
      // Existing axis object. Set extremes after render time.
      baseAxis.setExtremes(
        newMin,
        newMax,
        H.pick(redraw, 1),
        null, // auto animation
        {
          trigger: 'rangeSelectorButton',
          rangeSelectorButton: rangeOptions
        }
      );
    }
  });
}(Highcharts));

(function () {
  return {

    "yAxis": {
      showLastLabel: true,
      endOnTick: true,

      labels: {
        format: "{value:,.0f}",
      },
      opposite: false,
    },
    "xAxis": {
      endOnTick: true,
      startOnTick: true,
      showFirstLabel: true,
      showLastLabel: true,
      ordinal: false,
     
      labels: {
        //  rotation: -45
      }


    },
    "tooltip": {
      shared: true, 
      split: false,
      xDateFormat: '%Y-%m',
      "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    "series": [
      {
        "color": "#68AB2B",
        "marker": {
          "enabled": false
        }
      }, 
      {
        "color": "#008AC3",
        "marker": {
          "enabled": false
        }
      }, /* violett */
      {
        "color": "#FABD24",
        "marker": {
          "enabled": false
        }
      }, /* rot */

    ],
    "legend": {
      "enabled": true,
      //"x": 50,
      //"y": 25,
      //"itemWidth": 150,
      "layout": "horizontal",
      "verticalAlign": "top",
      "itemMarginBottom": 5,
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal"
      }
    },

    /*data: {
      //convert year in first column to UTC date to be used by Highstock
      parsed: function(columns){
          columns[0].forEach(function(v, i, a){
              columns[0][i] = Date.UTC(columns[0][i]);
          });
      }
    }, */
    rangeSelector: {
      //enabled:  false,
      buttonTheme: {
        width: null
      },
      buttons:
        [
          {
            count: 14,
            type: 'year',
            text: 'ohne 2020'
        },
          {

            type: 'all',
            text: 'Alle Jahre'
          }

  

    ],
    buttonSpacing: 40,
    enabled: true,
    inputEnabled: false,
    selected: 1,
    inputDateFormat: '%Y',
    inputEditDateFormat: '%Y'
  }, 

  
}
}());

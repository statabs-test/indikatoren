/*  global Highcharts 
    global $
*/
Highcharts.setOptions({
	"lang": {
		"downloadJPEG": "JPEG",
		"resetZoom": "Zoom zurücksetzen",
		"resetZoomTitle": "Zoom zurücksetzen 1:1",
		"printChart": "Drucken",
		"downloadSVG": "SVG",
		"downloadPNG": "PNG",
		"decimalPoint": ",",
		"contextButtonTitle": "Exportieren und drucken",
		"downloadPDF": "PDF",
		"downloadCSV": 'CSV',
		"downloadXLS": 'XLS',		
        "thousandsSep": " ",
        months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        rangeSelectorFrom: "Von",
        rangeSelectorTo: "Bis",
        rangeSelectorZoom: "Zeitraum:"
	},
	"exporting": {
        "sourceWidth": null,
        "scale": 5,
        "buttons": {
            "contextButton": {
                "text": "",
                "menuItems": Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 7)     
                /*
                Highcharts.getOptions().exporting.buttons.contextButton.menuItems.slice(0, 7).push({"textKey": "Test", "onclick": function(){ console.log('Test was clicked.'); }}) 
                 */           
            }
        }
    },
    "navigation": {
        "menuItemStyle": {
            "fontFamily": Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
            "padding": '0px 10px'
        }
    }
});

//Add "Einbetten" menu item
var indikatorensetView = ($.url('?Indikatorenset') || $.url('?indikatorensetView') ) ? true : false;
var indikatorensetParameter = indikatorensetView ? '&indikatorensetView=' + indikatorensetView : '';
Highcharts.getOptions().exporting.buttons.contextButton.menuItems.push(
    {
        "text": "URL", 
        "onclick": function(){            
            window.open($.url('protocol') + '://' + $.url('hostname') + ':' + $.url('port') + '/' + $.url(1) + '/chart.html?id=' + this.renderTo.id.substring(10) + indikatorensetParameter + "&suppressNumberInTitle=true", '_blank'); 
        }
    });
    

    
//define new chart type
// source: https://www.highcharts.com/blog/data-journalism/effectively-visualizing-us-election-results/, 
//  which displays  http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/maps/demo/map-pies/

    
// New map-pie series type that also allows lat/lon as center option.
// Also adds a sizeFormatter option to the series, to allow dynamic sizing
// of the pies.
Highcharts.seriesType('mappie', 'pie', {
    center: null, // Can't be array by default anymore
    clip: true, // For map navigation
    states: {
        hover: {
            halo: {
                size: 5
            }
        }
    },
    dataLabels: {
        enabled: false
    }
}, {
    getCenter: function () {
        var options = this.options,
            chart = this.chart,
            slicingRoom = 2 * (options.slicedOffset || 0);
        if (!options.center) {
            options.center = [null, null]; // Do the default here instead
        }
        // Handle lat/lon support
        if (options.center.lat !== undefined) {
            var point = chart.fromLatLonToPoint(options.center);
            options.center = [
                chart.xAxis[0].toPixels(point.x, true),
                chart.yAxis[0].toPixels(point.y, true)
            ];
        }
        // Handle dynamic size
        if (options.sizeFormatter) {
            options.size = options.sizeFormatter.call(this);
        }
        // Call parent function
        var result = Highcharts.seriesTypes.pie.prototype.getCenter.call(this);
        // Must correct for slicing room to get exact pixel pos
        result[0] -= slicingRoom;
        result[1] -= slicingRoom;
        return result;
    },
    translate: function (p) {
        this.options.center = this.userOptions.center;
        this.center = this.getCenter();
        return Highcharts.seriesTypes.pie.prototype.translate.call(this, p);
    }
});



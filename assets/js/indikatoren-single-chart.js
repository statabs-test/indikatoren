
/*  
global $
global jQuery
global idByKuerzel
global kuerzelById
global lazyRenderChartById
global exportThumbnail
*/

//get kuerzel and id from url, encode to prevent xss 
//todo: in order to prevent xss: do not evaluate chart templates but just load json. Functions need to be taken out of the templates. 
var kuerzel = window.decodeURIComponent($.url('?kuerzel'));               
var id = window.decodeURIComponent($.url('?id'));
var suppressNumberInTitle = (window.decodeURIComponent($.url('?suppressNumberInTitle')) === 'true') ? true : false;

//check if kuerzel or id is member in the list of existing charts
if (idByKuerzel[kuerzel] || kuerzelById[id]){
//if no id is given, retrieve it using kuerzel (and same for kuerzel)
if (id == 'undefined') {
  id = idByKuerzel[kuerzel];
}
if (kuerzel == 'undefined') {
  kuerzel = kuerzelById[id];
}
$.getJSON('metadata/single/'+ id + '.json').done(function(chartMetadata, textStatus){     
    //create div for chart
    jQuery('<div/>', {
      id: 'container-' + id,
    }).appendTo('body');
  

    //check if chart needs to be exported, and how
    var exportType = window.decodeURIComponent($.url('?thumbnailType'));

    var indikatorensetView = (window.decodeURIComponent($.url('?indikatorensetView')) === 'true') ? true : false;
    var view = window.decodeURIComponent($.url('?view'));
    if (!(view == 'indikatorenset' || view == 'portal' || view == 'print')) {
      view = indikatorensetView;
    }
    
    //check if the chart's svg should be saved into a 2nd hidden div for casperjs
    var hiddenSVG = (window.decodeURIComponent($.url('?hiddenSVG')) === 'true') ? true : false;
    
    lazyRenderChartById(id, chartMetadata, view, suppressNumberInTitle, function(){
      
      //make sure we have the complete chart with the renderTo object, which contains the kuerzel
      if (this.renderTo){                        
        //determine if offline exporting necessary
        var thumbnailOfflineExporting = (window.decodeURIComponent($.url('?thumbnailOfflineExporting')) === "true") ? true : false ;      
        var exportServer = window.decodeURIComponent($.url('?exportServer'));
        //load offline exporting module first if required, then invoke createThumbnail()
        (thumbnailOfflineExporting) 
          ? $.getScript('assets/js/highcharts-offline-exporting-4.2.6.js', function(){createThumbnail(id, kuerzel, exportType, thumbnailOfflineExporting);}) 
          : createThumbnail(id, kuerzel, exportType, thumbnailOfflineExporting, exportServer);
        
        //add a hidden div with the contents of the svg in order for it to be captured by casperjs
        if (hiddenSVG){  
          setTimeout(function(){
            //save the contents of the svg element to be harvested by casper to save into svg if necessary
            window.svg = $('svg').clone().wrap('<svg>').parent().html();
            //console.log(window.svg);
            $('body').append('<div id="chartSVG" class="hidden"> ' + window.svg + ' </div>');
            //remove highcharts buttons from svg
            $('#chartSVG .highcharts-button').remove();
            $('body').append('<div id="renderDone"/>');
          }, 1000);
        }
      }                     
    });
});
}
else {
//display error message
$('body').append('<div class="container"><div class="jumbotron"><h1>Ooops...</h1><p>Kein Chart mit diesem Kürzel bzw. dieser id gefunden.</p></div></div>');
}


function createThumbnail(id, kuerzel, exportType, thumbnailOfflineExporting, exportServer){                  
switch (exportType){
  case "jpg":                 
    exportThumbnail(id, "image/jpeg", thumbnailOfflineExporting, exportServer);                     
    break;                    
  case "png": 
    exportThumbnail(id, "image/png", thumbnailOfflineExporting, exportServer);
    break;
  case "svg":              
    exportThumbnail(id, "image/svg+xml", thumbnailOfflineExporting, exportServer);
    break;           
}
}
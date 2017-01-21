(function(){
    return {
	"series": [{
		"color": "#689199"
	}],
	"data": {
	    "parsed": function (columns) {
	    	
	    	//copy columns to the end, then remove the first 5
	    	columns.push(columns[3]);
	    	columns.push(columns[1]);
	    	columns.push(columns[2]);
	    	columns.splice(0,5);
    	}
	},
	"yAxis": {
		"labels": {
            "formatter": function(){
                return Highcharts.numberFormat((this.value), 0, ".", " ");                
            }
        }		
    },
	"tooltip": {
        "pointFormatter": function(){
            //rank is calculated from index, thus data needs to be sorted by rank ascending.
            return '<span style="color:{series.color}">' + this.series.data[this.x].name + '</span>: <b>Fr. ' + Highcharts.numberFormat(this.y, 0, "," ," ") + '</b><br/>Rang <b>' + parseInt(this.x + 1) + '</b>'                
        }
    }
	}
}());

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199
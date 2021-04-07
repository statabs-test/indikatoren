async function fetch_data(path) {
    let file_obj = await fetch(path);
    let text = await file_obj.text();
    return text;
}

function build_dict(text) {
    let thedict = {};
    let rec = [];
    let lines = text.split(/\r?\n/);
    let sep_char = "\t";
    var i;
    for (i = 0; i < lines.length; i++) {        
        let line = lines[i];
        if (line.length > 0) {
            let rec = []
            let items = line.split(sep_char);
            let year = parseInt(items.shift());
            if (!thedict[year]) {
                thedict[year] = []
            }                
            items.forEach(function(item){
                rec.push(item);
            });
            rec[0] = rec[0].trim()
            rec[1] = rec[1].trim()
            rec[2] = parseFloat(rec[2])
            thedict[year].push(rec);        
        }        
    }
    return thedict;
};

<<<<<<< HEAD
/*
=======
/* has to generate the correct format!
>>>>>>> e2d9f4a7699191dc5aba2774182a743088fb3af7
function build_nodes(allnodes, year) {
    let thearr = [];
    let lines = allnodes.split(/\r?\n/);
    let sep_char = "\t";
    var i;
    for (i = 0; i < lines.length; i++) {        
        let line = lines[i];
        if (line.length > 0) {
            let items = line.split(sep_char);
            let node_year = parseInt(items.shift());
            if (node_year == year) {
                var obj =
                    {
                    id: items[0].trim(),
                    color: items[1].trim(),
                    column: parseInt(items[2]),
                    offset: parseInt(items[3])
                    };
                thearr.push(obj);
            }
        }        
    }
    return thearr;
};
*/

function set_dropdown(sel, years) {
    var sel = document.getElementById('theyears');
	for (i = 0; i < years.length; i++) {
		var opt = document.createElement('option');
		opt.value = years[i];
        opt.innerHTML = years[i];
        sel.appendChild(opt);
	}
	return sel.value = years[0];
};

function create_sankey_chart(dict, year) {
    //nodes_for_one_year = build_nodes(thenodes, year);
    let oneyear = dict[year];
    chart = Highcharts.chart('container', {
        chart: {
            inverted: false
        },
        title: {
            text: 'Highcharts Sankey Energieflussdiagramm ' + year
        },
        accessibility: {
            point: {
              valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
            }
        },
        series: [{
            keys: ['from', 'to', 'weight'],
            data: oneyear,
            type: 'sankey',
            name: 'Sankey series',
            curveFactor: 0.33,
            tooltip: {
                pointFormat: '{point.fromNode.name} → {point.toNode.name}: <b>{point.weight:.1f} GWh</b><br/>',
                nodeFormat: '{point.name}: <b>{point.sum:.1f} GWh</b><br/>'
            },
            nodes: [{
                id: 'Wasserkraft',
                column: 0,
                color: '#008AC3'
            },
            {
                id: 'Umwandler Thermisch',
                column: 1,
                offset: -120,
                color: '#B00000'
            },
            {
                id: 'Fernwärmenetz',
                column: 2,
                offset: -65,
                color: '#B00000'
            },
            {
                id: 'Umweltwärme',
                column: 0,
                color: '#B00000'
            },
            {
                id: 'Sonne',
                column: 0,
                color: '#FF8028'
            },
            {
                id: 'Stromnetz',
                column: 2,
                offset: 60,
                color: '#008AC3'
            },
            {
                id: 'Holz',
                column: 0,
                color: '#007A2F'
            },
            {
                id: 'Abfall',
                column: 0,
                color: '#45381D'
            },
            {
                id: 'Erdgas',
                column: 0,
                color: '#FABD24'
            },
            {
                id: 'Heizöl',
                column: 0,
                color: '#923F8D'
            },
            {
                id: 'Diesel',
                column: 0,
                color: '#474747'
            },
            {
                id: 'Benzin',
                column: 0,
                color: '#246370'
            },
            {
                id: 'Elektrizität',
                column: 0,
                color: '#008AC3'
            },
            {
                id: 'Gasnetz',
                column: 1,
                offset: -40,
                color: '#FABD24'
            },
            {
                id: 'Umwandler Wasser/Photovoltaik',
                column: 1,
                offset: -200,
                color: '#008AC3'
            },
            {
                id: 'Fernwärme (Import)',
                column: 0,
                color: '#B00000'
            },
            {
                id: 'Verluste',
<<<<<<< HEAD
                column: 4,
=======
                column: 3,
>>>>>>> e2d9f4a7699191dc5aba2774182a743088fb3af7
                offset: -430,
                color: '#6F6F6F'
            },
            {
                id: 'Nichtwohnen',
                column: 3,
                offset: 50,
                color: '#6F6F6F'
            },
            {
                id: 'Wohnen',
                column: 3,
                offset: 80,
                color: '#6F6F6F'
            },
            {
                id: 'Verkehr',
                column: 3,
                offset: 50,
                color: '#6F6F6F'
            },
            {
                id: 'Exporte',
                column: 3,
                offset: -430,
                color: '#6F6F6F'
            }
            ]
        }]
    })
};

$(document).ready(function(){
    fetch_data('./ef_flows.tsv').then(theflows => {
//        fetch_data('./ef_nodes.tsv').then(thenodes => {
            dict = build_dict(theflows);
            var dd = document.getElementById('theyears');
            set_dropdown(dd, Object.keys(dict).sort().reverse());
            create_sankey_chart(dict, dd.value);
            dd.addEventListener ("change", function () {
                fetch_data('./ef_flows.tsv').then(theflows => {
                    dict = build_dict(theflows);            
                    create_sankey_chart(dict, this.value);
                })
            });
//        })
    })
});
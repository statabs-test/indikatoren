/*global $*/
(function () {
	return {
		plotOptions: {
			pie: {
				size: 250,
			},
			series: {
				allowPointSelect: false,
				point: {
					events: {
						legendItemClick: function (event) {
							event.preventDefault();
						}
					}
				}
			}
		},
		legend: {
			layout: "horizontal",
			verticalAlign: "top",
			align: "left",
			itemDistance: 2,
			style: {
				fontSize: "12px"
			}
		},
		/*data: {
			seriesMapping: [
				{
					x: 0, y: 2
				},
				{
					x: 0, y: 1
				}
			]
		},*/
		"series": [{
			visible: false,
			showInLegend: false,
/*			type: 'pie',
			innerSize: '100%'			
*/
		}, {
			showInLegend: false,
			type: 'pie',
			innerSize: '40%',
			borderWidth: 0,
			colors: [
				'#FFDA80',
				'#CD9C00',
				'#45381D',
			],
			dataLabels: {
				enabled: true,
				format: '{point.name}',
				distance: 15,
				connectorWidth: 0,
				style: {
					color: 'black',
					textOutline: "0px black",
					fontWeight: "normal",
					fontSize: "12px"
				}
			}/*,

			/*,
		   dataLabels: {
			 enabled: true,
				   format: '{point.percentage:.0f}%',
				   distance: -35,
				   style: {
					   color: 'contrast',
					   textOutline: "0px black", 
					   fontWeight: "normal", 
					   fontSize: "12px"
				   }
		   }*/
		}],

		"tooltip": {
			"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.1f}%)<br/><br/>',
			"shared": false
		}
	};
}());

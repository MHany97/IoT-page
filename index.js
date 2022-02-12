
var point1 = 22.522;
      	  	var point2 = 22.3445;
      	  	var point3 = 22.112;
      	  	var point4 = 22.112;
      	  	var point5 = 21.8245;
      	  	var point6 = 21.482;
      	  	var point7 = 21.0845;
      	  	var point8 = 20.632;
      	  	var point9 = 20.1245;	
      	  	var point10 = 
      	  	var point11 =
      	  	var point12 =
      	  	var point13 =
      	  	var point14 =
      	  	var point15 =
      	  	var point16 =
      	  	var point17 =
      	  	var point18 =






      	  	 window.onload = function () {
			      	

			var chart = new CanvasJS.Chart("chartContainer", {
				animationEnabled: true,
				zoomEnabled: false,
				theme: "light",
				title:{
					text: "Pump & System Curve"
				},
				axisX:{
					title: "Flow (L/mins)",
					valueFormatString: "####",
					interval: 5
				},
				axisY:{ // Blue line Pump
					logarithmic: false, //change it to false
					title: "Pump's Performance Curve",
					titleFontColor: "#6D78AD",
					lineColor: "#6D78AD",
					gridThickness: 0,
					lineThickness: 1,
					includeZero: false,
					labelFormatter: addSymbols
				},
				axisY2:{
					title: "Ssytem Curve",
					titleFontColor: "#51CDA0",
					logarithmic: false, //change it to true
					lineColor: "#51CDA0",
					gridThickness: 0,
					lineThickness: 1,
					labelFormatter: addSymbols
				},
				legend:{
					verticalAlign: "top",
					fontSize: 16,
					dockInsidePlotArea: true
				},
				data: [{//data of Blue line (pump)
					type: "line",
					xValueFormatString: "####",
					showInLegend: true,
					name: "Log Scale",
					dataPoints: [
						{ x: 0, y: 22.522 },
						{ x: 5, y: 22.3445 },
						{ x: 10, y: 22.112 },
						{ x: 15, y: 21.8245 },
						{ x: 20, y: 21.482 },
						{ x: 25, y: 21.0845 },
						{ x: 30, y: 20.632 },
						{ x: 35, y: 20.1245 },
						{ x: 40, y: 19.562 },
						{ x: 45, y: 18.9445 },
						{ x: 50, y: 18.272 },
						{ x: 55, y: 17.5445 },
						{ x: 60, y: 16.762 },
						{ x: 65, y: 15.9245 },
						{ x: 70, y: 15.032 },
						{ x: 75, y: 14.0845 },
						{ x: 80, y: 13.082 },
						{ x: 85, y: 12.0245 }
			
					]
				},
				{
					type: "line",
					xValueFormatString: "####",
					axisYType: "secondary",
					showInLegend: true,
					name: "Linear Scale",
					dataPoints: [//system Curve Data
						{ x: 0, y: 1.5 },
						{ x: 5, y: 1.8555 },
						{ x: 10, y: 2.356 },
						{ x: 15, y: 3.0015 },
						{ x: 20, y: 3.792 },
						{ x: 25, y: 4.7275 },
						{ x: 30, y: 5.808 },
						{ x: 35, y: 7.0335 },
						{ x: 40, y: 8.404 },
						{ x: 45, y: 9.9195 },
						{ x: 50, y: 11.58 },
						{ x: 55, y: 13.3855 },
						{ x: 60, y: 15.336 },
						{ x: 65, y: 17.4315 },
						{ x: 70, y: 19.672 },
						{ x: 75, y: 22.0575 },
						{ x: 80, y: 24.588 },
						{ x: 85, y: 27.2635 }
					
					]
				}]
			});
			chart.render();

			function addSymbols(e){
				var suffixes = ["", "K", "M", "B"];

				var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
				if(order > suffixes.length - 1)
					order = suffixes.length - 1;

				var suffix = suffixes[order];
				return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}

}


/*
let canvas=document.querySelector('canvas');
canvas.width=1000;
canvas.height=500;

let xGrid=10;
let yGrid=10;
let cellsize=10
;
let ctx=canvas.getContext('2d');

function drawGrids(){
	ctx.beginPath();
	while(xGrid<canvas.height){
		ctx.moveTo(0,xGrid);
		ctx.lineTo(canvas.width,xGrid);
		xGrid+=cellsize;
	}
		while(yGrid<canvas.width){
		ctx.moveTo(yGrid,0);
		ctx.lineTo(yGrid,canvas.height);
		yGrid+=cellsize;
	}
ctx.strokeStyle="grey";	
ctx.stroke();

}

function blocks(count){
	return count*10;
}

function drawAxis(){
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.moveTo(blocks(5),blocks(5));
	ctx.lineTo(blocks(5),blocks(40));
	ctx.stroke();
}
drawGrids();
drawAxis();
*/



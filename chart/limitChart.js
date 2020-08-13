var limDiv = document.getElementById('limitChart');

//Define configuration for plotly layouts
var config = {responsive: true}

var dias = Array.apply(null, {length: 31}).map(Number.call, Number)


var Gastos = {
  type: 'scatter',//Can be changed to 'bars'
  x: dias,
  y: [0,100,1000,2500,3100,3250,3650],
  mode: 'lines+markers',
  name: 'Gastos',
  showlegend: true,
  hoverinfo: 'all',
  line: {
    color: 'RGB(0, 0, 128)',
    width: 2
  },
  marker: {
    color: 'RGB(0, 0, 128)',
    size: 8,
    symbol: 'circle',
  }
}

/* Code to insert specific Points in graph
var Point = {
  type: 'scatter',
  x: [6,9],
  y: [-1,8],
  mode: 'markers',
  name: 'Point',
  showlegend: true,
  marker: {
    color: 'rgb(255,65,54)',
    line: {width: 3},
    opacity: 0.5,
    size: 12,
    symbol: 'circle-open'
  }
}
*/
//Defines the limits of the graph, each var defines new limits

//presupuesto total
var PresupTotal = {
  type: 'scatter',
  x: [0.5, 31, null],//X coordinates of both limits, separated by null
  y: [9000, 9000, null],//Y coordinates of both limits separated by null
  mode: 'lines',
  name: 'Presupuesto total',
  showlegend: true,
  line: {
    color: 'RGB(205, 92, 92)',
    width: 2,
    dash: 'straight'
  }
}

//Tope de gastos
var TopeGasto = {
  type: 'scatter',
  x: [0.5, 31, null],//X coordinates of both limits, separated by null
  y: [7500, 7500, null],//Y coordinates of both limits separated by null
  mode: 'lines',
  name: 'Tope de gastos',
  showlegend: true,
  line: {
    color: 'RGB(250, 128, 114)',
    width: 2,
    dash: 'dash'
  }
}
//Defines the center line of the graph
var Centre = {
  type: 'scatter',
  x: [0.5, 31],
  y: [0, 0],
  mode: 'lines',
  name: '0',
  showlegend: false,
  line: {
    color: 'grey',
    width: 2
  }
}

//Include all the components of the graph
var data = [Gastos,PresupTotal, TopeGasto,Centre]

var layout = {
  title: 'Finanzas generales',
  xaxis: {
    zeroline: false
  },
  yaxis: {
    range: [-10000,10000],
    zeroline: false
  }
}

//generate plot
Plotly.newPlot(limDiv, data, layout, config);
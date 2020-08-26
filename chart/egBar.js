var ingDiv = document.getElementById('egresoBar');

//Define configuration for plotly layouts
var config = {responsive: true}

function name(params) {
  
}

var trace1 = {
  x: ['Egresos', 'Gastos de Precampaña','Gastos de Propaganda', 'Gastos Operativos de la Precampaña','Gastos de Propaganda Exhibida en Salas de Cine', 'Gastos de Propaganda Exhibida en Páginas de Internet','Gastos de Propaganda en Diarios, Revistas y Otros Medios Impresos', 'Propaganda en Vía Pública','Gastos Financieros'],
  y: [30, 15, 7, 10, 12, 20, 17, 5, 9],
  marker:{
    color: ['rgba(205,92,92,1)', 'rgba(205,92,92,1)', 'rgba(205,92,92,1)', 'rgba(205,92,92,1)', 'rgba(205,92,92,1)', 'rgba(205,92,92,1)', 'rgba(205,92,92,1)', 'rgba(205,92,92,1)', 'rgba(205,92,92,1)']
  },
  type: 'bar'
};

var data = [trace1];

var layout = {
  yaxis: {
    title: "Pesos MXN"
	},
  title: 'Egresos',
};

Plotly.newPlot(ingDiv, data, layout, config);
  
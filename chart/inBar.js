var ingDiv = document.getElementById('ingresoBar');

/*
function cargardatos(){
    fetch('Datosin.json')
    .then(respuesta => respuesta.json())
    .then(dinero => { 
      dinero.forEach(Valor => {
        const row = document.createElement ('tr');
        row.innerHTML +=;
        
      });
    })
}

cargardatos();
*/
//Define configuration for plotly layouts
var config = {responsive: true}

var trace1 = {
    x: ['Ingresos', 'Financiamiento Privado','Aportaciones de Simpatizantes', 'Aportaciones del Candidato Independiente (Aspirante)','Autofinanciamiento', 'Otros Ingresos','Rendimientos Financieros, Fondos y Fideicomisos', 'Rendimientos Bancarios'],
    y: [30, 15, 7, 10, 12, 20, 17, 5],
    marker:{
      color: ['rgba(9,0,182,1)', 'rgba(9,0,182,1)', 'rgba(9,0,182,1)', 'rgba(9,0,182,1)', 'rgba(9,0,182,1)', 'rgba(9,0,182,1)', 'rgba(9,0,182,1)', 'rgba(9,0,182,1)']
    },
    type: 'bar'
  };
  
  var data = [trace1];
  
  var layout = {
  yaxis: {
    title: "Pesos MXN"
  },
    title: 'Ingresos',
  };
  
  Plotly.newPlot(ingDiv, data, layout, config);
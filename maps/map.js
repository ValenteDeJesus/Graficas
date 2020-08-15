const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let map = L.map('map').setView([20.51,-98.82],8)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




let aliado1 = L.marker([21.132512928434423,-98.41705083847047]).addTo(map)
let aliado2 = L.marker([20.117290583460015,-98.76495480537416]).addTo(map)
let aliado3 = L.marker([20.06034042502071, -99.22166526317598]).addTo(map)
/*code to create custom marker
let iconMarker = L.icon({
	iconUrl: 'marker.png',
	iconSize: [60,60],
	iconAnchor: [30,60]

})

let marker2 = L.marker([20.15,-98.78], {icon: iconMarker}).addTo(map)
*/

/* IMPORTANT features forcustom style
L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
        }
    }
}).addTo(map);


fetch(
	"json/secciones.geojson"
	).then(
	res => res.json()
	).then(
	data => {
		orig = L.geoJSON(data, {
    	color: "#000000"
        }
	).addTo(map)
	}
	)

*/
//L.geoJSON(states).addTo(map);

changeMap("json/entidad.geojson")

map.on('dblclick', e => {
	let latLng = map.mouseEventToLatLng(e.originalEvent)
	console.log(latLng)
})




document.getElementById('select-division').addEventListener('change', function(e){
  map.removeLayer(orig)
  let op = e.target.value;
  switch (op) {
            case "0": changeMap("json/entidad.geojson"); break;
            case "1": changeMap("json/municipios.geojson"); break;
            case "2": changeMap("json/distritos_federales.geojson");break;
            case "3": changeMap("json/distritos_locales.geojson");break;
            case "4": changeMap("json/secciones.geojson");break;

        }
});



function changeMap(route){
	//window.polygon.remove()
	fetch(
	route
	).then(
	res => res.json()
	).then(
	data => {
		orig = L.geoJSON(data, {
    	color: "#000000"
        }
	).addTo(map)
	}
	)
}


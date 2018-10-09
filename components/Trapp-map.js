var mymap = L.map('mapid').setView([6.46026302, -75.55745681], 15);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoic2FudHl4Z21vIiwiYSI6ImNqbXpnbG11NjFvM3kzd3J1NzNpd3I4bHYifQ.ZGsBaXft_zntqyRsrbC2Aw'  
}).addTo(mymap);
L.marker([6.461419, -75.556896], {draggable: true}).addTo(mymap)
.bindPopup('Parqueadero Michus');
L.marker([6.460492, -75.556027], {draggable: true}).addTo(mymap)
.bindPopup('Parqueadero La 49');
L.marker([6.461014, -75.555426], {draggable: true}).addTo(mymap)
.bindPopup('Parqueadero San Mateo');
L.marker([6.462805,-75.558076], {draggable: true}).addTo(mymap)
.bindPopup('Parqueadero El Desvare');
L.marker([6.459543, -75.556751], {draggable: true}).addTo(mymap)
.bindPopup('Parqueadero El Faro');
L.marker([6.462987, -75.558307], {draggable: true}).addTo(mymap)
.bindPopup('Parqueadero Full Autos Belén');
L.marker([6.462486, -75.554503], {draggable: true}).addTo(mymap)
.bindPopup('Parqueadero La Capilla');

var mymap = L.map('mapid', { zoomControl:false }).setView([6.46026302, -75.55745681], 17);

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
{
    maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      id: 'mapbox.streets',
      
      accessToken: 'pk.eyJ1Ijoic2FudHl4Z21vIiwiYSI6ImNqbXpnbG11NjFvM3kzd3J1NzNpd3I4bHYifQ.ZGsBaXft_zntqyRsrbC2Aw'  
}).addTo(mymap);
L.marker([6.461419, -75.556896], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#Michus">Parqueadero Michus</a>');
L.marker([6.460492, -75.556027], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#La49">Parqueadero La 49</a>');
L.marker([6.461014, -75.555426], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#Sanmateo">Parqueadero San Mateo</a>');
L.marker([6.462805,-75.558076], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#Eldeavare">Parqueadero El Desvare</a>');
L.marker([6.459543, -75.556751], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#ElFaro">Parqueadero El Faro</a>');
L.marker([6.462987, -75.558307], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#Fullautos">Parqueadero Full Autos Belén</a>');
L.marker([6.462486, -75.554503], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#capilla">Parqueadero La Capilla</a>');
L.marker([6.459618, -75.560109], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#Barandales">Parqueadero Barandales</a>');
L.marker([6.459703,  -75.559063], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#Eltrebol">Parqueadero El Trebol</a>');
L.marker([6.457687, -75.557655], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#Laplazuela">Parqueadero La Plazula</a>');
L.marker([6.458718, -75.559703], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#Laterminal">Parqueadero La Terminal</a>');
L.marker([6.45891, -75.556737], {draggable: true}).addTo(mymap)
.bindPopup('<a href="?infoparqueadero#Sanpedro">Parqueadero San Pedro</a>');

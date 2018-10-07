var mymap = L.map('mapid').setView([6.265269699999999, -75.5668732], 13);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoic2FudHl4Z21vIiwiYSI6ImNqbXpnbG11NjFvM3kzd3J1NzNpd3I4bHYifQ.ZGsBaXft_zntqyRsrbC2Aw'  
}).addTo(mymap);


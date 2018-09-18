function initialize() {
  var myLatLng = { lat: 6.45974417, lng: -75.56051518 };
  var myLatLng1 = { lat: 6.45783928, lng: -75.55760157 };
  var myLatLng2 = { lat: 6.45878471, lng: -75.55973734 };
  var myLatLng3 = { lat: 6.45966955, lng: -75.55890049 };
  var mapOptions = {
    zoom: 16,
    center: myLatLng
  }





  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Parqueadero #1'
  });

  var marker2 = new google.maps.Marker({
    position: myLatLng1,
    map: map,
    title: 'Parqueadero La Plazuela'
  });

  var marker3 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'Parqueadero #3'
  });

  var marker4 = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    title: 'Parqueadero El Trebol'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

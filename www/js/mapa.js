function initMap() {
  var myLatLng = {lat: -2.53073, lng:  -44.3068};
  var map = new google.maps.Map(document.getElementById('map'), {
    center:  myLatLng,
    zoom: 12
    
  });
    // pontos
    
        var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: 'images/cred.png'
          
        });
    
    


    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h5 id="firstHeading" class="firstHeading">Minha Localização</h5>'+
      '<div id="bodyContent">'+
          
      
      '</div>'+
      '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
         
        
        });
    
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Localização do ponto do usuario se o navigator.geolocation for igual navigator.geolocation.getCurrentPosition, posição real.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var marker = new google.maps.Marker({
    position: pos,
    map: map,
    
    title: 'Estou Aqui'
  });
    
     marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // O navegador não suporta geolocalização
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Falha na localização. Seu GPS está ativado?.' :
                        'O seu navegador não suporta geolocalização.');
}
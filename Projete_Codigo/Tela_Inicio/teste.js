function inicializar() {
    var coordenadas = {lat: -22.2580, lng:  -45.7035};
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 18,
      center: coordenadas 
    });

    var marker = new google.maps.Marker({
      position: coordenadas,
      map: mapa,
      title: 'Meu marcador'
    });
  }


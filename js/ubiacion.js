// Función para inicializar el mapa
function inicializar() {
    var mapa_alc = {
        // Mostramos las coordenadas (Latitud, Longitud) en el centro del mapa
      center:new google.maps.LatLng(-12.046374,-77.0427934),
      // Tamaño del zoom
      zoom:15,
      // Tipo de mapa: ROADMAP, SATELLITE, HYBRID, TERRAIN 
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    // Creamos un mapa en el contenedor con id map_alc,  usando los parámetros de la variable mapa_alc
    var map=new google.maps.Map(document.getElementById("map_alc"), mapa_alc);
  }
  //Mostramos el mapa una vez que cargue la página, con el evento addDomListener de Google Maps API
  google.maps.event.addDomListener(window, 'load', inicializar);

// My mapboxGL token
mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';

// Initial center point and zoom level
var initialCenterPoint = [-98.1875746, 39.1911332]
var initialZoom =3.4

// Create an object to hold the initialization options for a map
var initOptions = {
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: initialCenterPoint,
  zoom: initialZoom,
}

// Create new map
var map = new mapboxgl.Map(initOptions);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


var filterGroup = document.getElementById('filter-group');

map.on('load', function() {
// Add a GeoJSON source containing place coordinates and information.
map.addSource('nbastadium', {
  type: 'geojson',
  data: 'data\nbastadium.geojson',
});

nbastadium.features.forEach(function(feature) {
var symbol = feature.properties['conference'];
var layerID = 'poi-' + symbol;

// Add a layer for this symbol type if it hasn't been added already.
if (!map.getLayer(layerID)) {
map.addLayer({
'id': layerID,
'type': 'symbol',
'source': 'nbastadium',
'layout': {
'icon-image': symbol + '-15',
'icon-allow-overlap': true
},
'filter': ['==', 'conference', symbol]
});

// Add checkbox and label elements for the layer.
var input = document.createElement('input');
input.type = 'checkbox';
input.id = layerID;
input.checked = true;
filterGroup.appendChild(input);

var label = document.createElement('label');
label.setAttribute('for', layerID);
label.textContent = symbol;
filterGroup.appendChild(label);

// When the checkbox changes, update the visibility of the layer.
input.addEventListener('change', function(e) {
map.setLayoutProperty(
layerID,
'visibility',
e.target.checked ? 'visible' : 'none'
);
});
}
});
});




  $('#ATL').on('click', function() {
    map.flyTo({
      center: [-75.4187605,43.2656557],
      zoom: 6
    })
  })
  $('#CEN').on('click', function() {
    map.flyTo({
      center: [-85.660679,41.3064537],
      zoom: 6
    })
  })

  $('#SE').on('click', function() {
    map.flyTo({
      center: [-77.5594031,32.5384074],
      zoom: 5.2
    })
  })

  $('#NW').on('click', function() {
    map.flyTo({
      center: [-104.3326424,45.5561508],
      zoom: 4.5
    })
  })

  $('#PAC').on('click', function() {
    map.flyTo({
      center: [-117.0973915,35.107],
      zoom: 5.6
    })
  })

  $('#SW').on('click', function() {
    map.flyTo({
      center: [-94.4470076,30.418],
      zoom: 5.8
    })
  })

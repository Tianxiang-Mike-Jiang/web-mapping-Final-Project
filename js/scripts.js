mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';

var geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'message': 'Atlanta Hawks',
'iconSize': [60, 60]
},
'geometry': {
'type': 'Point',
'coordinates': [-73.9427712,40.7521681]
}
},
{
'type': 'Feature',
'properties': {
'message': 'Bar',
'iconSize': [50, 50]
},
'geometry': {
'type': 'Point',
'coordinates': [-61.2158203125, -15.97189158092897]
}
},
{
'type': 'Feature',
'properties': {
'message': 'Baz',
'iconSize': [40, 40]
},
'geometry': {
'type': 'Point',
'coordinates': [-63.29223632812499, -18.28151823530889]
}
}
]
};

var initialCenterPoint = [-101.1875746, 39.1911332]
var initialZoom =3.3

var initOptions = {
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: initialCenterPoint,
  zoom: initialZoom,
}
var map = new mapboxgl.Map(initOptions);

map.addControl(new mapboxgl.NavigationControl());

geojson.features.forEach(function(marker) {
var el = document.createElement('div');
el.className = 'marker';
el.style.backgroundImage =
'url(https://placekitten.com/g/' +
marker.properties.iconSize.join('/') +
'/)';
el.style.width = marker.properties.iconSize[0] + 'px';
el.style.height = marker.properties.iconSize[1] + 'px';

el.addEventListener('click', function() {
window.alert(marker.properties.message);
});

// add marker to map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.addTo(map);
});

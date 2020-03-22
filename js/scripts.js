mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';

var geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
  geometry: {
      type: 'Point',
      coordinates: [-73.9427712,40.7521681]
},
properties: {
  "StadiumName": "State Farm Arena",
  "website": "statefarmarena.com",
  "Team": "Atlanta Hawks"

    }
}]}

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
el.style.backgroundImage = 'url( + http://oit2.sps.nyu.edu/~tj986/Markericon/58419c7ba6515b1e0ad75a62.png + )'


new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 25}) // add popups
     .setHTML(`Want to learn more about <b>${marker.properties.Team}</b>, Please visit <a href="http://www.${marker.properties.website}">${marker.properties.website}</a>`))
.addTo(map);
});

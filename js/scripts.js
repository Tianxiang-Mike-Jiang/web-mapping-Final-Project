mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';

var geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
  geometry: {
      type: 'Point',
      coordinates: [-84.3985184,33.7572935]
},
properties: {
  "StadiumName": "State Farm Arena",
  "website": "statefarmarena.com",
  "Team": "Atlanta Hawks",
  icon: {
         iconUrl: 'http://oit2.sps.nyu.edu/~tj986/Markericon/Atlanta%20Hawks.png',
         iconSize: [50, 50], // size of the icon
         iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
         popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
         className: 'dot'
       }
       }
     }
   ]}

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



new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 25}) // add popups
     .setHTML(`Want to learn more about <b>${marker.properties.Team}</b>, Please visit <a href="http://www.${marker.properties.website}">${marker.properties.website}</a>`))
.addTo(map);
});

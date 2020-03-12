mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';


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

nbastadiumData.forEach(function(nbastadiumEntry) {

  new mapboxgl.Marker()
    .setLngLat([nbastaidumEntry.longitude, nbastaidumEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25}) // add popups
     .setHTML(`Want to learn more about <b>${nbastaidumEntry.StaidumName}</b>, Please visit <a href="http://www.${nbastaidumEntry.Website}">${apartmentEntry.Website}</a>`))
    .addTo(map);
})

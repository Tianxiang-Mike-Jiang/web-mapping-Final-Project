mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';
var initialCenterPoint = [-98.1875746, 39.1911332]
var initialZoom =3.4

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
      .setLngLat([nbastadiumEntry.longitude, nbastadiumEntry.latitude])
      .setPopup(new mapboxgl.Popup({ offset: 25}) // add popups
       .setHTML(`<div id='logo' style="background-image:url('${nbastadiumEntry.Logo}'); height：100%;background-repeat:no-repeat; background-position:center; background-size:contain "></div><br>
                <b>${nbastadiumEntry.StadiumName}</b> <br>
                <b>NBA Team:</b>${nbastadiumEntry.Team}<br>
                <b>Website:</b> <a href="http://www.${nbastadiumEntry.website}">${nbastadiumEntry.website}</a>`))
      .addTo(map);
  })

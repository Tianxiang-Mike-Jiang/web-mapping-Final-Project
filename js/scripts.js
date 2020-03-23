
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

var geojson = {
 "type": "FeatureCollection",
 "features": [
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -75.172,
         39.9012
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Atlantic",
       "team": "76ers",
       "city": "Philadelphia",
       "arena": "Wells Fargo Center",
       "marker-color": "#b4cadb",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -71.0621,
         42.3662
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Atlantic",
       "team": "Celtics",
       "city": "Boston",
       "arena": "TD Garden",
       "marker-color": "#b4cadb",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -73.9934,
         40.7505
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Atlantic",
       "team": "Knicks",
       "city": "New York",
       "arena": "Madison Square Garden",
       "marker-color": "#b4cadb",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -73.9758,
         40.6828
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Atlantic",
       "team": "Nets",
       "city": "Brooklyn",
       "arena": "Barclays Center",
       "marker-color": "#b4cadb",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -79.3791,
         43.6435
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Atlantic",
       "team": "Raptors",
       "city": "Toronto",
       "arena": "Air Canada Center",
       "marker-color": "#b4cadb",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -87.9172,
         43.0436
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Central",
       "team": "Bucks",
       "city": "Milwaukee",
       "arena": "Bradley Center",
       "marker-color": "#257aba",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -87.6742,
         41.8807
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Central",
       "team": "Bulls",
       "city": "Chicago",
       "arena": "United Center",
       "marker-color": "#257aba",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -81.6882,
         41.4965
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Central",
       "team": "Cavaliers",
       "city": "Cleveland",
       "arena": "Quicken Loans Arena",
       "marker-color": "#257aba",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -83.0552,
         42.341
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Central",
       "team": "Pistons",
       "city": "Detroit",
       "arena": "Little Caesars Arena",
       "marker-color": "#257aba",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -86.1555,
         39.7639
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Central",
       "team": "Pacers",
       "city": "Indianapolis",
       "arena": "Bankers Life Fieldhouse",
       "marker-color": "#257aba",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -111.9011,
         40.7683
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Northwest",
       "team": "Jazz",
       "city": "Utah",
       "arena": "Vivint Smart Home Arena",
       "marker-color": "#960000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -97.5151,
         35.4634
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Northwest",
       "team": "Thunder",
       "city": "Oklahoma City",
       "arena": "Chesapeake Arena",
       "marker-color": "#960000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -93.2762,
         44.9795
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Northwest",
       "team": "Timberwolves",
       "city": "Minnesota",
       "arena": "Target Center",
       "marker-color": "#960000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -122.6668,
         45.5316
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Northwest",
       "team": "Trail Blazers",
       "city": "Portland",
       "arena": "Moda Center",
       "marker-color": "#960000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -105.0077,
         39.7487
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Northwest",
       "team": "Nuggets",
       "city": "Denver",
       "arena": "Pepsi Center",
       "marker-color": "#960000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -118.2673,
         34.043
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Pacific",
       "team": "Clippers",
       "city": "Los Angeles",
       "arena": "Staples Center",
       "marker-color": "#c70000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -121.4996,
         38.5806
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Pacific",
       "team": "Kings",
       "city": "Sacramento",
       "arena": "Golden 1 Center",
       "marker-color": "#c70000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -118.2673,
         34.043
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Pacific",
       "team": "Lakers",
       "city": "Los Angeles",
       "arena": "Staples Center",
       "marker-color": "#c70000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -112.0712,
         33.4457
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Pacific",
       "team": "Suns",
       "city": "Phoenix",
       "arena": "Talking Stick Resort Arena",
       "marker-color": "#c70000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -122.3895203,
         37.7679315
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Pacific",
       "team": "Warriors",
       "city": "Golden State",
       "arena": "Oracle Arena",
       "marker-color": "#c70000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -77.0209,
         38.8981
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Southeast",
       "team": "Capital One Arena",
       "city": "Washington",
       "arena": "AmericanAirlines Arena",
       "marker-color": "#034e9e",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -84.3963,
         33.7573
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Southeast",
       "team": "Hawks",
       "city": "Atlanta",
       "arena": "Phillips Arena",
       "marker-color": "#034e9e",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -80.187,
         25.7814
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Southeast",
       "team": "Heat",
       "city": "Miami",
       "arena": "AmericanAirlines Arena",
       "marker-color": "#034e9e",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -80.8392,
         35.2251
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Southeast",
       "team": "Hornets",
       "city": "Charlotte",
       "arena": "Spectrum Center",
       "marker-color": "#034e9e",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -81.3837,
         28.5399
       ]
     },
     "properties": {
       "conference": "Eastern",
       "division": "Southeast",
       "team": "Magic",
       "city": "Orlando",
       "arena": "Amway Center",
       "marker-color": "#034e9e",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -96.8104,
         32.7905
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Southwest",
       "team": "Mavericks",
       "city": "Dallas",
       "arena": "American Airlines Ceter",
       "marker-color": "#ff0000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -90.0821,
         29.949
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Southwest",
       "team": "Pelicans",
       "city": "New Orleans",
       "arena": "Smoothie King Center",
       "marker-color": "#ff0000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -95.3621,
         29.7508
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Southwest",
       "team": "Rockets",
       "city": "Houston",
       "arena": "Toyota Center",
       "marker-color": "#ff0000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -98.4375,
         29.4271
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Southwest",
       "team": "Spurs",
       "city": "San Antonio",
       "arena": "AT&T Center",
       "marker-color": "#ff0000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   },
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [
         -90.0505,
         35.1382
       ]
     },
     "properties": {
       "conference": "Western",
       "division": "Southwest",
       "team": "Grizzlies",
       "city": "Memphis",
       "arena": "Fedex Forum",
       "marker-color": "#ff0000",
       "marker-size": "medium",
       "marker-symbol": ""
     }
   }
 ]
}

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map


new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<b>' +marker.properties.arena +'</b> <br><b>NBA Team :</b> '+marker.properties.city +'&nbsp'+ marker.properties.team +'<br>'))
  .addTo(map);
})



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

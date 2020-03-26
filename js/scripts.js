// My mapboxGL token
mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';
// Initial center point and zoom level
var initialCenterPoint = [-98.1875746, 30.1911332]
var initialZoom = 3.4
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

// disable map zoom when using scroll
map.scrollZoom.disable();

//Data
var nbaeastern = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-84.3985184, 33.7572935]
    },
    "properties": {
      "StadiumName": "State Farm Arena",
      "website": "nba.com/hawks/",
      "Team": "Atlanta Hawks",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Atlanta%20Hawks.png",
      "conference": "Eastern",
      "Divisions": "SOUTHEAST",
      "Year": 1999,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Atlanta.jpg",
      "Capacity": " 21,000 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-71.06434, 42.3662019]
    },
    "properties": {
      "StadiumName": "TD Garden",
      "website": "nba.com/celtics/",
      "Team": "Boston Celtics",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Boston%20Celtics.png",
      "conference": "Eastern",
      "Divisions": "ATLANTIC",
      "Year": 1995,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Boston.jpg",
      "Capacity": " 19,580 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-73.9776096, 40.6826505]
    },
    "properties": {
      "StadiumName": "Barclays Center",
      "website": "nba.com/nets/",
      "Team": "Brooklyn Nets",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Brooklyn%20Nets.png",
      "conference": "Eastern",
      "Divisions": "ATLANTIC",
      "Year": 2012,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Brooklyn.jpg",
      "Capacity": " 19,000 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-80.8414977, 35.2251853]
    },
    "properties": {
      "StadiumName": "Spectrum Center",
      "website": "nba.com/hornets/",
      "Team": "Charlotte Hornets",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Charlotte%20Hornets.png",
      "conference": "Eastern",
      "Divisions": "SOUTHEAST",
      "Year": 2005,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Charlotte.jpg",
      "Capacity": " 20,200 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-87.6763699, 41.8806948]
    },
    "properties": {
      "StadiumName": "United Center",
      "website": "nba.com/bulls/",
      "Team": "Chicago Bulls",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Chicago%20Bulls.png",
      "conference": "Eastern",
      "Divisions": "CENTRAL",
      "Year": 1994,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Chicago.jpg",
      "Capacity": " 23,500 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-81.6904069, 41.4964837]
    },
    "properties": {
      "StadiumName": "Quicken Loans Arena",
      "website": "nba.com/cavaliers/",
      "Team": "Cleveland Cavaliers",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Cleveland%20Cavaliers.png",
      "conference": "Eastern",
      "Divisions": "CENTRAL",
      "Year": 1994,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Cleveland.jpg",
      "Capacity": " 20,562 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-83.2447494, 42.698533]
    },
    "properties": {
      "StadiumName": "The Palace of Auburn Hills",
      "website": "nba.com/pistons/",
      "Team": "Detroit Pistons",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Detroit%20Pistons.png",
      "conference": "Eastern",
      "Divisions": "CENTRAL",
      "Year": 1988,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Detroit.jpg",
      "Capacity": " 24,276 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-86.1577307, 39.7640475]
    },
    "properties": {
      "StadiumName": "Bankers Life Fieldhouse",
      "website": "nba.com/pacers/",
      "Team": "Indiana Pacers",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Indiana%20Pacers.png",
      "conference": "Eastern",
      "Divisions": "CENTRAL",
      "Year": 1999,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Indiana.jpg",
      "Capacity": " 20,000 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-80.189163, 25.7814062]
    },
    "properties": {
      "StadiumName": "American Airlines Arena",
      "website": "nba.com/heat/",
      "Team": "Miami Heat",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Miami%20Heat.gif",
      "conference": "Eastern",
      "Divisions": "SOUTHEAST",
      "Year": 1999,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/MIA.jpg",
      "Capacity": " 21,000 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-87.9195802, 43.0450841]
    },
    "properties": {
      "StadiumName": "Fiserv Forum",
      "website": "nba.com/bucks/",
      "Team": "Milwaukee Bucks",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Milwaukee%20Bucks.png",
      "conference": "Eastern",
      "Divisions": "CENTRAL",
      "Year": 2018,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/MIL.jpg",
      "Capacity": " 17,341 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-73.9956327, 40.7505085]
    },
    "properties": {
      "StadiumName": "Madison Square Garden",
      "website": "nba.com/knicks/",
      "Team": "New York Knicks",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/New%20York%20Knicks.gif",
      "conference": "Eastern",
      "Divisions": "ATLANTIC",
      "Year": 1968,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/NYK.jpg",
      "Capacity": " 20,789 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-81.3860475, 28.5392261]
    },
    "properties": {
      "StadiumName": "Amway Center",
      "website": "nba.com/magic/",
      "Team": "Orlando Magic",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Orlando%20Magic.gif",
      "conference": "Eastern",
      "Divisions": "SOUTHEAST",
      "Year": 2010,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/ORL.jpg",
      "Capacity": " 20,000 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-75.1741735, 39.9012056]
    },
    "properties": {
      "StadiumName": "Wells Fargo Center",
      "website": "nba.com/sixers/",
      "Team": "Philadelphia 76ers",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Philadelphia%2076ers.png",
      "conference": "Eastern",
      "Divisions": "ATLANTIC",
      "Year": 1996,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/PHI.jpg",
      "Capacity": " 19,500 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-79.3812929, 43.64347]
    },
    "properties": {
      "StadiumName": "Scotiabank Arena",
      "website": "nba.com/raptors/",
      "Team": "Toronto Raptors",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Toronto%20Raptors.png",
      "conference": "Eastern",
      "Divisions": "ATLANTIC",
      "Year": 1999,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/TOR.jpeg",
      "Capacity": " 19,800 ",
      "Color": "#17408B"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-77.0229949, 38.898065]
    },
    "properties": {
      "StadiumName": "Capital One Arena",
      "website": "nba.com/wizards/",
      "Team": "Washington Wizards",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Washington%20Wizards.png",
      "conference": "Eastern",
      "Divisions": "SOUTHEAST",
      "Year": 1997,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/WAS.jpg",
      "Capacity": " 20,356 ",
      "Color": "#17408B"
    }
  }]
}
var nbawestern = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-96.8173592, 32.7848939]
    },
    "properties": {
      "StadiumName": "American Airlines Center",
      "website": " mavs.com/",
      "Team": "Dallas Mavericks",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Dallas%20Mavericks.png",
      "conference": "Western",
      "Divisions": "SOUTHWEST",
      "Year": 2001,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Dallas.jpg",
      "Capacity": " 20,000 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-105.009904, 39.7486641]
    },
    "properties": {
      "StadiumName": "Pepsi Center",
      "website": "nba.com/nuggets/",
      "Team": "Denver Nuggets",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Denver%20Nuggets.png",
      "conference": "Western",
      "Divisions": "NORTHWEST",
      "Year": 1999,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Denver.jpg",
      "Capacity": " 18,007 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.3895203, 37.7679315]
    },
    "properties": {
      "StadiumName": "Chase Center",
      "website": "nba.com/warriors/",
      "Team": "Golden State Warriors",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Golden%20State%20Warriors.png",
      "conference": "Western",
      "Divisions": "PACIFIC",
      "Year": 2019,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Golden.jpg",
      "Capacity": " 18,604 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-95.3629684, 29.7501745]
    },
    "properties": {
      "StadiumName": "Toyota Center",
      "website": "nba.com/rockets/",
      "Team": "Houston Rockets",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Houston%20Rockets.png",
      "conference": "Western",
      "Divisions": "SOUTHWEST",
      "Year": 2003,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Houston.jpg",
      "Capacity": " 18,300 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-118.3694481, 34.2430219]
    },
    "properties": {
      "StadiumName": "STAPLES Center",
      "website": "nba.com/clippers/",
      "Team": "Los Angeles Clippers",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Los%20Angeles%20Clippers.png",
      "conference": "Western",
      "Divisions": "PACIFIC",
      "Year": 1999,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/LAC.jpg",
      "Capacity": " 20,000 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-118.2694481, 34.0430219]
    },
    "properties": {
      "StadiumName": "STAPLES Center",
      "website": "nba.com/lakers/",
      "Team": "Los Angeles Lakers",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Los%20Angeles%20Lakers.png",
      "conference": "Western",
      "Divisions": "PACIFIC",
      "Year": 1999,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/LAL.jpg",
      "Capacity": " 20,000 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-90.0527804, 35.1381462]
    },
    "properties": {
      "StadiumName": "FedExForum",
      "website": "nba.com/grizzlies/",
      "Team": "Memphis Grizzlies",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Memphis%20Grizzlies.png",
      "conference": "Western",
      "Divisions": "SOUTHWEST",
      "Year": 2004,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/MEM.jpg",
      "Capacity": " 18,119 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-93.278183, 44.9795319]
    },
    "properties": {
      "StadiumName": "Target Center",
      "website": "nba.com/timberwolves/",
      "Team": "Minnesota Timberwolves",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Minnesota%20Timberwolves.png",
      "conference": "Western",
      "Divisions": "NORTHWEST",
      "Year": 1990,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/MIN.jpg",
      "Capacity": " 19,356 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-90.0842508, 29.9490397]
    },
    "properties": {
      "StadiumName": "Smoothie King Center",
      "website": "nba.com/pelicans/",
      "Team": "New Orleans Pelicans",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/New%20Orleans%20Pelicans.png",
      "conference": "Western",
      "Divisions": "SOUTHWEST",
      "Year": 1999,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/NO.jpg",
      "Capacity": " 17,791 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-97.5173078, 35.463429]
    },
    "properties": {
      "StadiumName": "Chesapeake Energy Arena",
      "website": "nba.com/thunder/",
      "Team": "Oklahoma City Thunder",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Oklahoma%20City%20Thunder.png",
      "conference": "Western",
      "Divisions": "NORTHWEST",
      "Year": 2002,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/OKC.jpg",
      "Capacity": " 18,203 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-112.0740501, 33.4458798]
    },
    "properties": {
      "StadiumName": "US Airways Center",
      "website": "nba.com/suns/",
      "Team": "Phoenix Suns",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Phoenix%20Suns.png",
      "conference": "Western",
      "Divisions": "PACIFIC",
      "Year": 1992,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/PHX.jpg",
      "Capacity": " 18,422 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6690363, 45.5315688]
    },
    "properties": {
      "StadiumName": "Moda Center",
      "website": "nba.com/blazers/",
      "Team": "Portland Trail Blazers",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Portland%20Trail%20Blazers.png",
      "conference": "Western",
      "Divisions": "NORTHWEST",
      "Year": 1995,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/POR.jpg",
      "Capacity": " 19,980 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-121.5203224, 38.649043]
    },
    "properties": {
      "StadiumName": "Sleep Train Arena",
      "website": "nba.com/kings/",
      "Team": "Sacramento Kings",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Sacramento%20Kings.png",
      "conference": "Western",
      "Divisions": "PACIFIC",
      "Year": 1988,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/SAC.jpg",
      "Capacity": " 17,317 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-98.4396753, 29.4271568]
    },
    "properties": {
      "StadiumName": "AT&T Center",
      "website": "nba.com/spurs/",
      "Team": "San Antonio Spurs",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/San%20Antonio%20Spurs.png",
      "conference": "Western",
      "Divisions": "SOUTHWEST",
      "Year": 2002,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/SAS.jpg",
      "Capacity": " 18,581 ",
      "Color": "#C9082A"
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-111.9032761, 40.7682681]
    },
    "properties": {
      "StadiumName": "Energy Solutions Arena",
      "website": "nba.com/jazz/",
      "Team": "Utah Jazz",
      "Logo": "http://oit2.sps.nyu.edu/~tj986/Markericon/Utah%20Jazz.png",
      "conference": "Western",
      "Divisions": "NORTHWEST",
      "Year": 1991,
      "Picture": "http://oit2.sps.nyu.edu/~tj986/Markericon/Image/Utah.jpg",
      "Capacity": " 18,300 ",
      "Color": "#C9082A"
    }
  }]
}
// add markers to map
nbaeastern.features.forEach(function(marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker poi-eastern';
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML(`<body><div id='logo' style="background-image:url('${marker.properties.Logo}'); height：100%;background-repeat:no-repeat; background-position:center; background-size:contain "></div><br>

                <h6><b>${marker.properties.StadiumName}</b> <br></h6>
                <h1><b>Built Year:</b> ${marker.properties.Year}<br>
                <b>NBA Team:</b> ${marker.properties.Team}<br>
                <b>Team Website</b> <br><a href="http://www.${marker.properties.website}">${marker.properties.website}</a><br>
                <b>Divisions:</b> ${marker.properties.Divisions}<br>
                <b>Conference:</b> ${marker.properties.conference}<br><br>
								Move the mouse to picture zoom in</h1>
                <div id='image-zoom' style="background-image:url('${marker.properties.Picture}'); height：100%;background-repeat:no-repeat; background-position:center; background-size:contain "></div>
</body>
<style>
#image-zoom:hover {
  transform: scale(2.5);
}
</style>
                `)).addTo(map);
})
nbawestern.features.forEach(function(marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker poi-western';
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML(`<body><div id='logo' style="background-image:url('${marker.properties.Logo}'); height：100%;background-repeat:no-repeat; background-position:center; background-size:contain "></div><br>

                <h6><b>${marker.properties.StadiumName}</b> <br></h6>
                <h1><b>Built Year:</b> ${marker.properties.Year}<br>
                <b>NBA Team:</b> ${marker.properties.Team}<br>
                <b>Team Website</b> <br><a href="http://www.${marker.properties.website}">${marker.properties.website}</a><br>
                <b>Divisions:</b> ${marker.properties.Divisions}<br>
                <b>Conference:</b> ${marker.properties.conference}<br><br>
								Move the mouse to picture zoom in</h1>
                <div id='image-zoom' style="background-image:url('${marker.properties.Picture}'); height：100%;background-repeat:no-repeat; background-position:center; background-size:contain "></div>
</body>
<style>
#image-zoom:hover {
  transform: scale(2.5);
}
</style>
                `)).addTo(map);
})

//When click button show/hide the marker and check/uncheck the checkBox
$('#westernCheckbox').on('click', function myfunction1() {
  var checkBox1 = document.getElementById("westernCheck");
  var markers1 = document.getElementsByClassName("marker poi-western");
  if (checkBox1.checked == true) {
    for (let i = 0; i < markers1.length; i++) {
      markers1[i].style.visibility = "visible";
      $('input[name=westernCheck]').prop('checked', false);
    }
  } else {
    for (let i = 0; i < markers1.length; i++) {
      markers1[i].style.visibility = "hidden";
      $('input[name=westernCheck]').prop('checked', true);
    };

  }
})


$('#easternCheckbox').on('click', function myfunction2() {
  var checkBox2 = document.getElementById("easternCheck");
  var markers2 = document.getElementsByClassName("marker poi-eastern");
  if (checkBox2.checked == true) {
    for (let i = 0; i < markers2.length; i++) {
      markers2[i].style.visibility = "visible";
      $('input[name=easternCheck]').prop('checked', false);
    }
  } else {
    for (let i = 0; i < markers2.length; i++) {
      markers2[i].style.visibility = "hidden";
      $('input[name=easternCheck]').prop('checked', true);
    };

  }
})


// Fly to Buttons to each divisions
$('#ATL').on('click', function() {
  map.flyTo({
    center: [-75.4187605, 43.2656557],
    zoom: 6
  })
})
$('#CEN').on('click', function() {
  map.flyTo({
    center: [-85.660679, 41.3064537],
    zoom: 6
  })
})
$('#SE').on('click', function() {
  map.flyTo({
    center: [-77.5594031, 32.5384074],
    zoom: 5.2
  })
})
$('#NW').on('click', function() {
  map.flyTo({
    center: [-104.3326424, 45.5561508],
    zoom: 4.5
  })
})
$('#PAC').on('click', function() {
  map.flyTo({
    center: [-117.0973915, 35.107],
    zoom: 5.6
  })
})
$('#SW').on('click', function() {
  map.flyTo({
    center: [-94.4470076, 30.418],
    zoom: 5.8
  })
})

//Change marker icons
$('.marker-select').on('click', function() {
  var markerselectUrl = $(this).attr('data-marker')
  console.log(markerselectUrl)
  $('.marker').css('background-image', `url(${markerselectUrl})`)
})

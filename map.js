/*Coordinates*/
var points = [
  { lat: 13.735936017497728, lng: 100.53071747155853},
  { lat: 13.736522929590551, lng: 100.52953254883069},
  { lat: 13.737257102262152, lng: 100.52858397219916},
  { lat: 13.738885597064707, lng: 100.52844705631053},
  { lat: 13.740030280173663, lng: 100.52889362961828},
  { lat: 13.73972712877361, lng: 100.532117338905},
  { lat: 13.739521656258006, lng: 100.53230795763523},
  { lat: 13.737094177735804, lng: 100.53186628737458},
  { lat: 13.736474278162431, lng: 100.53169557601313}
]
var wc = [
  {lat:13.740050754548463, lng: 100.52872753493585},
  {lat:13.739793738931343, lng: 100.5308531220263},
  {lat:13.739551620500956, lng: 100.53247570464549},
  {lat:13.736470878543077, lng: 100.53003143953347},
  {lat:13.736807854768212, lng: 100.52895388605143},
  {lat:13.737535545314351, lng: 100.53132312710174}
]
var parking = {
  "p1":{lat:13.73930838287045, lng: 100.53458867112415},
  "p2":{lat:13.73395076658045, lng: 100.53331841271162}
};

function myMap() {
  var mapProp= {
  center:new google.maps.LatLng(13.738351063201533, 100.53043918229304),
  zoom:17,
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var pos = {}

for (var p in parking){
pos[p] =  new google.maps.Marker({
  map,
  position: parking[p],
  icon:"icon/parking.png",
  });
}
for (var w in wc){
  pos[w] =  new google.maps.Marker({
    map,
    position: wc[w],
    icon:"icon/wc.png",
    });
  }

var content1 = '<div class="header"><div id="number"><img src="icon/1.png"></div><div id="name"><h1>อาคารมหามกุฏ</h1><h3>MAHAMAKUT</h3></div><div id="fac"><img src="icon/bench.png"><img src="icon/food.png"><img src="icon/wc.png"></div> </div>'
+'<div class="image"><img src = "icon/mahamakut.png"></div>'+'<div class = "info"></div>'

var marker1 = new google.maps.Marker({
position: points[0],
map: map,
icon:"icon/1.png",
});
var info1 = new google.maps.InfoWindow({
  content:content1,
})
marker1.addListener("click", () => {
  info1.open({
    anchor: marker1,
    map,
  });
});
var marker = new google.maps.Marker({
position: points[1],
map: map,
icon:"icon/2.png",
});
var marker3 = new google.maps.Marker({
position: points[2],
map: map,
icon:"icon/3.png",

});
var marker4 = new google.maps.Marker({
position: points[3],
map: map,
icon:"icon/4.png",
});
var marker5 = new google.maps.Marker({
position: points[4],
map: map,
icon:"icon/5.png",
});
var marker6 = new google.maps.Marker({
position: points[5],
map: map,
icon:"icon/6.png",
});

var marker7 = new google.maps.Marker({
position: points[6],
map: map,
icon:"icon/7.png",
});
var marker8 = new google.maps.Marker({
position: points[7],
map: map,
icon:"icon/8.png",
});
var marker9 = new google.maps.Marker({
position: points[8],
map: map,
icon:"icon/9.png",
});

/*google.maps.event.addListener(map, 'click', function(event) {
placeMarker(map, event.latLng);
});

function placeMarker(map, location) {
var marker = new google.maps.Marker({
position: location,
map: map
});
var infowindow = new google.maps.InfoWindow({
content: 'Latitude: ' + location.lat() +
'<br>Longitude: ' + location.lng()
});
infowindow.open(map,marker);
}*/

///Route Liner///
var i1_1 = {lat: 13.736231863900983, lng: 100.53076185837237}
var i1_2 = {lat: 13.736397314327107, lng: 100.5296838963318}
var myTrip = [point1,i1_1, i1_2, point2];
var flightPath = new google.maps.Polyline({
path:myTrip,
map:map,
strokeColor:"#0000FF",
strokeOpacity:0.8,
strokeWeight:5
});

var i2_1 = {lat:13.736597451858149, lng:100.52913127392993}
var i2_2 = {lat:13.736471085488146, lng:100.52911786288453}
var i2_3 = {lat:13.736562825110644, lng:100.52865215690575}
var i2_4 = {lat:13.736689667174902, lng:100.52859940195353}
var i2_5 = {lat:13.736732322257097, lng:100.52848430707753}

var myTrip = [point2,i2_1,i2_2,i2_3,i2_4,i2_5,point3];
var flightPath = new google.maps.Polyline({
path:myTrip,
map:map,
strokeColor:"#000",
strokeOpacity:0.8,
strokeWeight:5
});

var i3_1 = {lat:13.73806164092444, lng:100.52874698414377}
var i3_2 = {lat:13.73814297523583, lng:100.52812339739197}
var i3_3 = {lat:13.738697596876056, lng:100.52823344211511}
var i3_4 = {lat:13.738673666094055, lng:100.52841965700826}
var myTrip = [point3,i3_1,i3_2,i3_3,i3_4,point4];
var flightPath = new google.maps.Polyline({
path:myTrip,
map:map,
strokeColor:"#09C917",
strokeOpacity:0.8,
strokeWeight:5
});

///Location finder///
infoWindow = new google.maps.InfoWindow();

const locationButton = document.createElement("button");

locationButton.textContent = "Pan to Current Location";
locationButton.classList.add("custom-map-control-button");
map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
locationButton.addEventListener("click", () => {
// Try HTML5 geolocation.
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(
(position) => {
const pos = {
lat: position.coords.latitude,
lng: position.coords.longitude,
};


infoWindow.setPosition(pos);
infoWindow.setContent("Location found.");
infoWindow.open(map);
map.setCenter(pos);
var UPos = new google.maps.Marker({
position: pos,
map: map,
icon:"C:/Users/fonpa/Desktop/CUmusicwalk/clef.png",
animation:google.maps.Animation.BOUNCE
});
},
() => {
handleLocationError(true, infoWindow, map.getCenter());
}
);
} else {
// Browser doesn't support Geolocation
handleLocationError(false, infoWindow, map.getCenter());
}
});
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(
browserHasGeolocation
? "Error: The Geolocation service failed."
: "Error: Your browser doesn't support geolocation."
);

/*other coords*/ 

}
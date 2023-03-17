///Coordinates & variables///
var points = [
  [{lat: 13.735936017497728, lng: 100.53071747155853},"icon/1.png"],
  [{lat: 13.736522929590551, lng: 100.52953254883069},"icon/2.png"],
  [{lat: 13.737257102262152, lng: 100.52858397219916},"icon/3.png"],
  [{lat: 13.738885597064707, lng: 100.52844705631053},"icon/4.png"],
  [{lat: 13.740030280173663, lng: 100.52889362961828},"icon/5.png"],
  [{lat: 13.73972712877361, lng: 100.532117338905},"icon/6.png"],
  [{lat: 13.739521656258006, lng: 100.53230795763523},"icon/7.png"],
  [{lat: 13.737094177735804, lng: 100.53186628737458},"icon/8.png"],
  [{lat: 13.736474278162431, lng: 100.53169557601313},"icon/9.png"]
]
var wc = [
  {lat:13.740050754548463, lng: 100.52872753493585},
  {lat:13.739793738931343, lng: 100.5308531220263},
  {lat:13.739551620500956, lng: 100.53247570464549},
  {lat:13.736470878543077, lng: 100.53003143953347},
  {lat:13.736807854768212, lng: 100.52895388605143},
  {lat:13.737535545314351, lng: 100.53132312710174}
]
var parking = [
  {lat:13.73930838287045, lng: 100.53458867112415},
  {lat:13.73395076658045, lng: 100.53331841271162}
]
var content = [
  '<div class="header"><div id="number"><img src="icon/c.png"></div><div id="name"><h1>อาคารมหามกุฏ</h1><h3>MAHAMAKUT</h3></div><div id="fac"><img src="icon/bench.png"><img src="icon/food.png"><img src="icon/wc.png"></div> </div>'+'<div class="image"><img src = "icon/mahamakut.png"><div class="info"><p>Ho hohoh</p></div></div>',
  '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/4c.png"><h1>อาคารจามจุรี 4</h1><h3>CHAMCHURI 4</h3><div class="facility"></div></div><div class="info-window-pic"><img src="icon/cham4.png"></div><div class="info-window-content"><img id="show-type" src="icon/Exhibition.png"><p id="type"><บุคคลสำคัญของโลกที่เคยมาจุฬา></p><p>“อาคารจามจุรี 4” เป็นอาคารสำนักงานที่ตั้งอยู่ตรงข้ามหอสมุดกลาง<br>และสามารถเดินเข้ามาจากถนนพญาไทผ่านอาคารจามจุรี 1 และ 2 ได้</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>']

///Main function///
function myMap() {
  var mapProp= {center:new google.maps.LatLng(13.738351063201533, 100.53043918229304),zoom:17,};

///Marker variables///
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//wc
var wc1 = new google.maps.Marker({map, position: wc[0], icon:"icon/wc.png",});
var wc2 = new google.maps.Marker({map, position: wc[1], icon:"icon/wc.png",});
var wc3 = new google.maps.Marker({map, position: wc[2], icon:"icon/wc.png",});
var wc4 = new google.maps.Marker({map, position: wc[3], icon:"icon/wc.png",});
var wc5 = new google.maps.Marker({map, position: wc[4], icon:"icon/wc.png",});
var wc6 = new google.maps.Marker({map, position: wc[5], icon:"icon/wc.png",});
//parking
var p1 = new google.maps.Marker({map, position: parking[0], icon:"icon/parking.png",});
var p2 = new google.maps.Marker({map, position: parking[1], icon:"icon/parking.png",});
//check points
var marker1 = new google.maps.Marker({position: points[0][0],map: map,icon:points[0][1],});
var marker2 = new google.maps.Marker({position: points[1][0],map: map,icon:points[1][1],});
var marker3 = new google.maps.Marker({position: points[2][0],map: map,icon:points[2][1],});
var marker4 = new google.maps.Marker({position: points[3][0],map: map,icon:points[3][1],});
var marker5 = new google.maps.Marker({position: points[4][0],map: map,icon:points[4][1],});
var marker6 = new google.maps.Marker({position: points[5][0],map: map,icon:points[5][1],});
var marker7 = new google.maps.Marker({position: points[6][0],map: map,icon:points[6][1],});
var marker8 = new google.maps.Marker({position: points[7][0],map: map,icon:points[7][1],});
var marker9 = new google.maps.Marker({position: points[8][0],map: map,icon:points[8][1],});

///infowindow variables///
var info_marker1 = new google.maps.InfoWindow({content:content[0],});
var info_marker2 = new google.maps.InfoWindow({content:content[1],closeBoxUrl:""});
var info_marker3 = new google.maps.InfoWindow({content:content[1],});
var info_marker4 = new google.maps.InfoWindow({content:content[1],});
var info_marker5 = new google.maps.InfoWindow({content:content[1],});
var info_marker6 = new google.maps.InfoWindow({content:content[1],});
var info_marker7 = new google.maps.InfoWindow({content:content[1],});
var info_marker8 = new google.maps.InfoWindow({content:content[1],});
var info_marker9 = new google.maps.InfoWindow({content:content[1],});

///marker event listener for infowindow///
marker1.addListener("click", () => {info_marker1.open({anchor: marker1,map,});});
marker2.addListener("click", () => {info_marker2.open({anchor: marker2,map,});});
marker3.addListener("click", () => {info_marker3.open({anchor: marker3,map,});});
marker4.addListener("click", () => {info_marker4.open({anchor: marker4,map,});});
marker5.addListener("click", () => {info_marker5.open({anchor: marker5,map,});});
marker6.addListener("click", () => {info_marker6.open({anchor: marker6,map,});});
marker7.addListener("click", () => {info_marker7.open({anchor: marker7,map,});});
marker8.addListener("click", () => {info_marker8.open({anchor: marker8,map,});});
marker9.addListener("click", () => {info_marker9.open({anchor: marker9,map,});});

google.maps.event.addListener(map, "click", function(event) {
  info_marker1.close();
  info_marker2.close();
  info_marker3.close();
  info_marker4.close();
  info_marker5.close();
  info_marker6.close();
  info_marker7.close();
  info_marker8.close();
  info_marker9.close();
  info_p1.close();
  info_p2.close();
  info_wc1.close();
});
/*Route Liner
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
});*/

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
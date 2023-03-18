
///Main function///
function myMap() {
  var mapProp= {center:new google.maps.LatLng(13.738351063201533, 100.53043918229304),zoom:17,};

///Resizing icon///
var icon1 = {url:"icon/1.png",scaledSize: new google.maps.Size(40, 70)};
var icon2 = {url:"icon/2.png",scaledSize: new google.maps.Size(40, 70)};
var icon3 = {url:"icon/3.png",scaledSize: new google.maps.Size(40, 70)};
var icon4 = {url:"icon/4.png",scaledSize: new google.maps.Size(40, 70)};
var icon5 = {url:"icon/5.png",scaledSize: new google.maps.Size(40, 70)};
var icon6 = {url:"icon/6.png",scaledSize: new google.maps.Size(40, 70)};
var icon7 = {url:"icon/7.png",scaledSize: new google.maps.Size(40, 70)};
var icon8 = {url:"icon/8.png",scaledSize: new google.maps.Size(40, 70)};
var icon9 = {url:"icon/9.png",scaledSize: new google.maps.Size(40, 70)};
var icon_wc = {url:"icon/wc.png",scaledSize: new google.maps.Size(30, 30)};
var icon_parking = {url:"icon/parking.png",scaledSize: new google.maps.Size(30, 32)};
var icon9_firstaid = {url:"icon/firstaid.png",scaledSize: new google.maps.Size(30, 30)};

///Marker variables///
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//wc
var wc1 = new google.maps.Marker({map, position: wc[0], icon:icon_wc,});
var wc2 = new google.maps.Marker({map, position: wc[1], icon:icon_wc,});
var wc3 = new google.maps.Marker({map, position: wc[2], icon:icon_wc,});
var wc4 = new google.maps.Marker({map, position: wc[3], icon:icon_wc,});
var wc5 = new google.maps.Marker({map, position: wc[4], icon:icon_wc,});
var wc6 = new google.maps.Marker({map, position: wc[5], icon:icon_wc,});
//parking
var p1 = new google.maps.Marker({map, position: parking[0], icon:icon_parking,});
var p2 = new google.maps.Marker({map, position: parking[1], icon:icon_parking,});
//check points
var marker1 = new google.maps.Marker({position: points[0],map: map,icon:icon1,});
var marker2 = new google.maps.Marker({position: points[1],map: map,icon:icon2,});
var marker3 = new google.maps.Marker({position: points[2],map: map,icon:icon3,});
var marker4 = new google.maps.Marker({position: points[3],map: map,icon:icon4,});
var marker5 = new google.maps.Marker({position: points[4],map: map,icon:icon5,});
var marker6 = new google.maps.Marker({position: points[5],map: map,icon:icon6,});
var marker7 = new google.maps.Marker({position: points[6],map: map,icon:icon7,});
var marker8 = new google.maps.Marker({position: points[7],map: map,icon:icon8,});
var marker9 = new google.maps.Marker({position: points[8],map: map,icon:icon9,});

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
p1.addListener("click", () => {polygon(chula)});
p2.addListener("click", () => {removePolygon(chula)});


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
  removePolygon(chula);
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
///Area highlight

var chula = new google.maps.Polygon({
  path:[
    {lat:13.73098390764623,lng:100.53357803781358},
    {lat:13.735814285083151,lng:100.52168044682774},
    {lat:13.74709542904918,lng:100.52373771853887},
    {lat:13.74735345594048,lng:100.52411526660316},
    {lat:13.74532205132821,lng:100.53562684827126},
    {lat:13.74522121129751,lng:100.53572136464288}],
  strokeColor:"#F7B5BB",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor: "#F7B5BB",
  fillOpacity: 0.2
  });



  function polygon(x){
    x.setMap(map)
  }
  
  function removePolygon(x){
    x.setMap(null);
  }
  
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
}
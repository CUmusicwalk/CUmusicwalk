///Main function///
function myMap() {
var mapProp= {center:center,zoom:17,};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

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
var icon_firstaid = {url:"icon/firstaid.png",scaledSize: new google.maps.Size(30, 30)};
var icon_pos = {url:"icon/pos.png",scaledSize:new google.maps.Size(30,30)};
var icon_pinkmarket = {url:"icon/pink.png",scaledSize:new google.maps.Size(50,50)};
var icon_i1 = {url:"icon/sala.png",scaledSize:new google.maps.Size(60,40)};

///Marker variables///
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
var marker1 = new google.maps.Marker({position: points[0],map,icon:icon1,});
var marker2 = new google.maps.Marker({position: points[1],map,icon:icon2,});
var marker3 = new google.maps.Marker({position: points[2],map,icon:icon3,});
var marker4 = new google.maps.Marker({position: points[3],map,icon:icon4,});
var marker5 = new google.maps.Marker({position: points[4],map,icon:icon5,});
var marker6 = new google.maps.Marker({position: points[5],map,icon:icon6,});
var marker7 = new google.maps.Marker({position: points[6],map,icon:icon7,});
var marker8 = new google.maps.Marker({position: points[7],map,icon:icon8,});
var marker9 = new google.maps.Marker({position: points[8],map,icon:icon9,});
//first aid
var f1 = new google.maps.Marker({position: firstaid[0],map,icon:icon_firstaid,});
var f2 = new google.maps.Marker({position: firstaid[1],map,icon:icon_firstaid,});
var f3 = new google.maps.Marker({position: firstaid[2],map,icon:icon_firstaid,});
//other icon
var pinkmarket = new google.maps.Marker({position: other[0],map,icon:icon_pinkmarket,});
var i1 = new google.maps.Marker({position: {lat:13.735527784062258,lng:100.53133815627753},map,icon:icon_i1,});

///infowindow variables///
var info_marker1 = new google.maps.InfoWindow({content:content[0],});
var info_marker2 = new google.maps.InfoWindow({content:content[1],});
var info_marker3 = new google.maps.InfoWindow({content:content[2],});
var info_marker4 = new google.maps.InfoWindow({content:content[3],});
var info_marker5 = new google.maps.InfoWindow({content:content[4],});
var info_marker6 = new google.maps.InfoWindow({content:content[5],});
var info_marker7 = new google.maps.InfoWindow({content:content[6],});
var info_marker8 = new google.maps.InfoWindow({content:content[7],});
var info_marker9 = new google.maps.InfoWindow({content:content[8],});

var info_p1 = new google.maps.InfoWindow({content:content_parking[0],});
var info_p2 = new google.maps.InfoWindow({content:content_parking[1],});

var info_f1 = new google.maps.InfoWindow({content:content_firstaid[0],});
//var info_f2 = new google.maps.InfoWindow({content:content_firstaid[0],});
//var info_f3 = new google.maps.InfoWindow({content:content_firstaid[0],});

///Marker event listener for infowindow///
marker1.addListener("click", () => {info_marker1.open({anchor: marker1,map,});});
marker2.addListener("click", () => {info_marker2.open({anchor: marker2,map,});});
marker3.addListener("click", () => {info_marker3.open({anchor: marker3,map,});});
marker4.addListener("click", () => {info_marker4.open({anchor: marker4,map,});});
marker5.addListener("click", () => {info_marker5.open({anchor: marker5,map,});});
marker6.addListener("click", () => {info_marker6.open({anchor: marker6,map,});});
marker7.addListener("click", () => {info_marker7.open({anchor: marker7,map,});});
marker8.addListener("click", () => {info_marker8.open({anchor: marker8,map,});});
marker9.addListener("click", () => {info_marker9.open({anchor: marker9,map,});});

p1.addListener("click", () => {info_p1.open({anchor: p1,map,})});
p2.addListener("click", () => {info_p2.open({anchor: p2,map,})});

f1.addListener("click", () => {info_f1.open({anchor: f1,map,})});
f2.addListener("click", () => {info_f1.open({anchor: f2,map,})});
f3.addListener("click", () => {info_f1.open({anchor: f3,map,})});

///Close all infowindows///
google.maps.event.addListener(map, "click", function(event) {
  info_marker1.close();info_marker2.close();info_marker3.close();info_marker4.close();info_marker5.close();
  info_marker6.close();info_marker7.close();info_marker8.close();info_marker9.close();info_p1.close();info_p2.close();
  removePolygon(chula);
});

///Area highlight///
var chula = new google.maps.Polygon({map,path:cu_area,strokeColor:"#F7B5BB",strokeOpacity:0.8,strokeWeight:2,fillColor: "#F7B5BB",fillOpacity: 0.2});

///Route highlight///
var r1_2 = new google.maps.Polyline({path:p1_2,map:map,strokeColor:"#E4278F",strokeOpacity:0.8,strokeWeight:10});
var r2_3 = new google.maps.Polyline({path:p2_3,map:map,strokeColor:"#E4278F",strokeOpacity:0.8,strokeWeight:10});
var r3_4 = new google.maps.Polyline({path:p3_4,map:map,strokeColor:"#E4278F",strokeOpacity:0.8,strokeWeight:10});
var r4_5 = new google.maps.Polyline({path:p4_5,map:map,strokeColor:"#E4278F",strokeOpacity:0.8,strokeWeight:10});
var r5_6 = new google.maps.Polyline({path:p5_6,map:map,strokeColor:"#E4278F",strokeOpacity:0.8,strokeWeight:10});
var r6_7 = new google.maps.Polyline({path:p6_7,map:map,strokeColor:"#E4278F",strokeOpacity:0.8,strokeWeight:10});
var r7_8 = new google.maps.Polyline({path:p7_8,map:map,strokeColor:"#E4278F",strokeOpacity:0.8,strokeWeight:10});
var r8_9 = new google.maps.Polyline({path:p8_9,map:map,strokeColor:"#E4278F",strokeOpacity:0.8,strokeWeight:10});

///Set map function///
function polygon(x){x.setMap(map)}
function removePolygon(x){x.setMap(null);}
function showMarker(x){x.setMap(map)}
function removeMarker(x){x.setMap(null);}

///Map controls///
//toggle event area
const toggleareaButton = document.createElement("button");
toggleareaButton.textContent = "toggle event area";
toggleareaButton.classList.add("custom-map-control-button");
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(toggleareaButton);
toggleareaButton.addEventListener("click", () => {
  if(chula.getMap() == map){
    removePolygon(chula)
  }else{
    polygon(chula)
  }
}
);
//Toggle markers
const toggleMarker = document.createElement("button");
toggleMarker.textContent = "toggle marker";
toggleMarker.classList.add("custom-map-control-button");
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(toggleMarker);
toggleMarker.addEventListener("click", () => {
  if(marker1.getMap() == map){
    removeMarker(marker1);
    removeMarker(marker2);
    removeMarker(marker3);
    removeMarker(marker4);
    removeMarker(marker5);
    removeMarker(marker6);
    removeMarker(marker7);
    removeMarker(marker8);
    removeMarker(marker9);
  }else{
    showMarker(marker1);
    showMarker(marker2);
    showMarker(marker3);
    showMarker(marker4);
    showMarker(marker5);
    showMarker(marker6);
    showMarker(marker7);
    showMarker(marker8);
    showMarker(marker9);
  }
}
);

//Pan to event area
const EventlocationButton = document.createElement("button");
EventlocationButton.textContent = "Pan to event area";
EventlocationButton.classList.add("custom-map-control-button");
map.controls[google.maps.ControlPosition.TOP_CENTER].push(EventlocationButton);
EventlocationButton.addEventListener("click", () => {
map.panTo(center);}
);
  
//Location finder
infoWindow = new google.maps.InfoWindow();
const locationButton = document.createElement("button");

locationButton.textContent = "Pan to Current Location";
locationButton.classList.add("custom-map-control-button");
map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
locationButton.addEventListener("click", () => {
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
icon:icon_pos,
animation:google.maps.Animation.BOUNCE
});
},
() => {handleLocationError(true, infoWindow, map.getCenter());}
);
} 
else {
// Browser doesn't support Geolocation
handleLocationError(false, infoWindow, map.getCenter());}
});

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
  browserHasGeolocation
  ? "Error: The Geolocation service failed."
  : "Error: Your browser doesn't support geolocation."
  );
  }
//end of main func
}






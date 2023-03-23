///Coordinates & variables///
var center = {lat:13.738351063201533, lng:100.53043918229304}
var points = [
    {lat: 13.735936017497728, lng: 100.53071747155853},
    {lat: 13.736491201651623, lng: 100.52879268940323},
    {lat: 13.737257102262152, lng: 100.52858397219916},
    {lat: 13.738885597064707, lng: 100.52844705631053},
    {lat: 13.74012083449702, lng:100.52908820114442},
    {lat: 13.73972712877361, lng: 100.532117338905},
    {lat: 13.739700384452913, lng:100.53238299158335},
    {lat: 13.737094177735804, lng: 100.53186628737458},
    {lat: 13.736582894612065, lng:100.53177858449014}
  ]
var wc = [
    {lat:13.740050754548463, lng: 100.52872753493585},
    {lat:13.739793738931343, lng: 100.5308531220263},
    {lat:13.739551620500956, lng: 100.53247570464549},
    {lat:13.736470878543077, lng: 100.53003143953347},
    {lat:13.737376231942068, lng: 100.52831082138954},
    {lat:13.737535545314351, lng: 100.53132312710174},
    {lat:13.737182624690977, lng:100.53251758318298},
    {lat:13.735988796584499, lng:100.53036776435104}
  ]
var parking = [
    {lat:13.73930838287045, lng: 100.53458867112415},
    {lat:13.73395076658045, lng: 100.53331841271162},
    {lat:13.732921109042222, lng:100.53056571209754},
    {lat:13.735913383508008, lng:100.52527952106156},
    {lat:13.744344052190726, lng:100.52980394631797},
    {lat:13.744032629941461, lng:100.52607938437095},
    {lat:13.743095760323081, lng:100.52562861686633}
  ]
var firstaid = [
    {lat:13.739954279866682, lng:100.52942214045767},
    {lat:13.739585215076637, lng:100.53209238914084},
    {lat:13.737330841360821, lng:100.53217228240115}
  ]
var other = [
    {lat:13.73831165461666,lng: 100.53095990139335},
    {lat:13.738408247538016,lng:100.53169698332225},
    {lat:13.73739091222374,lng:100.53192698522354},
    {lat:13.739579273331067,lng:100.52820558062041},
    {lat:13.73897956952879,lng:100.52771284014392}
]
  var content = [
    '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/1c.png"><h1>อาคารมหามกุฏ</h1><h3>MAHAMAKUT (พ.ศ. 2546)</h3><div class="facility"></div></div><div class="info-window-pic"><img src="image/mahamakut.png"></div><div class="info-window-content"><img id="show-type" src="icon/Registration.png"><p id="type"><จุดลงทะเบียนและรับแผนที่></p><p id="content">อาคารเรียนและปฏิบัติของคณะวิทยาศาสตร์ และเป็นอาคารที่สูงที่สุดในจุฬาฯด้วยความสูงกว่า 85 เมตร<br><br>*ลงทะเบียนได้ที่บริเวณใต้อาคาร*</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>',
    '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/2c.png"><h1>อุโมงค์ลอดถนนพญาไท</h1><h3>CU TUNNEL (พ.ศ.2517)</h3><div class="facility"></div></div><div class="info-window-pic"><img src="image/tunnel.png"></div><div class="info-window-content"><img id="show-type" src="icon/Exhibition.png"><p id="type"><อาคารจุฬาฯ ผ่านกาลเวลา></p><p id="content">อุโมงค์ลอดถนนแห่งแรกในประเทศ ไทย สร้างโดยจุฬาฯและเทศบาลกทม. เพื่อให้นิสิต นักเรียน และประชาชนข้ามถนนได้อย่างปลอดภัย</p><p id="l57">*เช็คอินที่คณะนิติฯหลังขึ้นจากอุโมงค์*</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>',
    '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/3c.png"><h1>ลานไทร ครุศาสตร์</h1><h3>FACULTY OF EDUCATION</h3><div class="facility"></div></div><div class="info-window-pic"><img src="image/edu.png"></div><div class="info-window-content"><img id="show-type" src="icon/Concert.png"><p id="type"><แสดงดนตรีโดย...></p><p id="content">ในปีพ.ศ. 2500 คณะครุศาสตร์แยกออกจากคณะอักษรศาสตร์และสถาปนาเป็นคณะที่ 7 ของจุฬาฯ</p><p id="l49">*ลานไทรอยู่ตรงข้ามโรงอาหาร<br>การแสดงเวลา xx.xx - xx.xxน.*</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>',
    '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/4c.png"><h1>อาคารจามจุรี 4</h1><h3>CHAMCHURI 4</h3><div class="facility"></div></div><div class="info-window-pic"><img src="image/cham4.png"></div><div class="info-window-content"><img id="show-type" src="icon/Exhibition.png"><p id="type"><บุคคลสำคัญของโลกที่เคยมาจุฬาฯ><br><นิทรรศการภาพสีน้ำประกอบปฏิทิน></p><p id="content" style="top:30%!important">อาคารสำนักงานนี้อยู่ติดกับลานหน้าหอสมุดกลาง ที่ตอนนี้มีดอกกัลปพฤกษ์บานสะพรั่งสวยงาม</p><p id="l58">*รับของที่ระลึกใต้โถงอาคารจามจุรี 3*</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>',
    '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/5c.png"><h1>เรือนภะรตราชา</h1><h3>RUAN PAROT RACHA (พ.ศ.2456)</h3><div class="facility"></div></div><div class="info-window-pic"><img src="image/parata.png"></div><div class="info-window-content"><img id="show-type" src="icon/Concert.png"><p id="type"><แสดงดนตรีโดย...></p><p id="content">เรือนที่ใช้เป็นบ้านพักอาจารย์ในสมัยร.6 ภายหลังได้รับการซ่อมแซมจนได้เป็นอาคารอนุรักษ์ดีเด่น และตั้งชื่อเป็นที่ระลึกถึงพระยาภะรตราชา</p><p id="l57">การแสดงเวลา xx.xx - xx.xxน.</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>',
    '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/6c.png"><h1>ลานพิพิธศิลป์</h1><h3></h3><div class="facility"></div></div><div class="info-window-pic"><img src="image/run.png"></div><div class="info-window-content"><img id="show-type" src="icon/Concert.png"><img id="show-type2" src="icon/Exhibition.png"><p id="type"><แสดงดนตรีโดย...><br><นิทรรศการนวัตกรรมจุฬาฯ></p><p id="content" style="top:30%!important">ลานข้างอาคารพิพิธภัณฑ์จุฬาฯ มีเอกลักษณ์คือ รูปปั้นบูมบาลาก้า</p><p id="l49">*การแสดงเวลา xx.xx - xx.xxน.*<br>*นิทรรศการอยู่บริเวณข้างลาน*</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>',
    '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/7c.png"><h1>พิพิธภัณฑ์จุฬาฯ</h1><h3>CHULA MUSEUM (พ.ศ.2560)</h3><div class="facility"></div></div><div class="info-window-pic"><img src="image/CUmuseum.png"></div><div class="info-window-content"><img id="show-type" src="icon/Exhibition.png"><p id="type"><พิพิธภัณฑ์จุฬาฯ></p><p id="content">จัดสร้างเพื่อเฉลิมฉลองวาระครบ 100 ปีจุฬาฯ พิพิธภัณฑ์มีทั้งหมด 4 ชั้น ซึ่งได้รวบรวมข้อมูลที่น่าสนใจเกี่ยวกับจุฬาฯ ไว้มากมาย</p><p id="l57">*รับของที่ระลึกหลังประทับตราเช็คอิน*</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>',
    '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/8c.png"><h1>ตึกจักรพงษ์</h1><h3>CHULA MEMORIAL HALL (พ.ศ.2475)</h3><div class="facility"></div></div><div class="info-window-pic"><img src="image/history.PNG"></div><div class="info-window-content"><img id="show-type" src="icon/Exhibition.png"><p id="type"><หอประวัติจุฬาลงกรณ์><br><กิจกรรมCPRกู้ชีพ></p><p id="content" style="top:30%!important">ตึกนี้สร้างขึ้นเป็นสโมสรส่วนกลางของนิสิต ภายหลังได้มีการปรับปรุงเป็นหอประวัติจุฬาฯ ในปีพ.ศ.2531</p><p id="l58">*รับของที่ระลึกหลังร่วมกิจกรรมCPR*</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>',
    '<div class="info-window"><div class="info-window-header"><img id="checkin" src="icon/9c.png"><h1>ลานจักรพงษ์</h1><h3>CHAKKRABHONG SQUARE</h3><div class="facility"></div></div><div class="info-window-pic"><img src="image/Chakkapong.png"></div><div class="info-window-content"><img id="show-type" src="icon/Concert.png"><img id="show-type2" src="icon/Exhibition.png"><p id="type"><แสดงดนตรีโดย...><br><นิทรรศการนวัตกรรมจุฬาฯ></p><p id="content" style="top:30%!important">ในปีพ.ศ. 2557 ได้มีเปลี่ยนแปลงบริเวณนี้จากสระว่ายน้ำเป็นสนามหญ้า</p><p id="l51">*นิทรรศการจัดหน้าตึกมหาวชิรุณหิศ*<br>*การแสดงเวลา xx.xx - xx.xxน.*</p><button><a href="info.html">เพิ่มเติม ></a></button></div></div>'
]
var content_firstaid = [
    'จุดปฐมพยาบาล'
]
var content_parking = [
    '<div><p>อาคารจอดรถ 2: อักษรศาสตร์</p><table><tr><th>ชั่วโมง</th><th>ค่าจอดรถ</th></tr><tr><td>6 ชั่วโมง</td><td>50.-</td></tr></table></div>',
    '<div><p>อาคารจอดรถ 3: รัฐศาสตร์</p><table><tr><th>ชั่วโมง</th><th>ค่าจอดรถ</th></tr><tr><td>6 ชั่วโมง</td><td>50.-</td></tr><tr><td>ต่อชั่วโมง</td><td>15.-</td></tr></table></div>'
]
var content_wc = [
    'สุขาเรือนจุฬานฤมิต',
    'สุขาคณะสถาปัตฯ',
    'สุขาอาคารพิพิธภัณฑ์จุฬาฯ',
    'สุขาอาคารแถบ นีละนิธิ',
    'สุขาอาคารมิ่งขวัญการศึกษาไทย ครุศาสตร์',
    'รถสุขา ถนนหน้าคณะวิทยาฯ อาคารเคมี 2',
    'สุขาตึก 3 คณะวิศวฯ<br>1.True labs<br>2.หลังห้องประชุมใหญ่',
    'สุขาโถงอาคารมหามกุฏ'
]

///Chula area///
var cu_area = [
    {lat:13.73098390764623,lng:100.53357803781358},
    {lat:13.735814285083151,lng:100.52168044682774},
    {lat:13.74709542904918,lng:100.52373771853887},
    {lat:13.74735345594048,lng:100.52411526660316},
    {lat:13.74532205132821,lng:100.53562684827126},
    {lat:13.74522121129751,lng:100.53572136464288}
]

///Route line///
var p1_2 = [points[0],{lat:13.736196453323295, lng:100.53065343575844},points[1]];
var p2_3 = [points[1],{lat:13.736517190451057, lng:100.52864937174735},{lat:13.73659224724853, lng:100.52865881001117},{lat:13.736689667174902, lng:100.52859940195353},{lat:13.736732322257097, lng:100.52848430707753},points[2]];
var p3_4 = [points[2],{lat:13.73806164092444, lng:100.52874698414377},{lat:13.738162397557383, lng:100.52812402890073},{lat:13.738697596876056, lng:100.52823344211511},{lat:13.738673666094055, lng:100.52841965700826},points[3]];
var p4_5 = [points[3],{lat:13.739131324636936, lng:100.52850181050339},{lat:13.73914961226837, lng:100.5283710069051},{lat:13.73978679856413, lng:100.52846521961266},{lat:13.739749047904635, lng:100.52868426416588},{lat:13.740156819212446, lng:100.52873718600249},points[4]];
var p5_6 = [points[4],{lat:13.74000480462624, lng:100.52972786720788},{lat:13.739887315661498, lng:100.52970586452022},{lat:13.739835448016617, lng:100.53002785621557},{lat:13.739719237255507, lng:100.53001399144337},{lat:13.73940731350297, lng:100.53207706662846},points[5]];
var p6_7 = [points[5],points[6]];
var p7_8 = [points[6],{lat:13.739243126302277, lng:100.53234141731937},{lat:13.739333014725759, lng:100.53167086510905},{lat:13.737653359004211, lng:100.53139171486295},{lat:13.737525343265775, lng:100.53211462903755},{lat:13.73706358739708, lng:100.53204644003202},points[7]];
var p8_9 = [points[7],points[8]];
var parking1_p1 = [parking[0],points[6]];
var parking2_p1 = [points[1],points[0]];


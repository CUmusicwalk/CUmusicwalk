///Coordinates & variables///
var points = [
    {lat: 13.735936017497728, lng: 100.53071747155853},
    {lat: 13.736522929590551, lng: 100.52953254883069},
    {lat: 13.737257102262152, lng: 100.52858397219916},
    {lat: 13.738885597064707, lng: 100.52844705631053},
    {lat: 13.740030280173663, lng: 100.52889362961828},
    {lat: 13.73972712877361, lng: 100.532117338905},
    {lat: 13.739521656258006, lng: 100.53230795763523},
    {lat: 13.737094177735804, lng: 100.53186628737458},
    {lat: 13.736474278162431, lng: 100.53169557601313}
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
  var firstaid = [
    
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

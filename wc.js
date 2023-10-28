setInterval(() => {
    india();
    usa();
    uk();
    russia();
}, 1000);

function india() {
    let d = new Date();
    let a = String(d).slice(0, 15);


    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let ampm = hr > 12 ? 'PM' : "AM";

    rotateh = hr * 30 + min / 2;
    rotatem = 6 * min;
    rotates = 6 * sec;

    in_h.style.transform = `rotate(${rotateh}deg)`;
    in_m.style.transform = `rotate(${rotatem}deg)`;
    in_s.style.transform = `rotate(${rotates}deg)`;

    hr = String(d.getHours()).padStart(2, '0');
    min = String(d.getMinutes()).padStart(2, '0');
    sec = String(d.getSeconds()).padStart(2, '0');

    document.getElementById('in_time').innerHTML = hr + ':' + min + ':' + sec + " " + ampm;
    d = new Date().toLocaleString("en-US", {
        hour12: true,
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    }).split(',');
    // console.log(d);
    document.getElementById('in_date').innerHTML = d[0].substring(0,3) +','+ d[1] +','+ d[2];    
}


function usa() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let d1 = new Date().toLocaleString("en-US", {
        timeZone:
            "America/New_York",
        hour12: true
    });
//    console.log(d1)
    let hr = d1.split(',')[1].slice(1,2).padStart(2,'0');
    let min = d1.split(',')[1].slice(3,5).padStart(2,'0');
    let sec = d1.split(',')[1].slice(6,8).padStart(2,'0');
    let ampm = d1.split(',')[1].slice(9,11).padStart(2,'0');
    // console.log(ampm)

    rotateh = hr*30 + min/2;
    rotatem = 6*min;
    rotates = 6*sec;

    us_h.style.transform = `rotate(${rotateh}deg)`;
    us_m.style.transform = `rotate(${rotatem}deg)`;
    us_s.style.transform = `rotate(${rotates}deg)`;


    document.getElementById('us_time').innerHTML =  hr + ':' + min + ':' + sec + " " + ampm;

     d1 = new Date().toLocaleString("en-US", {
        timeZone:
            "America/New_York",
        hour12: true,
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    }).split(',');
    // console.log(d1);
    document.getElementById('us_date').innerHTML = d1[0].substring(0,3) +'  ,'+ d1[1] +','+ d1[2];
}

function uk(){
    let d1 = new Date().toLocaleString("en-US", {
        timeZone:
            "Europe/London",
        hour12: true
    });
//    console.log(d1);
   let time=d1.split(',')[1];
   let hr = time.split(':')[0].replace(' ','0');
//    console.log(hr)
   let min = time.split(':')[1].padStart(2,'0');
//    console.log(min)
   let sec = time.split(':')[2].slice(0,2);
//    console.log(sec)
   let ampm = d1.split(',')[1].slice(9,11).padStart(2,'0');
    // console.log(ampm)

    rotateh = hr*30 + min/2;
    rotatem = 6*min;
    rotates = 6*sec;

    uk_h.style.transform = `rotate(${rotateh}deg)`;
    uk_m.style.transform = `rotate(${rotatem}deg)`;
    uk_s.style.transform = `rotate(${rotates}deg)`;


    document.getElementById('uk_time').innerHTML =  hr + ':' + min + ':' + sec + " " + ampm;
    // document.getElementById('uk_time').innerHTML = time;

     d1 = new Date().toLocaleString("en-US", {
        timeZone:
            "Europe/London",
        hour12: true,
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    }).split(',');
    document.getElementById('uk_date').innerHTML = d1[0].substring(0,3) +','+ d1[1] +','+ d1[2];
}

function russia(){
    let d1 = new Date().toLocaleString("en-US", {
        timeZone:
            "Europe/Moscow",
        hour12: true
    });
    //    console.log(d1);
    // document.getElementById('rs_time1').innerHTML = d1;

   let hr = d1.split(',')[1].slice(1,3).padStart(2,'0');
   let min = d1.split(',')[1].slice(4,6).padStart(2,'0');
   let sec = d1.split(',')[1].slice(7,9).padStart(2,'0');
   let ampm = d1.split(',')[1].slice(10,12).padStart(2,'0');
    // console.log(min)

    rotateh = hr*30 + min/2;
    rotatem = 6*min;
    rotates = 6*sec;

    rs_h.style.transform = `rotate(${rotateh}deg)`;
    rs_m.style.transform = `rotate(${rotatem}deg)`;
    rs_s.style.transform = `rotate(${rotates}deg)`;


    document.getElementById('rs_time').innerHTML =  hr + ':' + min + ':' + sec + " " + ampm;

     d1 = new Date().toLocaleString("en-US", {
        timeZone:
            "Europe/London",
        hour12: true,
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    }).split(',');
    document.getElementById('rs_date').innerHTML = d1[0].substring(0,3) +','+ d1[1] +','+ d1[2];
}
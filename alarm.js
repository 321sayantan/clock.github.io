const ringtone = new Audio("ringtone.mp3");

var hour, minute, am_pm, isalarm=false;

function realtime(){
    const date = new Date;
    
    const hr = String(date.getHours()).padStart(2,'0');
    const min = String(date.getMinutes()).padStart(2,'0');
    const sec = String(date.getSeconds()).padStart(2,'0');
    const ampm = hr<12?"AM":"PM";
    
    document.getElementById('hr').innerHTML=hr;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
    document.getElementById('am/pm').innerHTML=ampm;

    

    if(hour==hr && minute==min && am_pm==ampm && isalarm==true)
    {
        ringtone.play();
        ringtone.loop=true;
    }

    console.log(hour)
}
setInterval(()=>{
    realtime();
},1000);

const setalarm = document.getElementById('setalarm');
setalarm.addEventListener('click',()=>{
    if(isalarm)
    {
        document.getElementById('h').disabled=false;
        document.getElementById('m').disabled=false;
        document.getElementById('am_pm').disabled=false;
        ringtone.pause();
        isalarm = false;
        setalarm.innerHTML=`SET ALARM<img id="bell" src="bell_ring.png" alt="">`;
        document.querySelector('#bell').src="bell_ring.png";
    }
    else
    {
    hour = document.getElementById('h').value;
    minute = document.getElementById('m').value;
    am_pm = document.getElementById('am_pm').value;

    if(String(hour)=="Hours" || String(minute)=="Minutes" || String(am_pm)=="AM/PM")
    {
        alert("Please select the correct time");
        return;
    }

    document.getElementById('h').disabled=true;
    document.getElementById('m').disabled=true;
    document.getElementById('am_pm').disabled=true;

    setalarm.innerHTML=`CLEAR ALARM<img id="bell" src="bell_ring.png" alt="">`;
    document.querySelector('#bell').src="bell.png";
    isalarm = true;
    }
});
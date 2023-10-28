let timer= document.getElementById('timer');
let start= document.getElementById('start');
let pause= document.getElementById('pause');
let reset= document.getElementById('reset');

let msec=0;
let sec=0;
let mins=0;

let timerid=null;

start.addEventListener('click',()=>{
   if(timerid!=null)
        clearInterval(timerid);

    timerid = setInterval(()=>{
        msec++;
        if(msec==100){
            msec=0;
            sec++;
            if(sec==60)
            {
                sec=0;
                mins++;
            }
        }

        ms.innerHTML= msec<10 ? `0${msec}`:msec;
        s.innerHTML= sec<10 ? `0${sec}`:sec;
        m.innerHTML= mins<10 ? `0${mins}`:mins;
    },10);
});

pause.addEventListener('click',()=>{
    clearInterval(timerid);
});

reset.addEventListener('click',()=>{
    clearInterval(timerid);
    ms.innerHTML='00';
    s.innerHTML= '00';
    m.innerHTML= '00';
    msec = sec = mins = 0;
});
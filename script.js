setInterval(() => {
    let d = new Date();

    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    rotateh = hr*30 + min/2;
    rotatem = 6*min;
    rotates = 6*sec;

    hour.style.transform= `rotate(${rotateh}deg)`;
    minutes.style.transform= `rotate(${rotatem}deg)`;
    seconds.style.transform= `rotate(${rotates}deg)`;
}, 300);
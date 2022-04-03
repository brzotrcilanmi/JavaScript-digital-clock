window.onload =function correcTime(){

    let time = document.querySelector('.time');
    let clock = new Date();

    let h = clock.getHours();
    let min = clock.getMinutes();
    let s = clock.getSeconds()

    if(h <10){
        h = '0' + clock.getHours()
    }else{
        h = clock.getHours()
    }
    if(min<10){
        min = '0' + clock.getMinutes()
    }else{
        min = clock.getMinutes()
    }
    if(s <10){
        s = '0' + clock.getSeconds()
    }else{
        s = clock.getSeconds()
    }
    time.textContent = `${h}:${min}:${s}`;
    setTimeout(correcTime, 1000);
}


let timerElement = document.getElementById("timer");

let seconde = 0; 
let minute = 0;
let heure = 0;
let isPushed = false;


function temps(){
    if (seconde == 60){
        seconde = 0;
        minute++;
    }
    if (minute == 60){
        seconde = 0;
        minute = 0;
        heure++;
    }
    if (heure == 24){
        pause();
    }

    if (seconde < 10){
        timerElement.innerHTML = `${heure}h:${minute}m:0${seconde}s`;
    }
    if (minute < 10){
        timerElement.innerHTML = `${heure}h:0${minute}m:${seconde}s`;
    }
    if (heure < 10){
        timerElement.innerHTML = `0${heure}h:${minute}m:${seconde}s`;
    }
    if (seconde < 10 && minute < 10){
        timerElement.innerHTML = `${heure}h:0${minute}m:0${seconde}s`;
    }
    if (seconde < 10 && heure < 10){
        timerElement.innerHTML = `0${heure}h:${minute}m:0${seconde}s`;
    }
    if (minute < 10 && heure < 10){
        timerElement.innerHTML = `0${heure}h:0${minute}m:${seconde}s`;
    }
    if (seconde < 10 && minute < 10 && heure < 10){
        timerElement.innerHTML = `0${heure}h:0${minute}m:0${seconde}s`;
    }
    


    seconde++

}

function timerStart(){
    if (isPushed == false){
        voyageSpacioTemporel = setInterval(temps, 1000);
        isPushed = true;
    }
    
}

function pause(){
    clearInterval(voyageSpacioTemporel);
    isPushed = false;
}

function reset(){
    pause()
    seconde = 0;
    minute = 0;
    heure = 0;

    timerElement.innerHTML = '00h:00m:00s';
}
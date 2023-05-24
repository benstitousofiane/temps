// Développé par Benstitou Sofiane
// initialisationd des différentes valeurs
let timeElement = document.getElementById('time');

let heureElement = document.getElementById('getHeure');
let minuteElement = document.getElementById('getMinute');
let secondeElement = document.getElementById('getSeconde');

let heure;
let minute;
let seconde;

heureElement.addEventListener('input', function(){
    heure = heureElement.value;
});
minuteElement.addEventListener('input', function(){
    minute = minuteElement.value;
});
secondeElement.addEventListener('input', function(){
    seconde = secondeElement.value;
})

let isPushed = false;



function temps(){
    // traitement de données par conditions
    if (heure === undefined){
        heure = 0;
    }
    if (minute === undefined){
        minute = 0;
    }
    if (seconde === undefined){
        seconde = 0;
    }
    if (heure > 23){
        heure = 23;
    }
    if (minute > 59){
        minute = 59;
    }
    if (seconde > 59){
        seconde = 59;
    }
    if (heure < 0){
        heure = 0;
    }
    if (minute < 0){
        heure = 0;
    }
    if (seconde < 0){
        seconde = 0;
    }
    if (seconde == 0 && minute == 0 && heure == 0){
        pause();
    } else if (seconde == 0 && minute > 0){
        minute--;
        seconde = 59;

    } else if (seconde == 0 && minute == 0){
        heure--;
        minute = 59;
        seconde = 59; 
    }

    if (seconde < 10){
        timeElement.innerHTML = `${heure}h:${minute}m:0${seconde}s`;
    }
    if (minute < 10){
        timeElement.innerHTML = `${heure}h:0${minute}m:${seconde}s`;
    }
    if (heure < 10){
        timeElement.innerHTML = `0${heure}h:${minute}m:${seconde}s`;
    }
    if (seconde < 10 && minute < 10){
        timeElement.innerHTML = `${heure}h:0${minute}m:0${seconde}s`;
    }
    if (seconde < 10 && heure < 10){
        timeElement.innerHTML = `0${heure}h:${minute}m:0${seconde}s`;
    }
    if (minute < 10 && heure < 10){
        timeElement.innerHTML = `0${heure}h:0${minute}m:${seconde}s`;
    }
    if (seconde < 10 && minute < 10 && heure < 10){
        timeElement.innerHTML = `0${heure}h:0${minute}m:0${seconde}s`;
    }
    seconde--;
}

function dilatation(){
    if (isPushed == false){
        voygageSpacioTemporel = setInterval(temps, 1000);
        isPushed = true;
    }
}

function pause(){
    clearInterval(voygageSpacioTemporel);
    isPushed = false;
}

function reset(){
    pause();
    heureElement.value = '0';
    minuteElement.value = '0';
    secondeElement.value = '0';

    heure = 0;
    minute = 0;
    seconde = 0;
    timeElement.innerHTML = '00h:00m:00s';
}
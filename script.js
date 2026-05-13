let interval;

function clearLights {
    document.getElementById('red').classList.remove('active');
    document.getElementById('yellow').classList.remove('active');
    document.getElementById('green').classList.remove('active');
}
function setLight(color){
    clearLights();
    document.getElementById(color)
}
function setLight(color){
    clearLights();
    document.getElementById(color).classList.add('active');
}
function startAuto(){
    let sequence =[ 'red', 'green', 'yellow'];
    let i = 0;

    interval = setInterval(() => {
        setLight(sequence[i]);
        i = (i + 1) % sequence.length;
    }, 2000);
}

function stopAuto(){
    clearInterval(interval);
}
startAuto();


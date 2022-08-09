

let mil =0
let seg =0
let min =0
let hr = 0 
let interval

//função para formatar o cronometro para dois digitos"
function twoDigits(digits){
    if(digits<10){
        return "0" + digits
    }else{
        return digits
    }
}

function iniciar(){
 interval = setInterval(count,10)
}

function pausar(){
 clearInterval(interval)
}

function parar(){
clearInterval(interval);
mil = 0
seg = 0
min = 0
document.getElementById("count").innerText ='00:00:00'
}

function count(){
    mil++
    if(mil == 60){
        seg++
        mil = 0
    }
    if(seg == 60){
        min++
        seg = 0
    }
    if(min == 60){
       min++ 
    
    }
    document.getElementById("count").innerText = twoDigits(min) + ":" +twoDigits(seg) + ":" +twoDigits(mil) 
}
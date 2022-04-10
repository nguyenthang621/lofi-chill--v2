
var inputPomodoro=document.querySelector("#inputPomodoro")
var inputBreak=document.querySelector("#inputBreak")
var btnStop=document.querySelector("#stop")
var btnContinue=document.querySelector("#continue")
var btnDone=document.querySelector("#btnDone")

var currentTime=0;
var myTime;

function setTime(totalSeconds){
    currentTime=totalSeconds
    clearTimeout(myTime)
    countdown()
}
function countdown(){
    var min=document.querySelector("#min")
    var sec=document.querySelector("#sec")
    currentTime--
    min.innerHTML=Math.floor(currentTime / 60)
    sec.innerHTML=currentTime % 60;
    if(currentTime>0){
        console.log(currentTime);
        myTime=setTimeout(function(){countdown(currentTime)},1000)
    }
    else if(currentTime===0){
        console.log("time out");
    }

}
btnContinue.onclick=()=>{
    setTime(currentTime)
}

btnDone.onclick=()=>{
    var minutes=inputPomodoro.value
    var totalSeconds=minutes*60
    setTime(totalSeconds)
    // clearTimeout(myTime)
}


btnStop.onclick=()=>{
    clearTimeout(myTime)
}
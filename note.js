const $=document.querySelector.bind(document)
const canvas=$("canvas")
const btnColor=$(".btn__color")
const btnEraser=$(".btn__eraser")
const btnPen=$(".btn__pen")
const inputColor=$(".input__color")
const btnClear = $(".btn__clear__all")
const btnSave = $(".btn__print")
const style = $('[data="test"]')
const effectBtns=document.querySelectorAll(".effectBtn")
const btnMorePage = $(".more__page")

var ctx=canvas.getContext("2d")  // got context

var isDrawing=false;
var currentColor="#000000";
var colorPaint;
var sizePen= 10;
var currentPoi={
    x:0,
    y:0
}
var lastPoi={
    x:0,
    y:0
}
canvas.addEventListener("mousedown", function(e) {
    currentPoi ={
        x:e.offsetX,
        y:e.offsetY
    }
    isDrawing = true;
})
canvas.addEventListener("mousemove", function(e) {
    if(isDrawing){
        lastPoi ={
            x:e.offsetX,
            y:e.offsetY
        }
        drawCircle();
        drawLine();
    }
})

canvas.addEventListener("mouseup",function(){
    isDrawing=false;
})

btnColor.addEventListener("change",function(e){
    currentColor = e.target.value;
    colorPaint=currentColor;
    setData(this.value,currentColor);
})


btnEraser.addEventListener("mousedown",function(){
    colorPaint = "#ffffff"
})

btnPen.addEventListener("click",function(){
    colorPaint=currentColor;
})

inputColor.addEventListener("input",function(e){
    sizePen=e.target.value;
})

btnClear.onclick=function(){
    var canvasScreen = canvas.getClientRects()[0]; // thông số của canvas 
    ctx.clearRect(0,0,canvasScreen.width,canvasScreen.height);
}

btnSave.onclick=function(){
    const output = canvas.toDataURL('image/png')
	btnSave.setAttribute("href",output)
}

inputColor.oninput = function() {
    setData(this.value,currentColor);
}

// btnMorePage.onclick=function(){
//     ("them trang co the mat trang vua r")
//     canvas.height=canvas.clientHeight*2
// }

// effectBtns.forEach(function(btn){
//     btn.onclick=()=>{
//         btn.classList.add("effectPushBtn");
//         setTimeout(()=>btn.classList.remove("effectPushBtn"),100)
//     }
// })


// hàm thay đổi toạ độ ban đầu :
const changeCoordinates=function(){
    currentPoi.x=lastPoi.x;
    currentPoi.y=lastPoi.y;
}


// hafm vẽ đg thẳng :
 const drawLine=function(){
    ctx.beginPath()
    ctx.moveTo(currentPoi.x, currentPoi.y);
    ctx.lineTo(lastPoi.x, lastPoi.y);
    ctx.strokeStyle=colorPaint;
    ctx.lineWidth=sizePen*2;
    ctx.stroke();
    changeCoordinates();
 }

 // hàm vẽ đường tròn và fill :
    const drawCircle=function(){
        ctx.beginPath();
        ctx.arc(currentPoi.x, currentPoi.y,sizePen,0,2*Math.PI); // vẽ từ toạ độ điểm ban đầu (10: là bán kính) (0: góc bán đầu) ( quét góc 2pi)
        ctx.fillStyle=colorPaint;
        ctx.fill();// tô đường tròn 
    }

//
function setData(x,currentColor){
    style.innerHTML = `.slider::-webkit-slider-thumb { width:${x*2}px !important; height: ${x*2}px !important; background-color:${currentColor} !important;}`;
}
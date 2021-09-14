var imgslideAll = document.getElementById("imgslideAll");
var picClass = document.getElementsByClassName("picClass");
var imgLeft  = document.getElementById("imgslidesLeft");
var imgRight = document.getElementById("imgslidesRight");
var imgBtn = document.getElementsByClassName("imgslideBtn");
var imgslideBtns = document.getElementById("imgslideBtns");
var pageIdx = 0;
var html="";




imgRight.addEventListener("click",()=>{
    pageIdx++;
    if(pageIdx>picClass.length-1){
        pageIdx=0;
    }
    imgslideAll.style.transform = "translateX(-"+pageIdx+"00%)";
    clearColor();
    imgBtn[pageIdx].style.backgroundColor="#f00";
    
})

imgLeft.addEventListener("click",()=>{
    pageIdx--;
    if(pageIdx<0){
        pageIdx=picClass.length-1;
    }
    imgslideAll.style.transform = "translateX(-"+pageIdx+"00%)";
    clearColor();
    imgBtn[pageIdx].style.backgroundColor="#f00";
    
})
for(var i=0;i<picClass.length;i++){
    html += '<a class="imgslideBtn imgslideBtn'+i+'"></a>'
}


imgslideBtns.innerHTML=html;
imgBtn[0].style.backgroundColor="#f00";
for(var n=0;n<picClass.length;n++){
    imgBtn[n].addEventListener("click",showImg);
}
function showImg(){ 
    pageIdx = Number(this.className.substr(23));
    console.log(pageIdx);
    imgslideAll.style.transform = "translateX(-"+pageIdx+"00%)";
    clearColor();
    imgBtn[pageIdx].style.backgroundColor="#f00";
    
}
function clearColor(){
    for(var x=0;x<picClass.length;x++){
        imgBtn[x].style.backgroundColor="#fff";
    }
}
setInterval(()=>{
    pageIdx++;
    if(pageIdx>picClass.length-1){
        pageIdx=0;
    }
    imgslideAll.style.transform = "translateX(-"+pageIdx+"00%)";
},5000)
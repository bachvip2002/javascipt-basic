var img = ["./img/2.png","./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg"]; 
var chuyen_anh = document.getElementById("anh");
var luuanh = [];
function loadimg(){
for(var i=0 ; i < img.length ; i++){
    luuanh[i] = new Image();
    luuanh[i].src = img[i];
    }
}
var so = document.querySelector("#so");
var chiso = 0;
function right(){
    chiso++;
    if(chiso == luuanh.length){
        chiso = 0;
    }
    chuyen_anh.src = luuanh[chiso].src;
    so.innerHTML = (chiso+1) +"/" + img.length;
}
function left(){
    chiso--;
    if(chiso<0){
        chiso = img.length-1; 
    }
    chuyen_anh.src = luuanh[chiso].src;
    so.innerHTML = (chiso+1) +"/" + img.length;
}
so.innerHTML = (chiso+1) +"/" + img.length;
loadimg();
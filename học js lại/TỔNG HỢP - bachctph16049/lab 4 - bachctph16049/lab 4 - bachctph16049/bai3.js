function dongho(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    setTimeout("dongho()",1000)//1000 là 1s
    var dh = h + ":" + m + ":" + s
    document.getElementById("time").innerHTML=dh
}
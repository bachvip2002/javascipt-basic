var w;
function openweb(){
    w = window.open("http://ap.poly.edu.vn/");
}
function dongweb(){
    if(w.closed == false){
        w.close();
    }
}
function kiemtra(){
    if(w.closed === false){
        alert("Chưa đóng trang web");
    }else{
        alert("Đã đóng trang web")
    }
}
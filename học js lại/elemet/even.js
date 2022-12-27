var click = document.querySelector(`.click`);
console.log([click]);
console.log(click.style);
var hienthi = document.querySelector(`.abc`);
var inp = document.querySelector('.inp');
console.log(inp);

click.onclick = function (a) { //ts a la cua click
    
    if (hienthi.style.width == 0) {
        hienthi.style.width = "100%";
        hienthi.style.height = "1000px";
        hienthi.style.transition = "0.3";
    }
    else {
        hienthi.style.width = "0";
        hienthi.style.height = "0";
    }
}

var select = hienthi.nextElementSibling;
var op = select.children;
console.log([select]);
console.log(op);
for (var i = 0; i < op.length; i++) {
    console.log(op[i].attributes)
    console.log(op[i].attributes.value)
}

inp.onchange = function(a){
    // for (var i = 0; i < op.length; i++) {
    //     console.log(op[i].attributes.value);
    // }
    console.log(a);//doi tuong a khi dc nhan trong xu ly
    console.log( a.target.value);
}

var click_every = document.querySelectorAll(".copy");
console.log([click_every[0]]);
console.log(click_every[0].outerHTML);
console.log(click_every[0].target);//thuoc tinh nay chi danh cho doi tuong duoc xu ly
for(var i = 0; i < click_every.length ; i++){
    click_every[i].onclick = function(a){
        console.log(a);//khi click tra ve thuoc tinh cua onlick

        console.log(a.target);//a vi la doi tuong trong su kien nen k dung dc outterHTML
        //target tra ve hanh dong vua duoc thuc thi
        // console.log(a[i]);
    }
    // if(i == 3){
    //     continue
    // }
}




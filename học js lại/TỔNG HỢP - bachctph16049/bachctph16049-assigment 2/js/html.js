const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const img = $$('.anh');
const button = $$('button')
const number = $('.so')
console.log(img)

console.log(button)


button[0].onclick = function () {
    perv()
}
button[1].onclick = function () {
    next()
}

setInterval(
    function(){
        next()
    }
,5000)

var index = 0;
function perv(){
    $('.anh.active').classList.remove('active')
    if (index < 0) {
        index = img.length;
    }else{
        index -= 1;
    }
    img[index].classList.add('active');
    number.innerHTML = index + 1;
}
function next(){
    $('.anh.active').classList.remove('active')
    if (index > img.length) {
        index = 0;
    }else{
        index += 1;
    }
    img[index].classList.add('active');
    number.innerHTML = index + 1;
}


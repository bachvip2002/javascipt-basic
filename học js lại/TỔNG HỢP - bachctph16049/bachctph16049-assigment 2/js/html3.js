function all() {
    var form = document.querySelector(`form`);
    var soluong = document.querySelectorAll("input[type=number]");
    var chon = form.children;
    // xu ly element select
    chon[0].onchange = function (a) {
        var value = a.target.value.split("-");
        // console.log(value);
        // console.log(price_tr);
        //xu ly an hien cac truong element
        for (let i = 0; i < value.length; i++) {
            save = parseInt(value[i]);
            int_tr = []
            for (let u = 0; u < price_tr.length; u++) {
                int_tr = price_tr[u].children[2].innerHTML;
                if (value[i] == 1) {
                    if (int_tr < 100) {
                        price_tr[u].style.display = ""
                    } else {
                        price_tr[u].style.display = "none"
                        // price_tr[u].remove(); 
                    }
                } else if (value[i] == 2) {
                    if (int_tr > 100 && int_tr < 500) {
                        price_tr[u].style.display = ""
                    } else {
                        price_tr[u].style.display = "none"
                    }
                } else if (value[i] == 3) {
                    if (int_tr > 500) {
                        price_tr[u].style.display = ""
                    } else {
                        price_tr[u].style.display = "none"
                    }
                } else {
                    price_tr[u].style.display = ""
                }

                // if(price_tr[u].style.display == "none"){
                //     price_tr[u].children[0].children[0].checked = true;
                //     console.log(price_tr[u].children[0].children[0].checked)
                // }
            }
        }
    }

    // xu ly element td voi gia 
    console.log(chon[0])
    var mang = []
    for (let i = 0; i < chon[1].children.length; i++) {
        mang[i] = chon[1].children[i];
    }
    var price_tr = [];
    var check_tr = [];
    for (let i = 0; i < mang[1].children.length; i++) {
        price_tr[i] = mang[1].children[i].children[2].parentElement;
        check_tr[i] = mang[1].children[i].children[0].children[0];
    }
    // console.log(price_tr[0])
    // console.log(check_tr)

    //check all
    mang[0].onclick = function (a) {
        check_tr.forEach(function (checkbox, index) {
            if (a.target.checked == true) {
                checkbox.checked = true;
                soluong[index].disabled = false;
            } else {
                checkbox.checked = false;
                soluong[index].disabled = true;
            }
        });
    }

    //check 1
    check_tr.forEach(
        function (checkbox, index) {
            checkbox.onclick = function (a) {
                // console.log( soluong[index])
                if (a.target.checked == true) {
                    soluong[index].disabled = false;
                } else {
                    soluong[index].disabled = true;
                }
            }
        }
    );


    //tinh gia tien theo so luong
    var luu = [];
    var tong = 0;
    var save_tong = soluong.forEach(
        function (checkbox, index) {
            luu[index] = parseInt(checkbox.parentElement.previousElementSibling.innerHTML);
            checkbox.value * luu[index];
            checkbox.oninput = function (a) {
                if (checkbox.disabled == false) {
                    checkbox.parentElement.nextElementSibling.innerHTML = `${checkbox.value * luu[index]}`;
                    tong += parseInt(checkbox.parentElement.nextElementSibling.innerHTML);
                }
                chon[1].children[2].children[0].children[1].innerHTML = tong

                // price_tr.forEach(
                //     function(check){
                //         console.log(check.style);
                //         if(check.style.display == "none"){

                //         }
                //     }
                // )
            }
        }
    )


}
window.onload = function () {
    all();
}
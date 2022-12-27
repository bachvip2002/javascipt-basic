const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const fullname = $('#fullname');
const user = $('#user');
const pass = $('#password');
const passTwo = $('#passwordTwo');
const email = $('#email');
const phone = $('#phone');
const adress = $('#adress');
const gioitinh = $$('input[type=radio]');
const checkbox = $$('input[type=checkbox]');
const show = $$('.form-message');
var arr = [fullname, user, pass, passTwo, email, phone, adress, gioitinh, checkbox];

function all_error(ts1,ts2,ts3){
    //0 - 5
    if(ts1){
        ts1.forEach(
            (value, index) => {
                value.oninput = (a) => { // neu value rong
                    var check = empty(arr);
                    // console.log(a)
                }
            }
        )
    }
    // //8
    // if(ts2){
    //     ts2.forEach(
    //         (value, index) => {
    //             value.oninput = (a) => { // neu value rong
    //                 var check = empty(arr);
    //                 // console.log(a)
    //             }
    //         }
    //     )
    // }
    // //7
    // if(ts3){
    //     ts3.forEach(
    //         (value, index) => {
    //             value.oninput = (a) => { // neu value rong
    //                 var check = empty(arr);
    //                 // console.log(a)
    //             }
    //         }
    //     )
    // }
}
all_error(arr,checkbox,gioitinh)




$('#form-main').onsubmit = (a) => {
    a.preventDefault();
    // console.log(this)
    var check = empty(arr);
    return check;
}

function show_error(ts1, ts2) {

    ts1.innerHTML = `${ts2}`;
    Object.assign(
        ts1.style, {
        color: "red"
    }
    )

}

function show_success(ts1) {
    ts1.innerHTML = "Bạn đã nhập đúng";
    Object.assign(
        ts1.style, {
        color: "#1dbfaf"
    }
    )
}

function empty(mang) {
    // console.log(mang)
    var inputObj = {
        fullname: mang[0],
        user: mang[1],
        pass: mang[2],
        passTwo: mang[3],
        email: mang[4],
        phone: mang[5],
        adress: mang[6],
        gioitinh: mang[7],
        checkbox: mang[8],
    }

    //0 - 5
    var i = 0;
    for (const key in inputObj) {
        if (inputObj[key].value == "") {
            check = false;
            show_error(show[i], "Bạn chưa nhập");
        } else {
            show_success(show[i]);
        }
        i++;
        if (i == 6) {
            break;
        }
    }
    //6
    if (inputObj.adress.value == 0) {
        check = false;
        show_error(show[6], "Bạn chưa chọn khu vực");
    } else {
        show_success(show[6]);
    }

    //7
    for (const key in inputObj.gioitinh) {

        if (inputObj.gioitinh[0].checked == true || inputObj.gioitinh[1].checked == true) {
            show_success(show[7]);
        } else if (inputObj.gioitinh[0].checked == false && inputObj.gioitinh[1].checked == false) {
            check = false;
            show_error(show[7], "Bạn chưa chọn giới tính");
        }

    }

    //8
    var valueCheckbox = [];
    for (var key = 0; key < inputObj.checkbox.length; key++) {
        if (inputObj.checkbox[key].checked == true) {
            valueCheckbox.push(key);
        }
    }

    if (valueCheckbox.length == 0) {
        check = false;
        show_error(show[8], "Bạn chưa chọn sở thích");
    } else {
        show_success(show[8]);
    }

    return check;
}

function hople(){

}
